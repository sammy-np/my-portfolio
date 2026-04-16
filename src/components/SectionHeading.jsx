import { motion } from 'framer-motion';

const SectionHeading = ({ title, subtitle }) => {
  return (
    <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ color: 'var(--accent-primary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.85rem' }}
      >
        {subtitle}
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 700, marginTop: '0.5rem' }}
      >
        {title}
      </motion.h2>
    </div>
  );
};

export default SectionHeading;
