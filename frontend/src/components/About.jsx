import React, { useState, useEffect } from 'react';
import { Users, Award, Coffee, Lightbulb } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, label: 'Happy Clients', value: '20+' },
    { icon: Award, label: 'Projects Completed', value: '30+' },
    { icon: Coffee, label: 'Cups of Coffee', value: '1000+' },
    { icon: Lightbulb, label: 'Ideas Realized', value: '20+' }
  ];

  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => setIsLargeScreen(window.innerWidth >= 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const sectionStyle = {
    padding: '5rem 0',
    backgroundColor: '#f8f4f0'
  };

  const containerStyle = {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 1rem'
  };

  const headerStyle = {
    textAlign: 'center',
    marginBottom: '4rem'
  };

  const titleStyle = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    background: 'linear-gradient(45deg, #8B4513, #D2691E)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    marginBottom: '1rem'
  };

  const subtitleStyle = {
    fontSize: '1.25rem',
    color: '#6B5B73',
    maxWidth: '48rem',
    margin: '0 auto'
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: isLargeScreen ? '1fr 1fr' : '1fr',
    gap: '3rem',
    alignItems: 'center'
  };

  const bioStyle = {
    marginBottom: '2rem'
  };

  const bioTitleStyle = {
    fontSize: '1.5rem',
    fontWeight: '600',
    marginBottom: '1.5rem',
    color: '#333'
  };

  const textStyle = {
    color: '#6B5B73',
    lineHeight: 1.6,
    marginBottom: '1rem'
  };

  const techSectionStyle = {
    marginTop: '2rem'
  };

  const techTitleStyle = {
    fontSize: '1.125rem',
    fontWeight: '600',
    marginBottom: '1rem',
    color: '#333'
  };

  const techGridStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem'
  };

  const techPillStyle = {
    padding: '0.25rem 0.75rem',
    backgroundColor: 'rgba(139, 69, 19, 0.1)',
    color: '#8B4513',
    borderRadius: '9999px',
    fontSize: '0.875rem',
    fontWeight: '500'
  };

  const statsGridStyle = {
    display: 'grid',
    gridTemplateColumns: isLargeScreen ? '1fr 1fr' : '1fr',
    gap: '1.5rem'
  };

  const statCardStyle = {
    textAlign: 'center',
    padding: '1.5rem',
    backgroundColor: 'white',
    borderRadius: '0.5rem',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease',
    cursor: 'pointer'
  };

  const statIconStyle = {
    marginBottom: '1rem'
  };

  const statValueStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#8B4513',
    marginBottom: '0.5rem'
  };

  const statLabelStyle = {
    color: '#6B5B73'
  };

  return (
    <section id="about" style={sectionStyle}>
      <div style={containerStyle}>
        <div style={headerStyle}>
          <h2 style={titleStyle}>About Me</h2>
          <p style={subtitleStyle}>
            Passionate fullstack developer with 2+ years of experience building scalable web applications
          </p>
        </div>

        <div style={gridStyle}>
          <div style={bioStyle}>
            <h3 style={bioTitleStyle}>My Journey</h3>
            <div>
              <p style={textStyle}>
                I'm a passionate fullstack developer who loves turning complex problems into simple, 
                beautiful designs. My journey in web development started 5 years ago when I wrote 
                my first line of code.
              </p>
              <p style={textStyle}>
                I specialize in React, Node.js, Python, and modern web technologies. I believe in 
                writing clean, maintainable code and creating user experiences that make a difference.
              </p>
              <p style={textStyle}>
                When I'm not coding, you can find me exploring new technologies, contributing to 
                open source projects, or sharing knowledge through my blog and mentoring.
              </p>
            </div>

            <div style={techSectionStyle}>
              <h4 style={techTitleStyle}>Technologies I Love</h4>
              <div style={techGridStyle}>
                {['React', 'Flask', 'Python', 'Node.js', 'PostgreSQL','CSS', 'Wordpress', 'PHP'].map((tech) => (
                  <span key={tech} style={techPillStyle}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div style={statsGridStyle}>
            {stats.map((stat, index) => (
              <div 
                key={index} 
                style={statCardStyle}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.15)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
                }}
              >
                <div style={statIconStyle}>
                  <stat.icon size={32} style={{ color: '#8B4513', margin: '0 auto' }} />
                </div>
                <h4 style={statValueStyle}>{stat.value}</h4>
                <p style={statLabelStyle}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
