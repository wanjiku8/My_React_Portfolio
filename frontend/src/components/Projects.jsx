import { useState, useEffect } from 'react';
import { ExternalLink, Github, Code2, ChevronLeft, ChevronRight } from 'lucide-react';
import AssetOne from '../assets/one (1).jpg';
import ShoppingList from '../assets/one (2).jpg';
import Light from '../assets/one (3).jpg';
import Game from '../assets/one (4).jpg';
import ProjectFive from '../assets/one (5).jpg';
import ProjectSix from '../assets/one (6).jpg';
import ProjectSeven from '../assets/one (7).jpg';
import ProjectEight from '../assets/one (8).jpg';
import ProjectNine from '../assets/one (9).jpg';

const Projects = () => {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1024
  );
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6; // Show 6 projects per page (2 rows of 3)

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
    description: 'FarmStore e-commerce site with product listings, cart functionality, and secure checkout. Built with WordPress and WooCommerce for seamless online shopping.',
    image: AssetOne,
    technologies: ['PHP', 'Wordpress', 'MySQL', 'WooCommerce'],
    liveUrl: 'http://farmstore.co.ke/',
    githubUrl: '#',
    featured: true
  },
    {
    title: 'GARLAND Designs & Interiors',
    description: 'Event planning company website showcasing services. Features gallery, contact form, and service information.',
    image: ProjectNine,
    technologies: ['Html', 'js', 'Css'],
    liveUrl: 'https://repeat-nu.vercel.app/',
    githubUrl: '#',
    featured: false
  },
      {
    title: 'Alumni Management System',
    description: 'Platform connecting alumni members worldwide. Enables networking, event management, and career opportunities.',
    image: ProjectSix,
    technologies: ['JavaScript', 'API Integration', 'CSS'],
    liveUrl: 'https://wanjiku8.github.io/ALU/',
    githubUrl: '#',
    featured: false
  },
  {
    title: 'Shopping List App',
    description: 'Interactive shopping list application with item management. Features include adding, removing, and marking items as completed.',
    image: ShoppingList,
    technologies: ['React','Python', 'Flask'],
    liveUrl: 'https://wanjiku8.github.io/Wk2-Code-Challenge/',
    githubUrl: '#',
    featured: true
  },

  {
    title: 'Website-Light-OFF-ON',
    description: 'Interactive light switch demo showcasing DOM manipulation. Toggle between light and dark modes with a simple button click.',
    image: Light,
    technologies: ['React', 'Chart.js', 'Weather API', 'CSS'],
    liveUrl: 'https://wanjiku8.github.io/Website-Light-OFF-ON/',
    githubUrl: '#',
    featured: false
  },
  {
    title: 'Begginer-HTML-CSS-JS-GAME',
    description: 'Simple browser-based game demonstrating core web technologies. Features basic interactivity and score tracking.',
    image: Game,
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Auth'],
    liveUrl: 'https://wanjiku8.github.io/Begginer-HTML-CSS-JS-GAME/',
    githubUrl: '#',
    featured: false
  },
  {
    title: 'Portfolio Website',
    description: 'Personal portfolio showcasing projects and skills. Responsive design with smooth animations and dark mode support.',
    image: ProjectFive,
    technologies: ['React', 'CSS', ],
    liveUrl: 'https://wanjiku8.github.io/Portfolio-Wanjiku-Faith/',
    githubUrl: '#',
    featured: true
  },

  {
    title: 'The Animal Soundboard',
    description: 'Interactive soundboard featuring animal noises. Educational tool for children with colorful UI and simple controls.',
    image: ProjectSeven,
    technologies: ['React', 'Flask'],
    liveUrl: 'https://wanjiku8.github.io/Final-Project/',
    githubUrl: '#',
    featured: true
  },
  {
    title: 'Movie js Application',
    description: 'Movie database browser with search functionality. Displays film details and ratings from a curated collection.',
    image: ProjectEight,
    technologies: ['js', 'Html5/Css', 'Bootstrap'],
    liveUrl: 'https://wanjiku8.github.io/mv/',
    githubUrl: '#',
    featured: false
  }

];

  // Calculate pagination
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
    gridTemplateColumns: windowWidth < 768 ? '1fr' : windowWidth < 1024 ? '1fr 1fr' : '1fr 1fr 1fr',
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
    overflow: 'hidden',
    height: windowWidth < 768 ? '12rem' : '20rem'
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

  const paginationStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '0.5rem',
    marginTop: '3rem'
  };

  const pageButtonStyle = {
    padding: '0.5rem 1rem',
    backgroundColor: '#8B4513',
    color: 'white',
    border: 'none',
    borderRadius: '0.25rem',
    cursor: 'pointer',
    fontSize: '0.875rem'
  };

  const activePageButtonStyle = {
    ...pageButtonStyle,
    backgroundColor: '#5a2d0c'
  };

  const disabledPageButtonStyle = {
    ...pageButtonStyle,
    backgroundColor: '#d3d3d3',
    cursor: 'not-allowed'
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
          {currentProjects.map((project, index) => (
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
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" style={buttonStyle}>
                    <ExternalLink size={16} />
                  </a>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" style={buttonStyle}>
                    <Github size={16} />
                  </a>
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
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} style={techBadgeStyle}>
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div style={footerStyle}>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" style={linkButtonStyle}>
                    <ExternalLink size={windowWidth < 768 ? 14 : 16} />
                    Live Demo
                  </a>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" style={linkButtonStyle}>
                    <Github size={windowWidth < 768 ? 14 : 16} />
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={paginationStyle}>
          <button 
            onClick={() => paginate(currentPage - 1)} 
            disabled={currentPage === 1}
            style={currentPage === 1 ? disabledPageButtonStyle : pageButtonStyle}
          >
            <ChevronLeft size={18} />
          </button>
          
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
            <button
              key={number}
              onClick={() => paginate(number)}
              style={number === currentPage ? activePageButtonStyle : pageButtonStyle}
            >
              {number}
            </button>
          ))}
          
          <button 
            onClick={() => paginate(currentPage + 1)} 
            disabled={currentPage === totalPages}
            style={currentPage === totalPages ? disabledPageButtonStyle : pageButtonStyle}
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;