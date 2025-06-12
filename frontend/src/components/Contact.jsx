import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message. I\'ll get back to you soon!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'wanjikuf141@gmail.com',
      href: 'mailto:wanjikuf141@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '0112580258',
      href: 'tel:0112580258'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Nairobi, Kenya',
      href: '#'
    }
  ];

  // Responsive CSS-in-JS styles
  const styles = {
    section: {
      padding: windowWidth > 768 ? '5rem 0' : '3rem 0',
      backgroundColor: '#f8f4f0'
    },
    container: {
      maxWidth: '1280px',
      margin: '0 auto',
      padding: windowWidth > 768 ? '0 2rem' : '0 1rem'
    },
    header: {
      textAlign: 'center',
      marginBottom: windowWidth > 768 ? '4rem' : '2rem'
    },
    title: {
      fontSize: windowWidth > 768 ? '2.5rem' : '2rem',
      fontWeight: 'bold',
      background: 'trensparent',
      WebkitBackgroundClip: 'text',
      color: ' #D2691E',
      WebkitTextFillColor: ' #D2691E',
      marginBottom: '1rem'
    },
    subtitle: {
      fontSize: windowWidth > 768 ? '1.25rem' : '1rem',
      color: '#6B5B73',
      maxWidth: '48rem',
      margin: '0 auto',
      lineHeight: 1.5
    },
    grid: {
      display: 'flex',
      flexDirection: windowWidth >= 1024 ? 'row' : 'column',
      gap: windowWidth > 768 ? '3rem' : '2rem'
    },
    connectTitle: {
      fontSize: windowWidth > 768 ? '1.5rem' : '1.25rem',
      fontWeight: '600',
      marginBottom: '1.5rem',
      color: '#333'
    },
    connectDesc: {
      color: '#6B5B73',
      marginBottom: '2rem',
      lineHeight: 1.6,
      fontSize: windowWidth > 768 ? '1rem' : '0.9375rem'
    },
    contactItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      marginBottom: '1.5rem'
    },
    iconContainer: {
      width: windowWidth > 768 ? '3rem' : '2.5rem',
      height: windowWidth > 768 ? '3rem' : '2.5rem',
      backgroundColor: 'rgba(139, 69, 19, 0.1)',
      borderRadius: '0.5rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    },
    contactLabel: {
      fontWeight: '500',
      color: '#333',
      marginBottom: '0.25rem',
      fontSize: windowWidth > 768 ? '1rem' : '0.9375rem'
    },
    contactValue: {
      color: '#6B5B73',
      textDecoration: 'none',
      transition: 'color 0.3s ease',
      fontSize: windowWidth > 768 ? '1rem' : '0.9375rem'
    },
    card: {
      backgroundColor: 'white',
      borderRadius: '0.5rem',
      padding: windowWidth > 768 ? '2rem' : '1.5rem',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      marginTop: windowWidth >= 1024 ? '0' : '1rem'
    },
    formTitle: {
      fontSize: windowWidth > 768 ? '1.25rem' : '1.1rem',
      fontWeight: '600',
      marginBottom: '1.5rem',
      color: '#333'
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem'
    },
    formGroup: {
      display: 'flex',
      flexDirection: windowWidth >= 768 ? 'row' : 'column',
      gap: '1rem'
    },
    label: {
      display: 'block',
      fontSize: '0.875rem',
      fontWeight: '500',
      marginBottom: '0.5rem',
      color: '#333'
    },
    input: {
      width: '100%',
      padding: '0.75rem',
      borderRadius: '0.375rem',
      border: '1px solid #d1d5db',
      fontSize: '1rem',
      outline: 'none'
    },
    textarea: {
      width: '100%',
      padding: '0.75rem',
      borderRadius: '0.375rem',
      border: '1px solid #d1d5db',
      fontSize: '1rem',
      minHeight: '8rem',
      resize: 'vertical'
    },
    submitButton: {
      backgroundColor: '#8B4513',
      color: 'white',
      padding: '0.75rem 1.5rem',
      borderRadius: '0.375rem',
      border: 'none',
      fontSize: '1rem',
      fontWeight: '500',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.5rem',
      width: windowWidth < 768 ? '100%' : 'auto'
    }
  };

  return (
    <section id="contact" style={styles.section}>
      <div style={styles.container}>
        <div style={styles.header}>
          <h2 style={styles.title}>Get In Touch</h2>
          <p style={styles.subtitle}>
            Ready to start your next project? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </div>

        <div style={styles.grid}>
          <div>
            <h3 style={styles.connectTitle}>Let's Connect</h3>
            <p style={styles.connectDesc}>
              I'm always excited to discuss new opportunities — freelance projects, full-time positions or collaborations!
            </p>

            {contactInfo.map((item, index) => (
              <div key={index} style={styles.contactItem}>
                <div style={styles.iconContainer}>
                  <item.icon size={windowWidth > 768 ? 24 : 20} color="#8B4513" />
                </div>
                <div>
                  <p style={styles.contactLabel}>{item.label}</p>
                  <a 
                    href={item.href}
                    style={styles.contactValue}
                    onMouseOver={(e) => e.target.style.color = '#8B4513'}
                    onMouseOut={(e) => e.target.style.color = '#6B5B73'}
                  >
                    {item.value}
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div style={styles.card}>
            <h3 style={styles.formTitle}>Send a Message</h3>
            <form onSubmit={handleSubmit} style={styles.form}>
              <div style={styles.formGroup}>
                <div style={{ width: '100%' }}>
                  <label htmlFor="name" style={styles.label}>Name *</label>
                  <input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                    style={styles.input}
                  />
                </div>
                <div style={{ width: '100%' }}>
                  <label htmlFor="email" style={styles.label}>Email *</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    style={styles.input}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" style={styles.label}>Subject *</label>
                <input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="What's this about?"
                  style={styles.input}
                />
              </div>

              <div>
                <label htmlFor="message" style={styles.label}>Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Your message here..."
                  style={styles.textarea}
                />
              </div>

              <button type="submit" style={styles.submitButton}>
                <Send size={18} /> Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;