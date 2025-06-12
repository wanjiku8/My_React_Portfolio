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
      // Close menu when switching to desktop view
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
    WebkitTextFillColor: 'transparent'
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
    fontSize: '0.9rem'
  };

  const socialLinksStyle = {
    display: windowWidth >= 768 ? 'flex' : 'none',
    gap: '1rem'
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
    gap: '0.5rem'
  };

  const mobileMenuButtonStyle = {
    display: windowWidth < 768 ? 'block' : 'none',
    background: 'none',
    border: 'none',
    cursor: 'pointer'
  };

  const mobileMenuStyle = {
    display: isMenuOpen ? 'block' : 'none',
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    background: 'rgba(139, 69, 19, 0.85)', // Semi-transparent brown
    backdropFilter: 'blur(12px)',
    padding: '1.5rem',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
    zIndex: 40,
    borderRadius: '0 0 12px 12px',
    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
    animation: isMenuOpen ? 'fadeIn 0.3s ease-out' : 'none',
    '@keyframes fadeIn': {
      from: { opacity: 0, transform: 'translateY(-10px)' },
      to: { opacity: 1, transform: 'translateY(0)' }
    }
  };

  const mobileNavItemStyle = {
    padding: '0.75rem 0',
    color: '#fff',
    textDecoration: 'none',
    display: 'block',
    fontWeight: '500',
    fontSize: '1rem',
    transition: 'all 0.2s ease',
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    ':hover': {
      color: '#FFD700',
      paddingLeft: '8px'
    }
  };

  const mobileSocialLinksStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '1.5rem',
    marginTop: '1.5rem',
    paddingTop: '1rem',
    borderTop: '1px solid rgba(255, 255, 255, 0.1)'
  };

  const mobileButtonStyle = {
    ...buttonStyle,
    width: '100%',
    marginTop: '1.5rem',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    ':hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.2)'
    }
  };

  return (
    <nav style={navStyle}>
      <div style={containerStyle}>
        <div style={navContentStyle}>
          {/* Logo */}
          <h1 style={logoStyle}>Faith Wanjiku</h1>

          {/* Desktop Nav Links */}
          <div style={navLinksContainerStyle}>
            {navItems.map(item => (
              <a key={item.name} href={item.href} style={navLinkStyle}>
                {item.name}
              </a>
            ))}
          </div>

          {/* Desktop Socials + Button */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={socialLinksStyle}>
               <a href="https://github.com"><Github size={20} color="#8a552d" /></a>
            <a href="https://linkedin.com"><Linkedin size={20} color="#8a552d" /></a>
            <a href="mailto:dev@example.com"><Mail size={20} color="#8a552d" /></a>
            </div>
            <button style={buttonStyle}>
              <Download size={16} />
              {windowWidth > 768 ? 'Resume' : 'CV'}
            </button>
          </div>

          {/* Hamburger for Mobile */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={mobileMenuButtonStyle}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
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
            <a href="https://github.com"><Github size={20} color="#fff" /></a>
            <a href="https://linkedin.com"><Linkedin size={20} color="#fff" /></a>
            <a href="mailto:dev@example.com"><Mail size={20} color="#fff" /></a>
          </div>
          <button style={mobileButtonStyle}>
            <Download size={16} color="#fff" /> Download Resume
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;