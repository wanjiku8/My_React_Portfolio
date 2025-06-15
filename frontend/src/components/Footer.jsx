import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1024
  );
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const socialLinks = [
    { icon: Github, href: 'https://github.com/wanjiku8.com', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/wanjiku-faith-637094272/', label: 'LinkedIn' },
    { icon: Mail, href: 'wanjikuf141@gmail.com', label: 'Email' }
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' }
  ];

  // Styles
  const footerStyle = {
    backgroundColor: '#1a1a1a',
    borderTop: '1px solid #333',
    color: 'white',
    overflowX: 'hidden',
    padding: '0 1rem' // ✅ Added horizontal padding to the entire footer
  };

  const containerStyle = {
    maxWidth: '1280px',
    width: '100%',
    margin: '0 auto',
    padding: windowWidth > 768 ? '3rem 2rem' : '2rem 1rem',
    boxSizing: 'border-box',
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: windowWidth >= 1024
      ? '2fr 1fr 1fr'
      : windowWidth >= 768
      ? '1fr 1fr'
      : '1fr',
    gap: windowWidth > 768 ? '2rem' : '1.5rem',
    marginBottom: windowWidth > 768 ? '0' : '1.5rem',
    width: '100%',
    boxSizing: 'border-box',
  };

  const brandStyle = {
    marginBottom: windowWidth > 768 ? '0' : '1.5rem',
  };

  const logoStyle = {
    fontSize: windowWidth > 768 ? '1.5rem' : '1.25rem',
    fontWeight: 'bold',
    background: 'linear-gradient(45deg, #8B4513, #D2691E)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    marginBottom: '1rem',
  };

  const descriptionStyle = {
    color: '#ccc',
    marginBottom: '1.5rem',
    maxWidth: '24rem',
    lineHeight: 1.6,
    fontSize: windowWidth > 768 ? '1rem' : '0.9375rem',
  };

  const socialContainerStyle = {
    display: 'flex',
    gap: '0.75rem',
    flexWrap: 'wrap',
    justifyContent: windowWidth < 768 ? 'center' : 'flex-start',
  };

  const socialLinkStyle = {
    width: windowWidth > 768 ? '2.5rem' : '2.25rem',
    height: windowWidth > 768 ? '2.5rem' : '2.25rem',
    backgroundColor: '#333',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#ccc',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
  };

  const sectionTitleStyle = {
    fontWeight: '600',
    marginBottom: '1rem',
    color: 'white',
    fontSize: windowWidth > 768 ? '1.125rem' : '1rem',
  };

  const linkListStyle = {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  };

  const linkItemStyle = {
    marginBottom: '0.5rem',
  };

  const linkStyle = {
    color: '#ccc',
    textDecoration: 'none',
    transition: 'color 0.3s ease',
    fontSize: windowWidth > 768 ? '1rem' : '0.9375rem',
  };

  const serviceListStyle = {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    color: '#ccc',
  };

  const serviceItemStyle = {
    marginBottom: '0.5rem',
    fontSize: windowWidth > 768 ? '1rem' : '0.9375rem',
  };

  const bottomSectionStyle = {
    borderTop: '1px solid #333',
    marginTop: windowWidth > 768 ? '3rem' : '2rem',
    paddingTop: '2rem',
    display: 'flex',
    flexDirection: windowWidth >= 768 ? 'row' : 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    textAlign: windowWidth < 768 ? 'center' : 'left',
    gap: windowWidth < 768 ? '1rem' : '0',
    width: '100%',
    boxSizing: 'border-box',
  };

  const copyrightStyle = {
    color: '#ccc',
    fontSize: '0.875rem',
  };

  const madeWithStyle = {
    color: '#ccc',
    fontSize: '0.875rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: windowWidth < 768 ? 'center' : 'flex-start',
    gap: '0.25rem',
  };

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <div style={gridStyle}>
          {/* Brand Section */}
          <div style={brandStyle}>
            <h3 style={logoStyle}>Faith Wanjiku</h3>
            <p style={descriptionStyle}>
              Passionate fullstack developer creating modern web applications with cutting-edge technologies.
              Always learning, always building, always improving.
            </p>
            <div style={socialContainerStyle}>
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  aria-label={link.label}
                  style={socialLinkStyle}
                >
                  <link.icon size={windowWidth > 768 ? 20 : 18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Section */}
          <div>
            <h4 style={sectionTitleStyle}>Quick Links</h4>
            <ul style={linkListStyle}>
              {quickLinks.map((link, index) => (
                <li key={index} style={linkItemStyle}>
                  <a href={link.href} style={linkStyle}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Section */}
          <div>
            <h4 style={sectionTitleStyle}>Services</h4>
            <ul style={serviceListStyle}>
              <li style={serviceItemStyle}>Web Development</li>
              <li style={serviceItemStyle}>Mobile Apps</li>
              <li style={serviceItemStyle}>API Development</li>
              <li style={serviceItemStyle}>UI/UX Design</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div style={bottomSectionStyle}>
          <p style={copyrightStyle}>
            © {currentYear} Faith Wanjiku. All rights reserved.
          </p>
          <p style={madeWithStyle}>
            Made by Faith Wanjiku
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
