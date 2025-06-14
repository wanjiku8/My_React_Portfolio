import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [formErrors, setFormErrors] = useState({});
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [serverError, setServerError] = useState('');

  // Handle window resizing
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email';
    }
    if (!formData.subject.trim()) errors.subject = 'Subject is required';
    if (!formData.message.trim()) errors.message = 'Message is required';
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setServerError('');
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitSuccess(false);

    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/contact`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      // First check if response is OK (status 200-299)
      if (!response.ok) {
        // Try to parse error response as JSON, fallback to text if that fails
        try {
          const errorData = await response.json();
          throw new Error(errorData.error || 'Failed to send message');
        } catch (jsonError) {
          const errorText = await response.text();
          throw new Error(errorText || 'Failed to send message');
        }
      }

      // Try to parse successful response
      try {
        const data = await response.json();
        // Reset form on success
        setFormData({ name: '', email: '', subject: '', message: '' });
        setFormErrors({});
        setSubmitSuccess(true);
      } catch (jsonError) {
        // If JSON parsing fails but response was OK, still consider it a success
        setFormData({ name: '', email: '', subject: '', message: '' });
        setFormErrors({});
        setSubmitSuccess(true);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setServerError(error.message || 'An error occurred while submitting your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
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
      value: '+254 112 580 258',
      href: 'tel:+254112580258'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Nairobi, Kenya',
      href: 'https://maps.google.com/?q=Nairobi,Kenya'
    }
  ];

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
      color: '#D2691E',
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
      justifyContent: 'center'
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
      fontSize: windowWidth > 768 ? '1rem' : '0.9375rem',
      '&:hover': {
        color: '#8B4513'
      }
    },
    card: {
      backgroundColor: 'white',
      borderRadius: '0.5rem',
      padding: windowWidth > 768 ? '2rem' : '1.5rem',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      marginTop: windowWidth >= 1024 ? '0' : '1rem',
      width: '100%'
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
      border: formErrors.name || formErrors.email ? '1px solid #ef4444' : '1px solid #d1d5db',
      fontSize: '1rem',
      outline: 'none'
    },
    textarea: {
      width: '100%',
      padding: '0.75rem',
      borderRadius: '0.375rem',
      border: formErrors.message ? '1px solid #ef4444' : '1px solid #d1d5db',
      fontSize: '1rem',
      minHeight: '8rem',
      resize: 'vertical'
    },
    submitButton: {
      backgroundColor: isSubmitting ? '#6B3A10' : '#8B4513',
      color: 'white',
      padding: '0.75rem 1.5rem',
      borderRadius: '0.375rem',
      border: 'none',
      fontSize: '1rem',
      fontWeight: '500',
      cursor: isSubmitting ? 'not-allowed' : 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.5rem',
      width: windowWidth < 768 ? '100%' : 'auto'
    },
    errorText: {
      color: '#ef4444',
      fontSize: '0.875rem',
      marginTop: '0.25rem'
    },
    successMessage: {
      color: '#16a34a',
      backgroundColor: '#f0fdf4',
      padding: '1rem',
      borderRadius: '0.375rem',
      marginBottom: '1rem',
      textAlign: 'center'
    },
    errorMessage: {
      color: '#ef4444',
      backgroundColor: '#fef2f2',
      padding: '1rem',
      borderRadius: '0.375rem',
      marginBottom: '1rem',
      textAlign: 'center'
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
                  <a href={item.href} style={styles.contactValue} target="_blank" rel="noopener noreferrer">
                    {item.value}
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div style={styles.card}>
            <h3 style={styles.formTitle}>Send a Message</h3>
            {submitSuccess && (
              <div style={styles.successMessage}>
                Thank you! Your message has been sent successfully.
              </div>
            )}
            {serverError && (
              <div style={styles.errorMessage}>
                {serverError}
              </div>
            )}
            <form onSubmit={handleSubmit} style={styles.form}>
              <div style={styles.formGroup}>
                <div style={{ width: '100%' }}>
                  <label htmlFor="name" style={styles.label}>Name *</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    style={styles.input}
                  />
                  {formErrors.name && <p style={styles.errorText}>{formErrors.name}</p>}
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
                  {formErrors.email && <p style={styles.errorText}>{formErrors.email}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="subject" style={styles.label}>Subject *</label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Subject of your message"
                  style={styles.input}
                />
                {formErrors.subject && <p style={styles.errorText}>{formErrors.subject}</p>}
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
                {formErrors.message && <p style={styles.errorText}>{formErrors.message}</p>}
              </div>

              <button
                type="submit"
                style={styles.submitButton}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : <><Send size={18} /> Send Message</>}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;