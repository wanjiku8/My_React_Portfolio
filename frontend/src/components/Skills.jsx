import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'React/Next.js', level: 95 },
        { name: 'JavaScript', level: 90 },
        { name: 'CSS/Tailwind', level: 95 },
        { name: 'Wix/WordPress', level: 85 },
        { name: 'Flutter', level: 75 },
      ]
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Python/Flask', level: 85 },
        { name: 'PHP', level: 80 },
        { name: 'PostgreSQL', level: 88 },
      ]
    },
    {
      title: 'Other Tools & Technologies',
      skills: [
        { name: 'Git/GitHub', level: 95 },
        { name: 'Figma', level: 80 },
        { name: 'Photoshop', level: 78 },
      ]
    }
  ];

  const getSkillColor = (level) => {
    if (level >= 90) return '#8B4513'; // Dark Brown
    if (level >= 80) return '#D2691E'; // Medium Brown
    return '#DEB887';                  // Light Brown
  };

  return (
    <section style={{ padding: '80px 0', backgroundColor: '#f8f4f0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 16px' }}>
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            background: 'linear-gradient(to right, #8B4513, #D2691E)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '16px'
          }}>
            Skills & Expertise
          </h2>
          <p style={{
            fontSize: '1.125rem',
            color: '#6B5B73',
            maxWidth: '768px',
            margin: '0 auto'
          }}>
            A comprehensive overview of my technical skills and proficiency levels
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '32px'
        }}>
          {skillCategories.map((category, index) => (
            <div
              key={index}
              style={{
                backgroundColor: 'white',
                borderRadius: '8px',
                padding: '24px',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                transform: 'translateY(0)',
                transition: 'transform 0.3s, box-shadow 0.3s'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 6px 12px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
              }}
            >
              <h3 style={{
                textAlign: 'center',
                fontSize: '1.25rem',
                fontWeight: '600',
                color: '#333',
                marginBottom: '24px'
              }}>
                {category.title}
              </h3>
              <div>
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} style={{ marginBottom: '24px' }}>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginBottom: '8px'
                    }}>
                      <span style={{
                        fontSize: '0.875rem',
                        fontWeight: '500',
                        color: '#333'
                      }}>
                        {skill.name}
                      </span>
                      <span style={{
                        fontSize: '0.875rem',
                        color: '#6B5B73'
                      }}>
                        {skill.level}%
                      </span>
                    </div>
                    <div style={{
                      width: '100%',
                      height: '8px',
                      backgroundColor: '#e0e0e0',
                      borderRadius: '4px',
                      overflow: 'hidden'
                    }}>
                      <div style={{
                        width: `${skill.level}%`,
                        height: '100%',
                        backgroundColor: getSkillColor(skill.level),
                        transition: 'width 1s ease-in-out'
                      }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
