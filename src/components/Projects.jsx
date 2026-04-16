import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { ExternalLink } from 'lucide-react';

const Projects = () => {
  const portfolioProjects = [
    {
      title: 'E-commerce QA Automation Suite',
      desc: 'An end-to-end automation framework built for a mock e-commerce site covering login, cart checkout, and payment gateways. Implemented POM and TestNG annotations.',
      tech: ['Java', 'Selenium WebDriver', 'TestNG', 'Maven'],
      role: 'QA Automation Engineer',
      link: '#',
      github: '#'
    },
    {
      title: 'Flight Booking API Testing',
      desc: 'Comprehensive API testing suite using Postman. Covered GET, POST, PUT flows with data-driven testing using JSON files and validation scripts.',
      tech: ['Postman', 'JavaScript', 'Newman'],
      role: 'API QA Tester',
      link: '#',
      github: '#'
    },
    {
      title: 'Modern Web Cypress Tests',
      desc: 'Fast, reliable E2E tests for a modern SPA. Intercepted network requests to mock backend data and significantly reduced test flakiness.',
      tech: ['Cypress', 'JavaScript', 'GitHub Actions'],
      role: 'SDET Student',
      link: '#',
      github: '#'
    }
  ];

  return (
    <section id="projects" className="container section-padding">
      <SectionHeading title="Featured Work" subtitle="Projects" />
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
        {portfolioProjects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            className="glass-panel"
            style={{ 
              padding: '2rem', 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '1.5rem',
              transition: 'transform 0.3s ease, border-color 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = 'var(--glass-border)';
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ 
                width: '40px', height: '40px', 
                background: 'rgba(99, 102, 241, 0.1)', 
                borderRadius: '8px', 
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--accent-primary)'
              }}>
                <ExternalLink size={20} />
              </div>
              <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-secondary)' }}>
                <a href={project.github} style={{ transition: 'color 0.2s' }} onMouseOver={(e)=>e.currentTarget.style.color='var(--text-primary)'} onMouseOut={(e)=>e.currentTarget.style.color='var(--text-secondary)'}>Code</a>
                <a href={project.link} style={{ transition: 'color 0.2s' }} onMouseOver={(e)=>e.currentTarget.style.color='var(--text-primary)'} onMouseOut={(e)=>e.currentTarget.style.color='var(--text-secondary)'}><ExternalLink size={20} /></a>
              </div>
            </div>
            
            <div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 600, marginBottom: '0.2rem' }}>{project.title}</h3>
              <p style={{ color: 'var(--accent-secondary)', fontSize: '0.85rem', marginBottom: '0.75rem', fontWeight: 500 }}>Role: {project.role}</p>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.95rem' }}>{project.desc}</p>
            </div>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: 'auto' }}>
              {project.tech.map((t, i) => (
                <span key={i} style={{ 
                  fontSize: '0.8rem', 
                  padding: '4px 10px', 
                  background: 'rgba(255, 255, 255, 0.05)', 
                  borderRadius: '20px',
                  color: 'var(--accent-primary)'
                }}>{t}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
