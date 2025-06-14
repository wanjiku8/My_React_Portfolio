import React, { useState, useEffect } from 'react';
import { ArrowDown, Code, Zap, Globe, Coffee, Sparkles, Heart, Star, Lightbulb } from 'lucide-react';

const Hero = () => {
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Animation styles
  const floatingStyle = {
    animation: 'floating 6s ease-in-out infinite',
    position: 'absolute'
  };

  const pulseGlowStyle = {
    animation: 'pulse-glow 2s ease-in-out infinite',
    boxShadow: '0 0 20px rgba(139, 69, 19, 0.5)'
  };

  // Layout styles
  const heroStyle = {
    minHeight: '100vh',
    position: 'relative',
    // overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    width: '100%'
  };

  const backgroundStyle = {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(135deg, #f8f4f0 0%, #e8ddd4 50%, #d4c4b0 100%)',
    zIndex: -1
  };

  const floatingContainerStyle = {
    position: 'absolute',
    inset: 0,
    zIndex: 0,
    // overflow: 'hidden',
    width: '100%',
    maxWidth: '1280px',
    left: '50%',
    transform: 'translateX(-50%)'
  };

  // Responsive decorative elements
  const getFloatingElementStyle = (size, position) => ({
    ...floatingStyle,
    width: `${windowWidth > 768 ? size : size * 0.75}px`,
    height: `${windowWidth > 768 ? size : size * 0.75}px`,
    ...position,
    opacity: windowWidth > 768 ? 0.2 : 0.15,
    borderRadius: '50%'
  });

  const floatingElements = [
    {
      style: getFloatingElementStyle(48, { top: '5.4rem', left: '4rem' }),
      background: 'radial-gradient(circle, #8B4513 20%, #654321 80%)',
      delay: '0s'
    },
    {
      style: getFloatingElementStyle(32, { top: '8rem', right: '5rem' }),
      background: 'radial-gradient(circle, #A0522D 40%, #704214 90%)',
      delay: '1.5s'
    },
    {
      style: getFloatingElementStyle(40, { bottom: '10rem', left: '33%' }),
      background: 'radial-gradient(circle, #D2691E 30%, #8B4513 70%)',
      delay: '3s'
    }
  ];

  const geometricShapeStyle = {
    ...floatingStyle,
    top: '25%',
    right: windowWidth > 768 ? '25%' : '15%',
    width: windowWidth > 768 ? '4rem' : '3rem',
    height: windowWidth > 768 ? '4rem' : '3rem',
    opacity: 0.1,
    background: 'linear-gradient(45deg, #654321, #8B4513)',
    clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
    animationDelay: '2s'
  };

  // Main content styles
  const containerStyle = {
    position: 'relative',
    zIndex: 10,
    maxWidth: '1280px',
    margin: '0 auto',
    padding: windowWidth > 768 ? '5rem 2rem' : '3rem 1.25rem',
    width: '100%',
    boxSizing: 'border-box',
    // overflow: 'hidden' 
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: windowWidth >= 1024 ? '1fr 1fr' : '1fr',
    gap: windowWidth > 768 ? '3rem' : '2rem',
    alignItems: 'center',
    padding: '0',
    width: '100%'
  };

  const badgeStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '0.5rem 1rem',
    borderRadius: '9999px',
    background: 'rgba(255, 255, 255, 0.2)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(139, 69, 19, 0.2)',
    marginBottom: windowWidth > 768 ? '2rem' : '1.5rem'
  };

  const headingStyle = {
    fontSize: windowWidth >= 1024 ? '4.5rem' : 
              windowWidth >= 768 ? '3.5rem' : 
              windowWidth >= 480 ? '2.5rem' : '2rem',
    fontWeight: 'bold',
    lineHeight: 1.1,
    marginBottom: '1rem',
    // overflow: 'hidden'
  };

  const gradientTextStyle = {
    background: 'linear-gradient(45deg, #8B4513, #D2691E)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  };

  const descriptionStyle = {
    fontSize: windowWidth > 768 ? '1.125rem' : '1rem',
    color: '#6B5B73',
    lineHeight: 1.6,
    maxWidth: '32rem',
    marginBottom: windowWidth > 768 ? '2rem' : '1.5rem',
    // overflow: 'hidden'
  };

  const techStackStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.75rem',
    marginBottom: windowWidth > 768 ? '2rem' : '1.5rem',
    // overflow: 'hidden'
  };

  const techPillStyle = {
    padding: '0.5rem 1rem',
    borderRadius: '9999px',
    backgroundColor: '#f3f4f6',
    color: '#374151',
    fontSize: '0.875rem',
    fontWeight: '500'
  };

  const buttonContainerStyle = {
    display: 'flex',
    flexDirection: windowWidth >= 640 ? 'row' : 'column',
    gap: '1rem',
    paddingTop: '1rem',
    // overflow: 'hidden'
  };

  const buttonBaseStyle = {
    padding: '0.75rem 1.5rem',
    borderRadius: '0.375rem',
    fontSize: '1rem',
    fontWeight: '500',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    width: windowWidth < 640 ? '100%' : 'auto',
    transition: 'all 0.3s ease',
    // overflow: 'hidden'
  };

  const primaryButtonStyle = {
    ...buttonBaseStyle,
    backgroundColor: '#8B4513',
    color: 'white',
    border: 'none',
    ':hover': {
      backgroundColor: '#A0522D'
    }
  };

  const secondaryButtonStyle = {
    ...buttonBaseStyle,
    backgroundColor: 'transparent',
    color: '#8B4513',
    border: '2px solid #8B4513',
    ':hover': {
      backgroundColor: 'rgba(139, 69, 19, 0.1)'
    }
  };

  // Card styles
  const cardStyle = {
    background: 'rgba(255, 255, 255, 0.2)',
    backdropFilter: 'blur(10px)',
    borderRadius: '1.5rem',
    padding: windowWidth > 768 ? '2rem' : '1.5rem',
    border: '1px solid rgba(139, 69, 19, 0.2)',
    position: 'relative',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    ':hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)'
    },
    marginTop: windowWidth < 1024 ? '2rem' : '0',
    marginLeft: '0',
    marginRight: '0',
    // overflow: 'hidden'
  };

  const codeBlockStyle = {
    backgroundColor: '#8a552d',
    borderRadius: '0.5rem',
    padding: windowWidth > 768 ? '1.5rem' : '1rem',
    marginBottom: '1.5rem',
    border: '1px solidrgb(210, 211, 213)',
    overflowX: 'auto',
    // overflowY: 'hidden'
  };

  const statsGridStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '1rem',
    // overflow: 'hidden'
  };

  const statCardStyle = {
    textAlign: 'center',
    padding: '1rem',
    backgroundColor: '#f3f4f6',
    borderRadius: '0.5rem',
    // overflow: 'hidden'
  };

  // Specialties section
  const specialtiesContainerStyle = {
    paddingBottom: windowWidth >= 768 ? '5rem' : '3rem',
    marginTop: windowWidth > 768 ? '0' : '2rem',
    // overflow: 'hidden'
  };

  const specialtiesGridStyle = {
    display: 'grid',
    gridTemplateColumns: windowWidth >= 1024 ? '1fr 1fr 1fr' : 
                         windowWidth >= 768 ? '1fr 1fr' : '1fr',
    gap: '1.5rem',
    padding: '0',
    // overflow: 'hidden'
  };

  const specialtyCardStyle = {
    background: 'rgba(255, 255, 255, 0.2)',
    backdropFilter: 'blur(10px)',
    borderRadius: '0.75rem',
    marginTop: '5rem',
    padding: windowWidth > 768 ? '1.5rem' : '1rem',
    border: '1px solid rgba(139, 69, 19, 0.2)',
    textAlign: 'center',
    transition: 'transform 0.3s ease',
    ':hover': {
      transform: 'translateY(-5px)'
    },
    // overflow: 'hidden'
  };

  const specialtyIconStyle = {
    width: windowWidth > 768 ? '3rem' : '2.5rem',
    height: windowWidth > 768 ? '3rem' : '2.5rem',
    backgroundColor: '#8B4513',
    borderRadius: '0.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 1rem'
  };

  // Floating icons
  const getFloatingIconStyle = (position, size) => ({
    ...pulseGlowStyle,
    position: 'absolute',
    width: `${windowWidth > 768 ? size : size * 0.8}px`,
    height: `${windowWidth > 768 ? size : size * 0.8}px`,
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    ...position,
    overflow: 'hidden'
  });

  const floatingIcons = [
    {
      icon: Code,
      style: getFloatingIconStyle({ top: '-1rem', right: '-1rem' }, 64),
      color: 'white',
      bgColor: '#8B4513'
    },
    {
      icon: Lightbulb,
      style: getFloatingIconStyle({ bottom: '-1rem', left: '-1rem' }, 48),
      color: '#333',
      bgColor: '#d4c4b0',
      delay: '1s'
    },
    {
      icon: Zap,
      style: getFloatingIconStyle({ top: '50%', left: '-2rem' }, 56),
      color: '#333',
      bgColor: '#f3f4f6',
      delay: '2s'
    }
  ];

  // Scroll indicator
  const scrollIndicatorStyle = {
    textAlign: 'center',
    paddingBottom: '2rem',
    marginTop: windowWidth > 768 ? '0' : '1rem',
    // overflow: 'hidden'
  };

  return (
    <section id="home" style={heroStyle}>
      {/* Background */}
      <div style={backgroundStyle}></div>
      
      {/* Floating Elements */}
      <div style={floatingContainerStyle}>
        {floatingElements.map((element, index) => (
          <div 
            key={index} 
            style={{ 
              ...element.style, 
              background: element.background,
              animationDelay: element.delay
            }} 
          />
        ))}
        <div style={geometricShapeStyle}></div>
      </div>

      <div style={containerStyle}>
        {/* Main Content */}
        <div style={gridStyle}>
          {/* Text Content */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: windowWidth > 768 ? '2rem' : '1.5rem', overflow: 'hidden' , marginTop: '30px'}}>
            <div style={badgeStyle}>
              <Star size={16} style={{ color: '#8B4513', marginRight: '0.5rem' }} />
              <span style={{ fontSize: '0.875rem', fontWeight: '500', color: '#333'} }>Available for Projects</span>
            </div>

            <div>
              <h1 style={headingStyle}>
                <span style={{ display: 'block', color: '#333' }}>Hi, I'm</span>
                <span style={{ display: 'block', ...gradientTextStyle }}>Faith</span>
                <span style={{ display: 'block', ...gradientTextStyle }}>Wanjiku</span>
              </h1>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '1rem' }}>
                <div style={{ width: '3rem', height: '0.25rem', backgroundColor: '#8B4513', borderRadius: '9999px' }}></div>
                <p style={{ fontSize: windowWidth > 768 ? '1.25rem' : '1.1rem', color: '#6B5B73', fontWeight: '500' }}>Fullstack Developer</p>
              </div>
            </div>

            <p style={descriptionStyle}>
              I create beautiful, functional web applications that solve real problems. 
              Passionate about clean code, user experience, and bringing innovative ideas to life.
            </p>

            <div style={techStackStyle}>
              {['React', 'JavaScript', 'Python', 'Flask', 'Node.js'].map((tech) => (
                <span key={tech} style={techPillStyle}>
                  {tech}
                </span>
              ))}
            </div>

            <div style={buttonContainerStyle}>
              <button style={primaryButtonStyle}>
                <Coffee size={16} />
                View My Work
              </button>
              <button style={secondaryButtonStyle}>
                <Sparkles size={16} />
                Get In Touch
              </button>
            </div>
          </div>

          {/* Interactive Card */}
          <div style={{ position: 'relative' }}>
            <div style={cardStyle}>
              <div style={codeBlockStyle}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                  <div style={{ width: '0.75rem', height: '0.75rem', borderRadius: '50%', backgroundColor: 'white' }}></div>
                  <div style={{ width: '0.75rem', height: '0.75rem', borderRadius: '50%', backgroundColor: 'orange' }}></div>
                  <div style={{ width: '0.75rem', height: '0.75rem', borderRadius: '50%', backgroundColor: 'white' }}></div>
                  <span style={{ fontSize: '0.875rem', color: '#9ca3af', marginLeft: '0.5rem' }}>Portfolio.js</span>
                </div>
                <pre style={{ 
                  fontSize: windowWidth > 768 ? '0.875rem' : '0.75rem', 
                  color: '#f9fafb', 
                  fontFamily: 'monospace',
                  whiteSpace: 'pre-wrap',
                  wordWrap: 'break-word'
                }}>
{`const developer = {
  name: "Faith Wanjiku",
  role: "Fullstack Developer",
  passion: "Code with purpose",
  
  skills: [
    "React", "Python", 
    "Flask", "JavaScript"
  ],
  
  motto: "Design • Build • Improve"
};

console.log(developer.motto);`}
                </pre>
              </div>

              <div style={statsGridStyle}>
                <div style={statCardStyle}>
                  <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#8B4513' }}>5+</div>
                  <div style={{ fontSize: '0.875rem', color: '#6B5B73' }}>Projects</div>
                </div>
                <div style={statCardStyle}>
                  <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#8B4513' }}>3+</div>
                  <div style={{ fontSize: '0.875rem', color: '#6B5B73' }}>Years</div>
                </div>
              </div>
            </div>

            {floatingIcons.map((icon, index) => (
              <div 
                key={index} 
                style={{ 
                  ...icon.style, 
                  backgroundColor: icon.bgColor,
                  animationDelay: icon.delay || '0s'
                }}
              >
                <icon.icon 
                  size={windowWidth > 768 ? 
                    (index === 0 ? 32 : index === 1 ? 24 : 28) : 
                    (index === 0 ? 24 : index === 1 ? 20 : 22)} 
                  style={{ color: icon.color }} 
                />
              </div>
            ))}
          </div>
        </div>

        {/* Specialties Section */}
        <div style={specialtiesContainerStyle}>
          <div style={specialtiesGridStyle}>
            {[
              {
                icon: Code,
                title: "Frontend Magic",
                description: "Crafting responsive, interactive user interfaces that users love"
              },
              {
                icon: Zap,
                title: "Backend Power",
                description: "Building robust APIs and server logic that scale with your needs"
              },
              {
                icon: Heart,
                title: "UX Focused",
                description: "Every line of code written with user experience in mind"
              }
            ].map((item, index) => (
              <div 
                key={index}
                style={{
                  ...specialtyCardStyle,
                  animationDelay: `${index * 0.2}s`
                }}
              >
                <div style={specialtyIconStyle}>
                  <item.icon size={windowWidth > 768 ? 24 : 20} style={{ color: 'white' }} />
                </div>
                <h3 style={{ 
                  fontSize: windowWidth > 768 ? '1.125rem' : '1rem', 
                  fontWeight: '600', 
                  color: '#333', 
                  marginBottom: '0.5rem' 
                }}>
                  {item.title}
                </h3>
                <p style={{ 
                  color: '#6B5B73', 
                  fontSize: windowWidth > 768 ? '0.875rem' : '0.8125rem',
                  lineHeight: '1.5'
                }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div style={scrollIndicatorStyle}>
          <div style={{ display: 'inline-block' }}>
            <ArrowDown size={24} style={{ color: '#6B5B73', animation: 'bounce 1s infinite' }} />
          </div>
          <p style={{ color: '#6B5B73', fontSize: '0.875rem', marginTop: '0.5rem' }}>Explore my work</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;