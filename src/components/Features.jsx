const features = [
  { icon: '⏱️', title: 'Just 40 Min/Day', desc: 'Structured, focused daily sessions that fit around your college schedule.' },
  { icon: '📚', title: 'Full Syllabus', desc: 'Complete PGCET syllabus coverage across all 6 subjects. Nothing left out.' },
  { icon: '🎓', title: 'Zero Disruption', desc: 'Study without affecting your degree regular classes. Balance is guaranteed.' },
  { icon: '🎯', title: 'Right College Match', desc: "Don't worry about rank — we guide you to the RIGHT MBA college for you." },
  { icon: '💡', title: 'Bonus Guidance', desc: '45+ years of career guidance: Why MBA, choosing colleges, career paths.' },
  { icon: '🆓', title: '100% Free', desc: 'Completely free coaching program. No hidden fees. No charges whatsoever.' },
];

export default function Features() {
  return (
    <section id="program" style={styles.section} className="features-section">
      <div style={styles.container}>
        <div style={styles.header}>
          <span style={styles.tag}>WHY JOIN US</span>
          <h2 style={styles.h2} className="features-h2">What Makes KFS Different?</h2>
          <p style={styles.p}>A structured, proven program designed for working students who want to crack PGCET without disrupting their college life.</p>
        </div>
        <div style={styles.grid} className="features-grid">
          {features.map(f => (
            <div key={f.title} style={styles.card}>
              <div style={styles.icon}>{f.icon}</div>
              <h3 style={styles.cardTitle}>{f.title}</h3>
              <p style={styles.cardDesc}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: { background: '#08144f', padding: '80px 24px' },
  container: { maxWidth: '1200px', margin: '0 auto' },
  header: { textAlign: 'center', marginBottom: '56px' },
  tag: {
    background: 'rgba(201,168,76,0.15)', border: '1px solid #c9a84c',
    color: '#f5d16e', padding: '6px 16px', borderRadius: '20px',
    fontSize: '12px', fontWeight: '700', letterSpacing: '2px',
  },
  h2: { fontFamily: "'Playfair Display', serif", fontSize: '40px', fontWeight: '900', color: '#fff', margin: '16px 0 12px' },
  p: { color: '#a0b4e8', fontSize: '16px', maxWidth: '600px', margin: '0 auto' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' },
  card: {
    background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(201,168,76,0.2)',
    borderRadius: '16px', padding: '32px 24px',
  },
  icon: { fontSize: '40px', marginBottom: '16px' },
  cardTitle: { fontFamily: "'Playfair Display', serif", fontSize: '20px', fontWeight: '700', color: '#f5d16e', marginBottom: '10px' },
  cardDesc: { color: '#a0b4e8', fontSize: '14px', lineHeight: 1.7 },
};