import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { Mail, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="container section-padding">
      <SectionHeading title="Get In Touch" subtitle="Contact" />
      
      <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '3rem' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center' }}
        >
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '2rem' }}>
            I am actively looking for QA Engineering and Automation roles. Whether you have an open position, a question, or just want to connect, my inbox is open!
          </p>
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <a
              href="mailto:saiyam@example.com"
              className="glass-panel"
              style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '0.75rem', 
                padding: '0.8rem 1.5rem', 
                fontSize: '1rem',
                fontWeight: 600,
                color: 'var(--accent-primary)',
                transition: 'background 0.3s ease'
              }}
              onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)'}
              onMouseOut={(e) => e.currentTarget.style.background = 'var(--glass-bg)'}
            >
              <Mail size={20} /> Email Me
            </a>
            <a
              href="#"
              className="glass-panel"
              style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '0.75rem', 
                padding: '0.8rem 1.5rem', 
                fontSize: '1rem',
                fontWeight: 600,
                color: 'var(--text-primary)',
                transition: 'background 0.3s ease'
              }}
              onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)'}
              onMouseOut={(e) => e.currentTarget.style.background = 'var(--glass-bg)'}
            >
              <CheckCircle size={20} /> LinkedIn
            </a>
            <a
              href="#"
              className="glass-panel"
              style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '0.75rem', 
                padding: '0.8rem 1.5rem', 
                fontSize: '1rem',
                fontWeight: 600,
                color: 'var(--text-primary)',
                transition: 'background 0.3s ease'
              }}
              onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)'}
              onMouseOut={(e) => e.currentTarget.style.background = 'var(--glass-bg)'}
            >
              <CheckCircle size={20} /> GitHub
            </a>
          </div>
        </motion.div>

        <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '1rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
            <input 
              type="text" 
              placeholder="Name" 
              className="glass-panel"
              style={{
                padding: '1rem',
                color: 'var(--text-primary)',
                fontFamily: 'inherit',
                fontSize: '1rem'
              }}
            />
            <input 
              type="email" 
              placeholder="Email" 
              className="glass-panel"
              style={{
                padding: '1rem',
                color: 'var(--text-primary)',
                fontFamily: 'inherit',
                fontSize: '1rem'
              }}
            />
          </div>
          <textarea 
            placeholder="Requirements / Message" 
            rows="5"
            className="glass-panel"
            style={{
              padding: '1rem',
              color: 'var(--text-primary)',
              fontFamily: 'inherit',
              fontSize: '1rem',
              resize: 'vertical'
            }}
          />
          <button
            type="button"
            className="text-gradient"
            style={{
              padding: '1rem',
              borderRadius: '8px',
              fontWeight: 600,
              fontSize: '1.1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              background: 'var(--text-primary)',
              color: 'var(--bg-primary)',
              transition: 'transform 0.2s',
              marginTop: '1rem'
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            Send Message <Send size={20} />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
