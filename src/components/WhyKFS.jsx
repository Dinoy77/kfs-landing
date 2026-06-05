const bonusItems = [
  { icon: '🤔', title: 'Why MBA?', desc: 'Understand the real value of an MBA and how it transforms your career trajectory.' },
  { icon: '🏫', title: 'Choose the Right College', desc: 'Not all MBA colleges are equal. Learn how to pick the best fit for your goals.' },
  { icon: '🗺️', title: '45+ Year Career Guidance', desc: 'Expert guidance built over decades of experience in MBA admissions and placements.' },
];

export default function WhyKFS() {
  return (
    <section id="why-kfs" style={styles.section} className="whykfs-section">
      <div style={styles.container} className="whykfs-container">

        <div style={styles.left}>
          <span style={styles.tag}>BONUS GUIDANCE</span>
          <h2 style={styles.h2} className="whykfs-h2">More Than Just Exam Prep</h2>
          <p style={styles.p}>
            At Karnataka Finishing School, we don't just prepare you for the exam —
            we prepare you for the journey ahead. Our bonus guidance sessions give
            you the clarity and confidence to make the best decisions for your future.
          </p>
          <div style={styles.promise}>
            <div style={styles.promiseIcon}>🤝</div>
            <div>
              <div style={styles.promiseTitle}>Our Promise</div>
              <div style={styles.promiseText}>
                Don't worry about your PGCET rank — We guide you to the{' '}
                <strong style={{ color: '#f5d16e' }}>RIGHT college</strong> for your profile and ambitions.
              </div>
            </div>
          </div>
          <a href="#apply" style={styles.btn}>Get Started Free →</a>
        </div>

        <div style={styles.right}>
          {bonusItems.map(item => (
            <div key={item.title} style={styles.card}>
              <div style={styles.cardIcon}>{item.icon}</div>
              <div>
                <div style={styles.cardTitle}>{item.title}</div>
                <div style={styles.cardDesc}>{item.desc}</div>
              </div>
            </div>
          ))}
          <div style={styles.callCard}>
            <div style={styles.callTitle}>Talk to an Expert</div>
            <div style={styles.callSub}>Have questions? Our counsellors are ready to help.</div>
            <a href="tel:9742261161" style={styles.callBtn}>📞 Call 9742261161</a>
          </div>
        </div>

      </div>
    </section>
  );
}

const styles = {
  section: { background: '#08144f', padding: '80px 24px' },
  container: { maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'start' },
  left: { display: 'flex', flexDirection: 'column', gap: '20px' },
  tag: {
    display: 'inline-block', background: 'rgba(201,168,76,0.15)', border: '1px solid #c9a84c',
    color: '#f5d16e', padding: '6px 16px', borderRadius: '20px',
    fontSize: '12px', fontWeight: '700', letterSpacing: '2px', width: 'fit-content',
  },
  h2: { fontFamily: "'Playfair Display', serif", fontSize: '40px', fontWeight: '900', color: '#fff', lineHeight: 1.2 },
  p: { color: '#a0b4e8', fontSize: '16px', lineHeight: 1.8 },
  promise: {
    display: 'flex', gap: '16px', alignItems: 'flex-start',
    background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.3)',
    borderRadius: '14px', padding: '20px',
  },
  promiseIcon: { fontSize: '28px', flexShrink: 0 },
  promiseTitle: { fontWeight: '800', color: '#f5d16e', marginBottom: '6px', fontSize: '16px' },
  promiseText: { color: '#a0b4e8', fontSize: '14px', lineHeight: 1.6 },
  btn: {
    background: 'linear-gradient(135deg, #c9a84c, #f5d16e)',
    color: '#060f3a', fontWeight: '800', fontSize: '16px',
    padding: '14px 32px', borderRadius: '30px', textDecoration: 'none',
    display: 'inline-block', width: 'fit-content',
  },
  right: { display: 'flex', flexDirection: 'column', gap: '16px' },
  card: {
    background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(201,168,76,0.2)',
    borderRadius: '14px', padding: '20px 24px', display: 'flex', gap: '16px',
  },
  cardIcon: { fontSize: '32px', flexShrink: 0 },
  cardTitle: { fontWeight: '800', color: '#fff', marginBottom: '6px', fontSize: '16px' },
  cardDesc: { color: '#a0b4e8', fontSize: '13px', lineHeight: 1.6 },
  callCard: {
    background: 'linear-gradient(135deg, #0d2490, #1a3aad)',
    border: '2px solid #c9a84c', borderRadius: '14px', padding: '24px', textAlign: 'center',
  },
  callTitle: { fontFamily: "'Playfair Display', serif", fontSize: '22px', fontWeight: '700', color: '#f5d16e', marginBottom: '8px' },
  callSub: { color: '#a0b4e8', fontSize: '14px', marginBottom: '16px' },
  callBtn: {
    background: 'linear-gradient(135deg, #c9a84c, #f5d16e)',
    color: '#060f3a', fontWeight: '900', fontSize: '15px',
    padding: '12px 28px', borderRadius: '25px', textDecoration: 'none', display: 'inline-block',
  },
};