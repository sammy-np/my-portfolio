import { motion } from 'framer-motion';

const Navbar = () => {
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Proof', href: '#proof' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="glass-panel"
      style={{
        position: 'fixed',
        top: '1rem',
        left: '50%',
        transform: 'translateX(-50%)',
        width: 'calc(100% - 2rem)',
        maxWidth: '1200px',
        zIndex: 50,
        padding: '1rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
    >
      <div 
        className="logo text-gradient" 
        style={{ 
          fontSize: '1.25rem', 
          fontFamily: 'var(--font-heading)', 
          fontWeight: 800,
          letterSpacing: '-0.5px' 
        }}
      >
        SAIYAM 
        <span style={{color: 'var(--text-secondary)', fontWeight: 500}}>.QA</span>
      </div>
      
      <ul style={{ 
        display: 'flex', 
        gap: '2rem', 
        listStyle: 'none' 
      }}>
        {navLinks.map((link) => (
          <li key={link.name}>
            <a 
              href={link.href}
              style={{
                fontSize: '0.95rem',
                fontWeight: 500,
                color: 'var(--text-primary)',
                transition: 'color 0.3s ease'
              }}
              onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent-secondary)'}
              onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
};

export default Navbar;
