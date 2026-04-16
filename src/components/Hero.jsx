import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="container section-padding" 
      style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        paddingTop: '6rem'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '4rem', flexWrap: 'wrap-reverse', width: '100%' }}>
        <div style={{ flex: '1 1 500px' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span style={{ 
            color: 'var(--accent-primary)', 
            fontWeight: 600, 
            letterSpacing: '1px',
            textTransform: 'uppercase',
            fontSize: '0.9rem'
          }}>
            Hi, I am
          </span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{ 
            fontSize: 'clamp(3rem, 8vw, 5.5rem)', 
            fontWeight: 800, 
            marginTop: '0.5rem',
            marginBottom: '1rem',
            letterSpacing: '-1px',
            lineHeight: 1.1
          }}
        >
          Saiyam Basnet.
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          style={{ 
            fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', 
            fontWeight: 600, 
            color: 'var(--text-secondary)',
            marginBottom: '1.5rem',
          }}
        >
          I <span className="text-gradient">automate</span> and <span className="text-gradient">ensure quality</span>.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          style={{ 
            fontSize: '1.15rem', 
            color: 'var(--text-secondary)',
            marginBottom: '3rem',
            maxWidth: '600px',
            lineHeight: 1.8
          }}
        >
          A QA Engineer specializing in Test Automation. I build robust test frameworks, hunt down critical bugs, and streamline CI/CD pipelines to deliver flawless software experiences.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
        >
          <a href="#projects" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'var(--text-primary)',
            color: 'var(--bg-primary)',
            padding: '0.8rem 1.5rem',
            borderRadius: '8px',
            fontWeight: 600,
            transition: 'transform 0.2s',
          }}
          onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            View Projects <ArrowRight size={20} />
          </a>
          
          <a href="#" className="glass-panel" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.8rem 1.5rem',
            borderRadius: '8px',
            fontWeight: 600,
            color: 'var(--text-primary)',
            transition: 'background 0.3s ease',
          }}
          onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)'}
          onMouseOut={(e) => e.currentTarget.style.background = 'var(--glass-bg)'}
          >
            Download Resume <Download size={20} />
          </a>
        </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{ flex: '1 1 300px', display: 'flex', justifyContent: 'center' }}
        >
          <div style={{ 
            width: '100%', 
            maxWidth: '380px', 
            aspectRatio: '1/1', 
            borderRadius: '2rem', 
            overflow: 'hidden',
            border: '2px solid var(--glass-border)',
            boxShadow: '0 20px 40px rgba(0,0,0,0.3), 0 0 40px rgba(99, 102, 241, 0.2)',
            position: 'relative',
            transform: 'rotate(2deg)',
            transition: 'transform 0.4s ease'
          }}
          onMouseOver={(e) => e.currentTarget.style.transform = 'rotate(0deg) scale(1.02)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'rotate(2deg) scale(1)'}
          >
            <img 
              src="/profile.png" 
              alt="Saiyam Basnet" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
