require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const rateLimit = require('express-rate-limit');
const validator = require('validator');
const helmet = require('helmet');
const mongoose = require('mongoose');
const { body, validationResult } = require('express-validator');
const recaptcha = require('express-recaptcha-v3').RecaptchaV3;

const app = express();

// Database Connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('MongoDB connection error:', err));

// Message Schema
const messageSchema = new mongoose.Schema({
  name: String,
  email: String,
  subject: String,
  message: String,
  ipAddress: String,
  createdAt: { type: Date, default: Date.now }
});
const Message = mongoose.model('Message', messageSchema);

// Security Middleware
app.use(helmet());
app.use(cors({
  origin: [
    'https://faith-wanjiku-portfolio.onrender.com/',
    'http://localhost:3000'
  ]
}));
app.use(express.json());

// Rate Limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: 'Too many requests from this IP'
});
app.use(limiter);

// reCAPTCHA
const recaptchaMiddleware = new recaptcha(
  process.env.RECAPTCHA_SITE_KEY,
  process.env.RECAPTCHA_SECRET_KEY
);

// Email Transport
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Contact Form Endpoint
app.post('/api/contact', 
  recaptchaMiddleware.middleware.verify,
  [
    body('name').trim().notEmpty().withMessage('Name is required'),
    body('email').isEmail().normalizeEmail().withMessage('Valid email required'),
    body('subject').trim().notEmpty().withMessage('Subject is required'),
    body('message').trim().isLength({ min: 10 }).withMessage('Message too short')
  ],
  async (req, res) => {
    try {
      // Validate inputs
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      // Verify CAPTCHA
      if (!req.recaptcha?.score || req.recaptcha.score < 0.5) {
        return res.status(400).json({ error: 'CAPTCHA verification failed' });
      }

      const { name, email, subject, message } = req.body;

      // Store in database
      const newMessage = new Message({
        name,
        email,
        subject,
        message,
        ipAddress: req.ip
      });
      await newMessage.save();

      // Send to owner
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: 'wanjikuf141@gmail.com',
        replyTo: email,
        subject: `New Contact: ${subject}`,
        html: generateOwnerEmail(name, email, subject, message)
      });

      // Send confirmation to user
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: email,
        subject: `Thanks for contacting me!`,
        html: generateConfirmationEmail(name)
      });

      res.status(200).json({ message: 'Message sent successfully!' });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
);

// Email Templates
function generateOwnerEmail(name, email, subject, message) {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #8B4513;">New Contact Form Submission</h2>
      <p><strong>From:</strong> ${name} (${email})</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <h3>Message:</h3>
      <div style="background: #f8f4f0; padding: 15px; border-radius: 5px;">
        ${message.replace(/\n/g, '<br>')}
      </div>
      <hr style="border: 0; border-top: 1px solid #eee;">
      <p style="font-size: 0.9em; color: #777;">
        Sent from your portfolio website - ${new Date().toLocaleString()}
      </p>
    </div>
  `;
}

function generateConfirmationEmail(name) {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #8B4513;">Thank You, ${name}!</h2>
      <p>I've received your message and will get back to you within 48 hours.</p>
      <p>For urgent inquiries, please call me at 0112580258.</p>
      <hr style="border: 0; border-top: 1px solid #eee;">
      <p style="font-size: 0.9em; color: #777;">
        Faith Wanjiku - Nairobi, Kenya<br>
        <a href="mailto:wanjikuf141@gmail.com">wanjikuf141@gmail.com</a>
      </p>
    </div>
  `;
}

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});