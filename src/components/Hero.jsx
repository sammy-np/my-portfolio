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
        flexDirection: 'column', 
        justifyContent: 'center' 
      }}
    >
      <div style={{ maxWidth: '800px', marginTop: '4rem' }}>
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
    </section>
  );
};

export default Hero;
