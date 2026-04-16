import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { Microscope, Cpu, Code2, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Testing Skills',
      icon: <Microscope size={24} />,
      skills: ['Manual Testing', 'Test Case Design', 'Bug Life Cycle', 'API Testing (Postman)', 'Regression & Smoke']
    },
    {
      title: 'Automation Skills',
      icon: <Cpu size={24} />,
      skills: ['Selenium WebDriver', 'Cypress', 'POM Frameworks', 'TestNG / JUnit', 'CI/CD Basics']
    },
    {
      title: 'Programming Skills',
      icon: <Code2 size={24} />,
      skills: ['Java', 'JavaScript', 'HTML/CSS', 'SQL Basics']
    },
    {
      title: 'Tools & Platforms',
      icon: <Wrench size={24} />,
      skills: ['Jira', 'Git / GitHub', 'IntelliJ / VS Code', 'Chrome DevTools']
    }
  ];

  return (
    <section id="skills" className="container section-padding">
      <SectionHeading title="My Capabilities" subtitle="Skills" />
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
        {skillCategories.map((category, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            className="glass-panel"
            style={{ padding: '2rem' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', color: 'var(--accent-primary)' }}>
              {category.icon}
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--text-primary)' }}>{category.title}</h3>
            </div>
            
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {category.skills.map((skill, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)' }}>
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-secondary)' }}></div>
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
