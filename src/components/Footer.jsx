// Social icons removed temporarily due to lucide-react export issues

const Footer = () => {
  return (
    <footer style={{ 
      padding: '2rem 0', 
      borderTop: '1px solid var(--glass-border)',
      marginTop: '4rem',
      textAlign: 'center'
    }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
        <div style={{ display: 'flex', gap: '1.5rem', color: 'var(--text-secondary)' }}>
          <a href="#" style={{ transition: 'color 0.2s' }} onMouseOver={(e)=>e.currentTarget.style.color='var(--accent-primary)'} onMouseOut={(e)=>e.currentTarget.style.color='var(--text-secondary)'}>GitHub</a>
          <a href="#" style={{ transition: 'color 0.2s' }} onMouseOver={(e)=>e.currentTarget.style.color='var(--accent-primary)'} onMouseOut={(e)=>e.currentTarget.style.color='var(--text-secondary)'}>LinkedIn</a>
          <a href="#" style={{ transition: 'color 0.2s' }} onMouseOver={(e)=>e.currentTarget.style.color='var(--accent-primary)'} onMouseOut={(e)=>e.currentTarget.style.color='var(--text-secondary)'}>Twitter</a>
        </div>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
          Designed & Built with React & Vite. © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
