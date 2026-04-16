import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';

const Timeline = () => {
  const events = [
    {
      year: '2024',
      title: 'Transitioned to QA',
      desc: 'Began intensive study of manual testing methodologies, understanding STLC, bug life cycles, and agile practices.'
    },
    {
      year: '2024',
      title: 'Mastered API Testing',
      desc: 'Learned to interact with backend services directly using Postman, writing validation scripts to ensure data integrity.'
    },
    {
      year: '2025',
      title: 'Started Automation Journey',
      desc: 'Dived securely into writing robust automation scripts using Selenium WebDriver with Java and TestNG.'
    },
    {
      year: '2025',
      title: 'Modern JS Testing Frameworks',
      desc: 'Expanded automation to modern stacks by learning Cypress, writing elegant end-to-end tests for SPAs.'
    }
  ];

  return (
    <section id="timeline" className="container section-padding">
      <SectionHeading title="My Journey" subtitle="Timeline" />
      
      <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
        {/* Timeline Line */}
        <div style={{
          position: 'absolute',
          left: '100px',
          top: '0',
          bottom: '0',
          width: '2px',
          background: 'var(--glass-border)',
        }}></div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          {events.map((event, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              style={{ display: 'flex', position: 'relative' }}
            >
              {/* Timeline Dot */}
              <div style={{
                width: '16px', height: '16px', borderRadius: '50%',
                background: 'var(--accent-primary)',
                boxShadow: '0 0 0 4px var(--bg-primary), 0 0 0 6px var(--accent-primary)',
                position: 'absolute',
                left: '93px',
                top: '6px'
              }}></div>
              
              <div style={{ width: '100px', flexShrink: 0, paddingTop: '2px', paddingRight: '1rem', textAlign: 'right' }}>
                <span className="text-gradient" style={{ fontWeight: 700, fontSize: '1.2rem' }}>{event.year}</span>
              </div>
              
              <div className="glass-panel" style={{ padding: '1.5rem', flex: 1, marginLeft: '3rem' }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '0.5rem' }}>{event.title}</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.95rem' }}>{event.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
