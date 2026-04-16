import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { Target, Search, PenTool, CheckCircle } from 'lucide-react';

const About = () => {
  const highlights = [
    { icon: <Target />, text: 'QA Student focusing on modern automation' },
    { icon: <Search />, text: 'Skilled in Selenium, Cypress, and API testing' },
    { icon: <CheckCircle />, text: 'Detail-oriented approaches to test cases and bug reporting' },
    { icon: <PenTool />, text: 'Dedicated to continuous learning and improving software delivery' },
  ];

  return (
    <section id="about" className="container section-padding">
      <SectionHeading title="Career Snapshot" subtitle="About Me" />
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}
        >
          <p style={{ marginBottom: '1.5rem' }}>
            I am a QA Automation student extremely passionate about ensuring the quality and reliability of software. My focus lies in designing effective test strategies, hunting edge cases, and building automation suites that catch bugs before they reach production.
          </p>
          <p>
            Whether it's writing comprehensive test plans or writing automated scripts in Java and JavaScript, my goal is to bridge the gap between development and flawless user experiences.
          </p>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {highlights.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              className="glass-panel"
              style={{ padding: '1rem 1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}
            >
              <div style={{ color: 'var(--accent-primary)' }}>{item.icon}</div>
              <span style={{ fontSize: '1rem', fontWeight: 500 }}>{item.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
