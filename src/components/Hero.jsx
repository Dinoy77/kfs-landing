export default function Hero() {
  return (
    <section id="home" style={styles.section} className="hero-section">
      <div style={styles.bgPattern} />
      <div style={styles.container} className="hero-container">

        <div style={styles.content}>
          <div style={styles.badge}>🔔 PGCET 2026 — LAST CALL!</div>
          <h1 style={styles.h1} className="hero-h1">
            Crack PGCET &<br />
            <span style={styles.highlight}>Secure Your Dream</span><br />
            MBA College!
          </h1>
          <p style={styles.sub}>
            Registration Closing Soon! Karnataka's most trusted free coaching
            program for PGCET aspirants. Limited seats — don't miss your chance.
          </p>
          <div style={styles.urgency}>
            ⚠️ &nbsp;<strong>Registration Closing Soon!</strong>&nbsp; Have You Registered Yet?
          </div>
          <div style={styles.btnRow} className="hero-btn-row">
            <a href="#apply" style={styles.btnPrimary}>Apply for Free →</a>
            <a href="tel:9742261161" style={styles.btnSecondary}>📞 Call Now</a>
          </div>
          <div style={styles.stats} className="hero-stats">
            {[['FREE', 'Program'], ['40 min', 'Per Day'], ['100%', 'Syllabus']].map(([n, l]) => (
              <div key={l} style={styles.stat}>
                <span style={styles.statNum}>{n}</span>
                <span style={styles.statLabel}>{l}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={styles.card} className="hero-card">
          <div style={styles.cardBadge}>FREE COACHING PROGRAM</div>
          <div style={styles.cardTitle} className="hero-card-title">PGCET 2026</div>
          <div style={styles.cardSub}>Complete MBA Entrance Preparation</div>
          <div style={styles.cardDivider} />
          <ul style={styles.cardList}>
            {[
              '✅ All 6 Subjects Covered',
              '✅ Just 40 Minutes a Day',
              '✅ No Impact on College Classes',
              '✅ Bonus Career Guidance',
              '✅ Right College Guidance',
            ].map(item => <li key={item} style={styles.cardItem}>{item}</li>)}
          </ul>
          <div style={styles.cardLimited}>⚠️ LIMITED SEATS ONLY</div>
          <a href="#apply" style={styles.cardBtn}>APPLY NOW →</a>
        </div>

      </div>
    </section>
  );
}

const styles = {
  section: {
    position: 'relative', overflow: 'hidden',
    background: 'linear-gradient(135deg, #060f3a 0%, #0b1d6e 50%, #0d2490 100%)',
    padding: '80px 24px',
  },
  bgPattern: {
    position: 'absolute', inset: 0,
    backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(201,168,76,0.08) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(26,58,173,0.4) 0%, transparent 50%)',
    pointerEvents: 'none',
  },
  container: {
    maxWidth: '1200px', margin: '0 auto',
    display: 'grid', gridTemplateColumns: '1fr 1fr',
    gap: '60px', alignItems: 'center', position: 'relative',
  },
  content: { display: 'flex', flexDirection: 'column', gap: '20px' },
  badge: {
    display: 'inline-block', background: 'rgba(201,168,76,0.15)',
    border: '1px solid #c9a84c', color: '#f5d16e',
    padding: '8px 20px', borderRadius: '25px', fontSize: '14px',
    fontWeight: '700', width: 'fit-content',
  },
  h1: { fontFamily: "'Playfair Display', serif", fontSize: '52px', fontWeight: '900', lineHeight: 1.2, color: '#fff' },
  highlight: { color: '#f5d16e' },
  sub: { fontSize: '16px', color: '#a0b4e8', lineHeight: 1.7, maxWidth: '480px' },
  urgency: {
    background: 'rgba(245,209,110,0.1)', border: '1px solid rgba(245,209,110,0.4)',
    borderLeft: '4px solid #f5d16e', padding: '12px 16px', borderRadius: '8px',
    fontSize: '14px', color: '#f5d16e',
  },
  btnRow: { display: 'flex', gap: '16px', flexWrap: 'wrap' },
  btnPrimary: {
    background: 'linear-gradient(135deg, #c9a84c, #f5d16e)',
    color: '#060f3a', fontWeight: '800', fontSize: '16px',
    padding: '14px 32px', borderRadius: '30px', textDecoration: 'none',
  },
  btnSecondary: {
    border: '2px solid #c9a84c', color: '#f5d16e', fontWeight: '700',
    fontSize: '16px', padding: '14px 28px', borderRadius: '30px', textDecoration: 'none',
  },
  stats: { display: 'flex', gap: '32px' },
  stat: { display: 'flex', flexDirection: 'column', alignItems: 'center' },
  statNum: { fontFamily: "'Playfair Display', serif", fontSize: '28px', fontWeight: '900', color: '#f5d16e' },
  statLabel: { fontSize: '11px', color: '#a0b4e8', textTransform: 'uppercase', letterSpacing: '1px' },
  card: {
    background: 'linear-gradient(160deg, #0f2494, #0b1d6e)',
    border: '2px solid #c9a84c', borderRadius: '20px',
    padding: '36px', display: 'flex', flexDirection: 'column', gap: '12px',
    boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
  },
  cardBadge: {
    background: 'linear-gradient(135deg, #c9a84c, #f5d16e)',
    color: '#060f3a', fontWeight: '900', fontSize: '13px',
    padding: '8px 20px', borderRadius: '6px', textAlign: 'center', letterSpacing: '2px',
  },
  cardTitle: { fontFamily: "'Playfair Display', serif", fontSize: '42px', fontWeight: '900', color: '#f5d16e', textAlign: 'center' },
  cardSub: { color: '#a0b4e8', fontSize: '14px', textAlign: 'center' },
  cardDivider: { height: '1px', background: 'rgba(201,168,76,0.3)', margin: '4px 0' },
  cardList: { listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' },
  cardItem: { fontSize: '15px', color: '#d0dcff', fontWeight: '600' },
  cardLimited: { color: '#f5a84c', fontSize: '13px', fontWeight: '800', textAlign: 'center', letterSpacing: '1px' },
  cardBtn: {
    background: 'linear-gradient(135deg, #c9a84c, #f5d16e)',
    color: '#060f3a', fontWeight: '900', fontSize: '16px',
    padding: '14px', borderRadius: '10px', textAlign: 'center',
    textDecoration: 'none', letterSpacing: '1px',
  },
};