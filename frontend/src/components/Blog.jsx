import React, { useState, useEffect } from 'react';
import { Calendar, Clock, User } from 'lucide-react';

const Blog = () => {
  const [columns, setColumns] = useState('1fr');

  const blogPosts = [
    {
      title: 'Why Developers Talk to Rubber Ducks',
      excerpt: 'Ever seen a coder explain code to a rubber duck? It’s called Rubber Duck Debugging — and it actually works! Talking out loud helps your brain spot errors faster.',
      author: 'Quack Labs',
      date: '2024-06-11',
      readTime: '3 min read',
      category: 'Developer Psychology',
      image: 'https://img.freepik.com/free-photo/digital-art-ai-technology-background_23-2151719646.jpg',
      featured: true
    },
    {
      title: 'Why Programmers Prefer Coffee Over Water',
      excerpt: 'Studies show that caffeine not only keeps devs awake — it also improves short-term memory, making that pesky bug hunt slightly more bearable.',
      author: 'Code & Caffeine',
      date: '2024-06-09',
      readTime: '4 min read',
      category: 'Developer Life',
      image: 'https://img.freepik.com/free-photo/view-3d-cartoon-animated-coffee-cup_23-2151083794.jpg',
      featured: false
    },
    {
      title: 'The Tab vs. Spaces Debate Affects Stress Levels!',
      excerpt: 'A light-hearted survey revealed that developers who prefer spaces reported being happier — and oddly, earned slightly more than their tab-loving peers. Coincidence?',
      author: 'Techie Tensions',
      date: '2024-06-07',
      readTime: '2 min read',
      category: 'Fun Facts',
      image: 'https://img.freepik.com/free-photo/close-up-sad-person-portrait_23-2150863773.jpg',
      featured: false
    }
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setColumns('1fr 1fr 1fr');
      else if (window.innerWidth >= 768) setColumns('1fr 1fr');
      else setColumns('1fr');
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const sectionStyle = {
    padding: '5rem 0',
    backgroundColor: 'white'
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
    gridTemplateColumns: columns,
    gap: '2rem'
  };

  const cardStyle = {
    backgroundColor: 'white',
    borderRadius: '0.5rem',
    overflow: 'hidden',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease'
  };

  const imageContainerStyle = {
    position: 'relative',
    overflow: 'hidden'
  };

  const imageStyle = {
    width: '100%',
    height: '12rem',
    objectFit: 'cover',
    transition: 'transform 0.3s ease'
  };

  const badgeStyle = {
    position: 'absolute',
    top: '1rem',
    left: '1rem',
    backgroundColor: '#8B4513',
    color: 'white',
    padding: '0.25rem 0.5rem',
    borderRadius: '0.25rem',
    fontSize: '0.75rem'
  };

  const featuredBadgeStyle = {
    position: 'absolute',
    top: '1rem',
    right: '1rem',
    backgroundColor: '#D2691E',
    color: 'white',
    padding: '0.25rem 0.5rem',
    borderRadius: '0.25rem',
    fontSize: '0.75rem'
  };

  const contentStyle = {
    padding: '1.5rem'
  };

  const postTitleStyle = {
    fontSize: '1.25rem',
    fontWeight: '600',
    color: '#333',
    marginBottom: '1rem',
    lineHeight: 1.4,
    transition: 'color 0.3s ease'
  };

  const excerptStyle = {
    color: '#6B5B73',
    marginBottom: '1rem',
    lineHeight: 1.6
  };

  const metaStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontSize: '0.875rem',
    color: '#6B5B73',
    marginBottom: '0.5rem'
  };

  const metaItemStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.25rem'
  };

  const dateStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.25rem',
    fontSize: '0.875rem',
    color: '#6B5B73',
    marginBottom: '1rem'
  };

  return (
    <section id="blog" style={sectionStyle}>
      <div style={containerStyle}>
        <div style={headerStyle}>
          <h2 style={titleStyle}>What's Brewing in the Dev World?</h2>
          <p style={subtitleStyle}>
            Sharing knowledge, insights, and experiences from my journey as a developer
          </p>
        </div>

        <div style={gridStyle}>
          {blogPosts.map((post, index) => (
            <div 
              key={index} 
              style={cardStyle}
              onMouseOver={(e) => {
                const card = e.currentTarget;
                const image = card.querySelector('img');
                const title = card.querySelector('.post-title');
                card.style.transform = 'translateY(-4px)';
                card.style.boxShadow = '0 20px 25px rgba(0, 0, 0, 0.15)';
                if (image) image.style.transform = 'scale(1.1)';
                if (title) title.style.color = '#8B4513';
              }}
              onMouseOut={(e) => {
                const card = e.currentTarget;
                const image = card.querySelector('img');
                const title = card.querySelector('.post-title');
                card.style.transform = 'translateY(0)';
                card.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
                if (image) image.style.transform = 'scale(1)';
                if (title) title.style.color = '#333';
              }}
            >
              <div style={imageContainerStyle}>
                <img 
                  src={post.image} 
                  alt={post.title}
                  style={imageStyle}
                />
                <div style={badgeStyle}>{post.category}</div>
                {post.featured && <div style={featuredBadgeStyle}>Featured</div>}
              </div>
              <div style={contentStyle}>
                <h3 className="post-title" style={postTitleStyle}>{post.title}</h3>
                <p style={excerptStyle}>{post.excerpt}</p>
                <div style={metaStyle}>
                  <div style={metaItemStyle}><User size={16} />{post.author}</div>
                  <div style={metaItemStyle}><Clock size={16} />{post.readTime}</div>
                </div>
                <div style={dateStyle}><Calendar size={16} />{new Date(post.date).toLocaleDateString()}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;