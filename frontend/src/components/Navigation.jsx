import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, Download } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1024
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' }
  ];

  // Styles
  const navStyle = {
    position: 'fixed',
    top: 0,
    width: '100%',
    zIndex: 50,
    background: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
    backdropFilter: isScrolled ? 'blur(10px)' : 'none',
    boxShadow: isScrolled ? '0 4px 6px rgba(0,0,0,0.1)' : 'none',
    transition: 'all 0.3s ease'
  };

  const containerStyle = {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 1rem'
  };

  const navContentStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 0'
  };

  const logoStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    background: 'linear-gradient(45deg, #8B4513, #D2691E)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  };

  const navLinksContainerStyle = {
    display: windowWidth >= 768 ? 'flex' : 'none',
    gap: '1rem',
    alignItems: 'center'
  };

  const navLinkStyle = {
    color: '#333',
    textDecoration: 'none',
    fontWeight: '500',
    fontSize: '0.9rem',
    transition: 'color 0.2s ease',
    ':hover': {
      color: '#8B4513'
    }
  };

  const socialLinksStyle = {
    display: windowWidth >= 768 ? 'flex' : 'none',
    gap: '1rem',
    alignItems: 'center'
  };

  const buttonStyle = {
    backgroundColor: '#8B4513',
    color: 'white',
    padding: '0.5rem 1rem',
    borderRadius: '0.375rem',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    transition: 'background-color 0.2s ease',
    ':hover': {
      backgroundColor: '#6B3A10'
    }
  };

  const mobileMenuButtonStyle = {
    display: windowWidth < 768 ? 'block' : 'none',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    color: '#8B4513'
  };

  const mobileMenuStyle = {
    display: isMenuOpen ? 'flex' : 'none',
    flexDirection: 'column',
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    background: 'rgba(255, 255, 255, 0.98)',
    backdropFilter: 'blur(12px)',
    padding: '1.5rem',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
    zIndex: 40,
    borderRadius: '0 0 12px 12px',
    borderTop: '1px solid rgba(0, 0, 0, 0.1)',
    animation: isMenuOpen ? 'fadeIn 0.3s ease-out' : 'none'
  };

  const mobileNavItemStyle = {
    padding: '0.75rem 0',
    color: '#333',
    textDecoration: 'none',
    display: 'block',
    fontWeight: '500',
    fontSize: '1rem',
    transition: 'all 0.2s ease',
    borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
    ':hover': {
      color: '#8B4513',
      paddingLeft: '8px'
    }
  };

  const mobileSocialLinksStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '1.5rem',
    marginTop: '1.5rem',
    paddingTop: '1rem',
    borderTop: '1px solid rgba(0, 0, 0, 0.05)'
  };

  const mobileButtonStyle = {
    ...buttonStyle,
    width: '100%',
    marginTop: '1.5rem',
    justifyContent: 'center'
  };

  return (
    <nav style={navStyle}>
      <div style={containerStyle}>
        <div style={navContentStyle}>
          <h1 style={logoStyle}>Faith Wanjiku</h1>

          <div style={navLinksContainerStyle}>
            {navItems.map(item => (
              <a key={item.name} href={item.href} style={navLinkStyle}>
                {item.name}
              </a>
            ))}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={socialLinksStyle}>
              <a href="https://github.com/wanjiku8" aria-label="GitHub">
                <Github size={20} color="#8B4513" />
              </a>
              <a href="https://www.linkedin.com/in/wanjiku-faith-637094272/" aria-label="LinkedIn">
                <Linkedin size={20} color="#8B4513" />
              </a>
              <a href="mailto:Wanjikuf141@gmail.com" aria-label="Email">
                <Mail size={20} color="#8B4513" />
              </a>
            </div>
            <a 
              href="https://docs.google.com/document/d/17bclhrdKt-5k9ad0aBIxi5ynwaqyrkGY89nRKlLujmc/export?format=pdf" 
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
              download="Faith_Wanjiku_Resume.pdf"
            >
              <button style={buttonStyle}>
                <Download size={16} />
                {windowWidth > 768 ? 'Resume' : 'CV'}
              </button>
            </a>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={mobileMenuButtonStyle}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div style={mobileMenuStyle}>
            {navItems.map(item => (
              <a
                key={item.name}
                href={item.href}
                style={mobileNavItemStyle}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div style={mobileSocialLinksStyle}>
              <a href="https://github.com/wanjiku8" aria-label="GitHub">
                <Github size={20} color="#8B4513" />
              </a>
              <a href="https://www.linkedin.com/in/wanjiku-faith-637094272/" aria-label="LinkedIn">
                <Linkedin size={20} color="#8B4513" />
              </a>
              <a href="mailto:Wanjikuf141@gmail.com" aria-label="Email">
                <Mail size={20} color="#8B4513" />
              </a>
            </div>
            <a 
              href="https://docs.google.com/document/d/17bclhrdKt-5k9ad0aBIxi5ynwaqyrkGY89nRKlLujmc/export?format=pdf" 
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
              download="Faith_Wanjiku_Resume.pdf"
            >
              <button style={mobileButtonStyle}>
                <Download size={16} /> Resume
              </button>
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;