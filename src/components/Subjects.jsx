const subjects = [
  { icon: '🎯', title: 'Analytical Ability', desc: 'Data interpretation, pattern recognition, and logical deductions.' },
  { icon: '🧠', title: 'Logical Reasoning', desc: 'Verbal & non-verbal reasoning, series, puzzles, and critical thinking.' },
  { icon: '📐', title: 'Quantitative Aptitude', desc: 'Arithmetic, algebra, geometry, and data sufficiency.' },
  { icon: '🌐', title: 'General Awareness & English', desc: 'Current affairs, vocabulary, grammar, and verbal ability.' },
  { icon: '📖', title: 'Reading Comprehension', desc: 'Passage analysis, inference, and vocabulary in context.' },
  { icon: '💼', title: 'Business Awareness', desc: 'Business concepts, corporate knowledge, and economic understanding.' },
];

export default function Subjects() {
  return (
    <section id="subjects" style={styles.section} className="subjects-section">
      <div style={styles.container}>
        <div style={styles.header}>
          <span style={styles.tag}>CURRICULUM</span>
          <h2 style={styles.h2} className="subjects-h2">We Prepare You For</h2>
          <p style={styles.p}>All 6 key areas tested in PGCET — fully covered in our structured daily sessions.</p>
        </div>
        <div style={styles.grid} className="subjects-grid">
          {subjects.map((s, i) => (
            <div key={s.title} style={styles.card}>
              <div style={styles.num}>0{i + 1}</div>
              <div style={styles.icon}>{s.icon}</div>
              <h3 style={styles.title}>{s.title}</h3>
              <p style={styles.desc}>{s.desc}</p>
            </div>
          ))}
        </div>
        <div style={styles.bar} className="subjects-bar">
          <div style={styles.barItem}>⏱️ <strong>40 Minutes</strong> per day</div>
          <div style={styles.divider} className="subjects-divider" />
          <div style={styles.barItem}>📋 <strong>Complete</strong> Syllabus Coverage</div>
          <div style={styles.divider} className="subjects-divider" />
          <div style={styles.barItem}>🎓 <strong>Zero Impact</strong> on College Classes</div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: { background: 'linear-gradient(180deg, #060f3a, #0b1d6e)', padding: '80px 24px' },
  container: { maxWidth: '1200px', margin: '0 auto' },
  header: { textAlign: 'center', marginBottom: '56px' },
  tag: {
    background: 'rgba(201,168,76,0.15)', border: '1px solid #c9a84c',
    color: '#f5d16e', padding: '6px 16px', borderRadius: '20px',
    fontSize: '12px', fontWeight: '700', letterSpacing: '2px',
  },
  h2: { fontFamily: "'Playfair Display', serif", fontSize: '40px', fontWeight: '900', color: '#fff', margin: '16px 0 12px' },
  p: { color: '#a0b4e8', fontSize: '16px', maxWidth: '600px', margin: '0 auto' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginBottom: '40px' },
  card: {
    background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(201,168,76,0.25)',
    borderRadius: '16px', padding: '28px 22px', position: 'relative', overflow: 'hidden',
  },
  num: {
    position: 'absolute', top: '16px', right: '16px',
    fontFamily: "'Playfair Display', serif", fontSize: '36px',
    fontWeight: '900', color: 'rgba(201,168,76,0.15)',
  },
  icon: { fontSize: '36px', marginBottom: '14px' },
  title: { fontFamily: "'Playfair Display', serif", fontSize: '18px', fontWeight: '700', color: '#f5d16e', marginBottom: '8px' },
  desc: { color: '#a0b4e8', fontSize: '13px', lineHeight: 1.7 },
  bar: {
    background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.3)',
    borderRadius: '14px', padding: '24px 40px',
    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '32px',
  },
  barItem: { color: '#d0dcff', fontSize: '15px' },
  divider: { width: '1px', height: '30px', background: 'rgba(201,168,76,0.4)' },
};