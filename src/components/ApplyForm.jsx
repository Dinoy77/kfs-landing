import { useState } from 'react';

export default function ApplyForm() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', college: '', city: '' });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.phone.trim() || !/^\d{10}$/.test(form.phone)) e.phone = 'Enter valid 10-digit phone';
    return e;
  };

  const handleSubmit = () => {
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }

    // Your WhatsApp number with country code (India = 91)
    const phoneNumber = "919742261161";

    // Message that will be sent
    const message =
      `🎓 *New PGCET 2026 Application*

👤 *Name:* ${form.name}
📞 *Phone:* ${form.phone}
📧 *Email:* ${form.email || 'Not provided'}
🏫 *College:* ${form.college || 'Not provided'}
🏙️ *City:* ${form.city || 'Not provided'}

_Sent from KFS Website_`;

    // Encode and open WhatsApp
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappURL, '_blank');
    setSubmitted(true);
  };

  if (submitted) return (
    <section id="apply" style={styles.section} className="apply-section">
      <div style={styles.success}>
        <div style={{ fontSize: '60px' }}>🎉</div>
        <h2 style={styles.successTitle}>Application Submitted!</h2>
        <p style={styles.successSub}>Thank you, {form.name}! Our team will contact you at {form.phone} within 24 hours.</p>
        <a href="tel:9742261161" style={styles.successBtn}>📞 Call us directly: 9742261161</a>
      </div>
    </section>
  );

  return (
    <section id="apply" style={styles.section} className="apply-section">
      <div style={styles.container} className="apply-container">

        <div style={styles.left}>
          <span style={styles.tag}>LIMITED SEATS</span>
          <h2 style={styles.h2} className="apply-h2">Apply for Free Coaching</h2>
          <p style={styles.p}>Fill in your details and our counsellor will reach out to confirm your seat in the PGCET 2026 free coaching program.</p>
          <div style={styles.infoList}>
            {[
              '100% Free — No hidden charges',
              'Seats filling fast — Apply today',
              'Response within 24 hours',
              'Personal counselling included',
            ].map(i => (
              <div key={i} style={styles.infoItem}>✅ {i}</div>
            ))}
          </div>
        </div>

        <div style={styles.formCard}>
          <h3 style={styles.formTitle}>Register Your Interest</h3>
          {[
            { key: 'name', label: 'Full Name *', placeholder: 'Enter your full name', type: 'text' },
            { key: 'phone', label: 'Phone Number *', placeholder: '10-digit mobile number', type: 'tel' },
            { key: 'email', label: 'Email Address', placeholder: 'your@email.com', type: 'email' },
            { key: 'college', label: 'Current College', placeholder: 'Your college name', type: 'text' },
            { key: 'city', label: 'City', placeholder: 'Your city', type: 'text' },
          ].map(field => (
            <div key={field.key} style={styles.fieldGroup}>
              <label style={styles.label}>{field.label}</label>
              <input
                type={field.type}
                placeholder={field.placeholder}
                value={form[field.key]}
                onChange={e => { setForm({ ...form, [field.key]: e.target.value }); setErrors({ ...errors, [field.key]: '' }); }}
                style={{ ...styles.input, ...(errors[field.key] ? styles.inputError : {}) }}
              />
              {errors[field.key] && <span style={styles.error}>{errors[field.key]}</span>}
            </div>
          ))}
          <button onClick={handleSubmit} style={styles.submitBtn}>APPLY NOW — It's FREE 🚀</button>
          <p style={styles.disclaimer}>By applying, you agree to be contacted by our team. No spam, ever.</p>
        </div>

      </div>
    </section>
  );
}

const styles = {
  section: { background: 'linear-gradient(135deg, #060f3a, #0b1d6e)', padding: '80px 24px' },
  container: { maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'start' },
  left: { display: 'flex', flexDirection: 'column', gap: '20px' },
  tag: {
    display: 'inline-block', background: 'rgba(201,168,76,0.15)', border: '1px solid #c9a84c',
    color: '#f5d16e', padding: '6px 16px', borderRadius: '20px',
    fontSize: '12px', fontWeight: '700', letterSpacing: '2px', width: 'fit-content',
  },
  h2: { fontFamily: "'Playfair Display', serif", fontSize: '40px', fontWeight: '900', color: '#fff', lineHeight: 1.2 },
  p: { color: '#a0b4e8', fontSize: '16px', lineHeight: 1.8 },
  infoList: { display: 'flex', flexDirection: 'column', gap: '12px' },
  infoItem: { color: '#d0dcff', fontSize: '15px', fontWeight: '600' },
  formCard: {
    background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(201,168,76,0.3)',
    borderRadius: '20px', padding: '36px',
    display: 'flex', flexDirection: 'column', gap: '16px',
  },
  formTitle: { fontFamily: "'Playfair Display', serif", fontSize: '24px', fontWeight: '700', color: '#f5d16e', marginBottom: '4px' },
  fieldGroup: { display: 'flex', flexDirection: 'column', gap: '6px' },
  label: { fontSize: '13px', fontWeight: '700', color: '#a0b4e8', letterSpacing: '0.5px' },
  input: {
    background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(201,168,76,0.3)',
    borderRadius: '10px', padding: '12px 16px', color: '#fff', fontSize: '15px',
    outline: 'none', fontFamily: "'Nunito', sans-serif",
  },
  inputError: { borderColor: '#ff6b6b' },
  error: { fontSize: '12px', color: '#ff6b6b' },
  submitBtn: {
    background: 'linear-gradient(135deg, #c9a84c, #f5d16e)',
    color: '#060f3a', fontWeight: '900', fontSize: '17px',
    padding: '16px', borderRadius: '12px', border: 'none',
    cursor: 'pointer', letterSpacing: '1px', marginTop: '8px',
  },
  disclaimer: { color: '#6a82b8', fontSize: '12px', textAlign: 'center' },
  success: {
    maxWidth: '600px', margin: '0 auto', textAlign: 'center',
    display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center', padding: '60px 24px',
  },
  successTitle: { fontFamily: "'Playfair Display', serif", fontSize: '40px', fontWeight: '900', color: '#f5d16e' },
  successSub: { color: '#a0b4e8', fontSize: '18px', lineHeight: 1.7 },
  successBtn: {
    background: 'linear-gradient(135deg, #c9a84c, #f5d16e)',
    color: '#060f3a', fontWeight: '800', fontSize: '16px',
    padding: '14px 32px', borderRadius: '30px', textDecoration: 'none',
  },
};