import kfsLogo from '../assets/kfs_logo.jpeg';

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.top} className="footer-top">

          <div style={styles.brand}>
            <img src={kfsLogo} alt="KFS" style={styles.logo} />
            <div>
              <div style={styles.brandName}>Karnataka Finishing School</div>
              <div style={styles.brandSub}>Shaping MBA Careers Since Day One</div>
            </div>
          </div>

          <div style={styles.links} className="footer-links">
            <div style={styles.linkGroup}>
              <div style={styles.linkTitle}>Quick Links</div>
              {['Home', 'Program', 'Subjects', 'Why KFS', 'Apply Now'].map(l => (
                <a key={l} href={`#${l.toLowerCase().replace(' ', '-')}`} style={styles.link}>{l}</a>
              ))}
            </div>
            <div style={styles.linkGroup}>
              <div style={styles.linkTitle}>Contact Us</div>
              <a href="tel:9742261161" style={styles.link}>📞 9742261161</a>
              <a href="https://www.karnatakafinishingschool.org" style={styles.link}>🌐 karnatakafinishingschool.org</a>
            </div>
          </div>

        </div>
        <div style={styles.divider} />
        <div style={styles.bottom} className="footer-bottom">
          <p style={styles.bottomText}>© 2026 Karnataka Finishing School. All rights reserved.</p>
          <p style={styles.bottomText}>Don't worry about PGCET rank — We guide you to the <strong style={{ color: '#f5d16e' }}>RIGHT college</strong>.</p>
        </div>
      </div>
    </footer>
  );
}

const styles = {
  footer: { background: '#040a2a', borderTop: '2px solid #c9a84c', padding: '60px 24px 24px' },
  container: { maxWidth: '1200px', margin: '0 auto' },
  top: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', marginBottom: '48px' },
  brand: { display: 'flex', gap: '16px', alignItems: 'flex-start' },
  logo: { width: '64px', height: '64px', borderRadius: '12px', border: '2px solid #c9a84c', objectFit: 'cover' },
  brandName: { fontFamily: "'Playfair Display', serif", fontSize: '18px', fontWeight: '700', color: '#f5d16e', marginBottom: '4px' },
  brandSub: { color: '#6a82b8', fontSize: '13px' },
  links: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' },
  linkGroup: { display: 'flex', flexDirection: 'column', gap: '10px' },
  linkTitle: { color: '#f5d16e', fontWeight: '800', fontSize: '14px', letterSpacing: '1px', marginBottom: '4px' },
  link: { color: '#6a82b8', textDecoration: 'none', fontSize: '14px' },
  divider: { height: '1px', background: 'rgba(201,168,76,0.2)', margin: '0 0 24px' },
  bottom: { display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px' },
  bottomText: { color: '#6a82b8', fontSize: '13px' },
};