import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { FileText, FileSpreadsheet, Bug, Download, PlayCircle } from 'lucide-react';

const Proof = () => {
  const proofs = [
    {
      title: 'Sample Test Cases',
      type: 'PDF Document',
      icon: <FileText size={32} />,
      desc: 'Extensive test cases covering boundary values and edge cases for an e-commerce flow.',
      link: '#'
    },
    {
      title: 'Detailed Bug Report',
      type: 'Jira Format',
      icon: <Bug size={32} />,
      desc: 'A well-documented bug report including exact steps to reproduce, environment details, and severity analysis.',
      link: '#'
    },
    {
      title: 'Comprehensive Test Plan',
      type: 'Spreadsheet',
      icon: <FileSpreadsheet size={32} />,
      desc: 'Master test plan outlining testing scope, resources, schedule, and deliverables for sprint release.',
      link: '#'
    },
    {
      title: 'Automation Execution Run',
      type: 'Video Demo',
      icon: <PlayCircle size={32} />,
      desc: 'Screen recording of Cypress tests running in headless and GUI modes, catching regressions automatically.',
      link: '#'
    }
  ];

  return (
    <section id="proof" className="container section-padding">
      <SectionHeading title="Proof of Work" subtitle="Documents" />
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
        {proofs.map((proof, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.4 }}
            className="glass-panel"
            style={{ 
              padding: '2rem', 
              display: 'flex', 
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              transition: 'transform 0.3s ease',
              gap: '1rem'
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <div style={{ 
              width: '60px', height: '60px', borderRadius: '50%', 
              background: 'rgba(236, 72, 153, 0.1)', 
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: 'var(--accent-secondary)'
            }}>
              {proof.icon}
            </div>
            
            <div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '0.2rem' }}>{proof.title}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '0.5rem' }}>{proof.type}</p>
              <p style={{ color: 'var(--text-primary)', fontSize: '0.9rem', lineHeight: 1.5 }}>{proof.desc}</p>
            </div>
            
            <a href={proof.link} style={{
              marginTop: 'auto',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.5rem 1rem',
              background: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '20px',
              fontSize: '0.9rem',
              color: 'var(--text-primary)',
              transition: 'background 0.2s',
            }}
            onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'}
            onMouseOut={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)'}
            >
              <Download size={16} /> View/Download
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Proof;
