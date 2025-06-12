import { useState, useEffect } from 'react';
import { ExternalLink, Github, Code2 } from 'lucide-react';
import AssetOne from '../assets/asset-one.png';

const Projects = () => {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1024
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const projects = [
    {
    
  title: 'E-Commerce Platform',
  description: 'A full-featured e-commerce platform built with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, inventory management, and admin dashboard.',
  image: AssetOne,
  technologies: ['PHP', 'Wordpress', 'MySQL', 'WooCommerce'],
  liveUrl: 'http://farmstore.co.ke/',
  githubUrl: '#',
  featured: true
}
,
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=800&q=80',
      technologies: ['React', 'Socket.io', 'Express', 'MongoDB'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      title: 'Weather Dashboard',
      description: 'A responsive weather dashboard that displays current weather conditions and forecasts using external APIs with beautiful data visualizations.',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=800&q=80',
      technologies: ['React', 'Chart.js', 'Weather API', 'CSS'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      title: 'Blog CMS',
      description: 'A content management system for blogs with markdown support, SEO optimization, and a clean admin interface.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Auth'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    }
  ];

  // Responsive styles
  const sectionStyle = {
    padding: windowWidth < 768 ? '3rem 0' : '5rem 0',
    backgroundColor: 'white'
  };

  const containerStyle = {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: windowWidth < 768 ? '0 1rem' : '0 2rem'
  };

  const headerStyle = {
    textAlign: 'center',
    marginBottom: windowWidth < 768 ? '2rem' : '4rem'
  };

  const titleStyle = {
    fontSize: windowWidth < 768 ? '1.75rem' : '2.5rem',
    fontWeight: 'bold',
    background: 'linear-gradient(45deg, #8B4513, #D2691E)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    marginBottom: '1rem'
  };

  const subtitleStyle = {
    fontSize: windowWidth < 768 ? '1rem' : '1.25rem',
    color: '#6B5B73',
    maxWidth: '48rem',
    margin: '0 auto',
    padding: windowWidth < 768 ? '0 1rem' : '0'
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: windowWidth < 768 ? '1fr' : windowWidth < 1024 ? '1fr 1fr' : '1fr 1fr',
    gap: windowWidth < 768 ? '1.5rem' : '2rem'
  };

  const cardStyle = {
    backgroundColor: 'white',
    borderRadius: '0.5rem',
    overflow: 'hidden',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease',
    cursor: 'pointer'
  };

  const imageContainerStyle = {
    position: 'relative',
    // overflow: 'hidden',
    height: windowWidth < 768 ? '10rem' : '12rem'
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.3s ease'
  };

  const overlayStyle = {
    position: 'absolute',
    inset: 0,
    backgroundColor: 'rgba(139, 69, 19, 0.2)',
    opacity: 0,
    transition: 'opacity 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1rem'
  };

  const buttonStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    color: '#8B4513',
    padding: '0.5rem',
    borderRadius: '0.25rem',
    border: 'none',
    cursor: 'pointer'
  };

  const contentStyle = {
    padding: windowWidth < 768 ? '1rem' : '1.5rem'
  };

  const projectTitleStyle = {
    fontSize: windowWidth < 768 ? '1.1rem' : '1.25rem',
    fontWeight: '600',
    color: '#333',
    marginBottom: '0.5rem'
  };

  const descriptionStyle = {
    color: '#6B5B73',
    marginBottom: '1rem',
    lineHeight: 1.6,
    fontSize: windowWidth < 768 ? '0.9rem' : '1rem'
  };

  const techContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
    marginBottom: '1rem'
  };

  const techBadgeStyle = {
    padding: '0.25rem 0.5rem',
    backgroundColor: '#f3f4f6',
    color: '#374151',
    borderRadius: '0.25rem',
    fontSize: windowWidth < 768 ? '0.65rem' : '0.75rem',
    border: '1px solid #e5e7eb'
  };

  const footerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: windowWidth < 480 ? 'column' : 'row',
    gap: windowWidth < 480 ? '0.5rem' : '0'
  };

  const linkButtonStyle = {
    backgroundColor: 'transparent',
    color: '#8B4513',
    padding: windowWidth < 480 ? '0.5rem' : '0.5rem 1rem',
    borderRadius: '0.25rem',
    border: '1px solid #8B4513',
    fontSize: windowWidth < 768 ? '0.75rem' : '0.875rem',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    textDecoration: 'none',
    width: windowWidth < 480 ? '100%' : 'auto'
  };

  const viewAllButtonStyle = {
    backgroundColor: '#8B4513',
    color: 'white',
    padding: windowWidth < 768 ? '0.6rem 1.2rem' : '0.75rem 1.5rem',
    borderRadius: '0.375rem',
    border: 'none',
    fontSize: windowWidth < 768 ? '0.9rem' : '1rem',
    fontWeight: '500',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    margin: '0 auto',
    marginTop: windowWidth < 768 ? '2rem' : '3rem'
  };

  return (
    <section id="projects" style={sectionStyle}>
      <div style={containerStyle}>
        <div style={headerStyle}>
          <h2 style={titleStyle}>Featured Projects</h2>
          <p style={subtitleStyle}>
            A showcase of my recent work and personal projects that demonstrate my skills and passion for development
          </p>
        </div>

        <div style={gridStyle}>
          {projects.map((project, index) => (
            <div 
              key={index} 
              style={cardStyle}
              onMouseOver={(e) => {
                if (windowWidth >= 768) {
                  const card = e.currentTarget;
                  const image = card.querySelector('img');
                  const overlay = card.querySelector('.overlay');
                  card.style.transform = 'translateY(-4px)';
                  card.style.boxShadow = '0 20px 25px rgba(0, 0, 0, 0.15)';
                  if (image) image.style.transform = 'scale(1.1)';
                  if (overlay) overlay.style.opacity = '1';
                }
              }}
              onMouseOut={(e) => {
                if (windowWidth >= 768) {
                  const card = e.currentTarget;
                  const image = card.querySelector('img');
                  const overlay = card.querySelector('.overlay');
                  card.style.transform = 'translateY(0)';
                  card.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
                  if (image) image.style.transform = 'scale(1)';
                  if (overlay) overlay.style.opacity = '0';
                }
              }}
            >
              <div style={imageContainerStyle}>
                <img 
                  src={project.image} 
                  alt={project.title}
                  style={imageStyle}
                />
                <div className="overlay" style={overlayStyle}>
                  <button style={buttonStyle}>
                    <ExternalLink size={16} />
                  </button>
                  <button style={buttonStyle}>
                    <Github size={16} />
                  </button>
                </div>
              </div>
              
              <div style={contentStyle}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <h3 style={projectTitleStyle}>{project.title}</h3>
                  {project.featured && (
                    <span style={{ 
                      backgroundColor: '#8B4513', 
                      color: 'white', 
                      padding: '0.25rem 0.5rem', 
                      borderRadius: '0.25rem', 
                      fontSize: windowWidth < 768 ? '0.65rem' : '0.75rem' 
                    }}>
                      Featured
                    </span>
                  )}
                </div>
                
                <p style={descriptionStyle}>{project.description}</p>
                
                <div style={techContainerStyle}>
                  {project.technologies.map((tech) => (
                    <span key={tech} style={techBadgeStyle}>
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div style={footerStyle}>
                  <a href={project.liveUrl} style={linkButtonStyle}>
                    <ExternalLink size={windowWidth < 768 ? 14 : 16} />
                    Live Demo
                  </a>
                  <a href={project.githubUrl} style={linkButtonStyle}>
                    <Github size={windowWidth < 768 ? 14 : 16} />
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <button style={viewAllButtonStyle}>
            <Code2 size={windowWidth < 768 ? 18 : 20} />
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;