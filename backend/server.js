require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');

const app = express();

// Security Middleware
app.use(helmet());
app.use(cors({
  origin: [
    'https://faith-wanjiku-portfolio.onrender.com',
    'http://localhost:3000'
  ]
}));
app.use(express.json());

// Rate Limiting
app.use(rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: 'Too many requests from this IP'
}));

// Enhanced Email Transport with Debugging
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
  debug: true, // Show debug output
  logger: true // Log information in console
});

// Verify connection on startup
transporter.verify((error, success) => {
  if (error) {
    console.error('SMTP Connection Error:', error);
  } else {
    console.log('Server is ready to send emails');
  }
});

// Enhanced Contact Endpoint
app.post('/api/contact', async (req, res) => {
  console.log('\n=== New Form Submission Received ===');
  console.log('Request Body:', req.body);

  try {
    const { name, email, subject, message } = req.body;

    // Validation
    if (!name || !email || !subject || !message) {
      console.log('Validation failed - missing fields');
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Enhanced Email Options
    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: 'wanjikuf141@gmail.com',
      replyTo: email,
      subject: `New Contact: ${subject}`,
      text: `
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        Message: 
        ${message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #8B4513;">New Contact Form Submission</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #ddd; width: 100px;"><strong>From:</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Email:</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Subject:</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;">${subject}</td>
            </tr>
          </table>
          <div style="background-color: #f8f4f0; padding: 15px; border-radius: 5px; margin-top: 20px;">
            <p style="margin: 0;">${message.replace(/\n/g, '<br>')}</p>
          </div>
          <p style="margin-top: 20px; font-size: 12px; color: #777;">
            Sent from your portfolio contact form
          </p>
        </div>
      `
    };

    console.log('\nAttempting to send email with options:');
    console.log(mailOptions);

    // Send Email
    const info = await transporter.sendMail(mailOptions);
    
    console.log('\nEmail sent successfully!');
    console.log('Message ID:', info.messageId);
    console.log('Preview URL:', nodemailer.getTestMessageUrl(info));

    res.status(200).json({ 
      success: true,
      message: 'Message sent successfully!',
      messageId: info.messageId
    });

  } catch (error) {
    console.error('\n!!! Email Send Error !!!');
    console.error('Full error:', error);
    console.error('Error response:', error.response);

    res.status(500).json({ 
      success: false,
      error: 'Failed to send message',
      details: error.toString(),
      response: error.response 
    });
  }
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`\nServer running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});