import { useState } from 'react';
import kfsLogo from '../assets/kfs_logo.jpeg';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav style={styles.nav}>
      <div style={styles.container} className="nav-container">
        <div style={styles.brand}>
          <img src={kfsLogo} alt="KFS Logo" style={styles.logo} />
          <div>
            <div style={styles.brandName} className="nav-brand-name">Karnataka Finishing School</div>
            <div style={styles.brandSub}>Excellence in MBA Coaching</div>
          </div>
        </div>

        <ul style={styles.links} className="nav-links">
          {['Home', 'Program', 'Subjects', 'Why KFS', 'Apply'].map(link => (
            <li key={link}>
              <a href={`#${link.toLowerCase().replace(' ', '-')}`} style={styles.link}>{link}</a>
            </li>
          ))}
        </ul>

        <a href="tel:9742261161" style={styles.cta} className="nav-cta">📞 9742261161</a>

        <button style={styles.hamburger} className="nav-hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {menuOpen && (
        <div style={styles.mobileMenu}>
          {['Home', 'Program', 'Subjects', 'Why KFS', 'Apply'].map(link => (
            <a key={link} href={`#${link.toLowerCase().replace(' ', '-')}`}
              style={styles.mobileLink} onClick={() => setMenuOpen(false)}>{link}</a>
          ))}
          <a href="tel:9742261161" style={styles.mobileCta}>📞 Call Now</a>
        </div>
      )}
    </nav>
  );
}

const styles = {
  nav: {
    position: 'sticky', top: 0, zIndex: 1000,
    background: 'rgba(6, 15, 58, 0.97)',
    borderBottom: '2px solid #c9a84c',
    backdropFilter: 'blur(12px)',
  },
  container: {
    maxWidth: '1200px', margin: '0 auto',
    padding: '0 24px', height: '72px',
    display: 'flex', alignItems: 'center', gap: '24px',
  },
  brand: { display: 'flex', alignItems: 'center', gap: '12px', flexShrink: 0 },
  logo: { width: '52px', height: '52px', borderRadius: '10px', objectFit: 'cover', border: '2px solid #c9a84c' },
  brandName: { fontFamily: "'Playfair Display', serif", fontSize: '15px', fontWeight: '700', color: '#f5d16e', lineHeight: 1.2 },
  brandSub: { fontSize: '10px', color: '#a0b4e8', letterSpacing: '0.5px' },
  links: { display: 'flex', listStyle: 'none', gap: '8px', marginLeft: 'auto', alignItems: 'center' },
  link: { color: '#d0dcff', textDecoration: 'none', fontSize: '14px', fontWeight: '600', padding: '6px 14px', borderRadius: '6px' },
  cta: {
    background: 'linear-gradient(135deg, #c9a84c, #f5d16e)',
    color: '#060f3a', fontWeight: '800', fontSize: '13px',
    padding: '10px 18px', borderRadius: '25px',
    textDecoration: 'none', whiteSpace: 'nowrap', flexShrink: 0,
  },
  hamburger: {
    display: 'none', background: 'none', border: '1px solid #c9a84c',
    color: '#f5d16e', fontSize: '20px', cursor: 'pointer',
    padding: '6px 10px', borderRadius: '6px', marginLeft: 'auto',
  },
  mobileMenu: {
    display: 'flex', flexDirection: 'column', gap: '4px',
    padding: '16px 24px', borderTop: '1px solid rgba(201,168,76,0.3)',
  },
  mobileLink: {
    color: '#d0dcff', textDecoration: 'none', fontSize: '15px',
    fontWeight: '600', padding: '10px 0',
    borderBottom: '1px solid rgba(255,255,255,0.06)',
  },
  mobileCta: {
    background: 'linear-gradient(135deg, #c9a84c, #f5d16e)',
    color: '#060f3a', fontWeight: '800', fontSize: '14px',
    padding: '12px', borderRadius: '10px', textAlign: 'center',
    textDecoration: 'none', marginTop: '8px',
  },
};