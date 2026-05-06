export const metadata = {
  title: 'Contact SignPNG - Support & Feedback',
  description: 'Have a question about converting your signature to PNG? Need technical support? Contact the SignPNG team for fast assistance.',
  keywords: ['contact signpng', 'signature tool support', 'signpng feedback', 'customer service', 'digital signature help'],
};

export default function ContactPage() {
  return (
    <div className="contact-container">
      <div className="contact-header animate-fade-in">
        <h1 className="contact-title">Get in <span className="text-gradient">Touch</span></h1>
        <p className="contact-sub">Have a question or a feature request? We'd love to hear from you.</p>
      </div>

      <div className="contact-grid">
        <div className="glass contact-form-card animate-fade-in">
          <form className="contact-form">
            <div className="input-row">
              <div className="input-group">
                <label>Full Name</label>
                <input type="text" placeholder="John Doe" />
              </div>
              <div className="input-group">
                <label>Email Address</label>
                <input type="email" placeholder="john@example.com" />
              </div>
            </div>
            <div className="input-group">
              <label>Subject</label>
              <select>
                <option>General Inquiry</option>
                <option>Technical Support</option>
                <option>Feature Request</option>
                <option>Other</option>
              </select>
            </div>
            <div className="input-group">
              <label>Message</label>
              <textarea placeholder="How can we help you today?" style={{ minHeight: '160px' }}></textarea>
            </div>
            <button type="button" className="glow-btn submit-btn">
              <span>Send Message</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polyline points="22 2 15 22 11 13 2 9 22 2"/></svg>
            </button>
          </form>
        </div>

        <div className="contact-info animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="glass info-card glass-hover">
            <div className="info-icon">📧</div>
            <div className="info-text">
              <h3>Support Email</h3>
              <p>For technical help and issues.</p>
              <a href="mailto:support@signpng.com">support@signpng.com</a>
            </div>
          </div>
          <div className="glass info-card glass-hover">
            <div className="info-icon">💬</div>
            <div className="info-text">
              <h3>General Feedback</h3>
              <p>Help us improve SignPNG.</p>
              <a href="mailto:feedback@signpng.com">feedback@signpng.com</a>
            </div>
          </div>
          <div className="glass info-card glass-hover">
            <div className="info-icon">🌍</div>
            <div className="info-text">
              <h3>Global Community</h3>
              <p>Join our secure signing revolution.</p>
              <span>Built for everyone, everywhere.</span>
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .contact-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 40px 20px 120px;
        }
        .contact-header {
          text-align: center;
          margin-bottom: 80px;
        }
        .contact-title {
          font-family: 'Outfit', sans-serif;
          font-size: 3.5rem;
          font-weight: 800;
          color: white;
          margin-bottom: 16px;
        }
        .text-gradient {
          background: linear-gradient(to right, var(--primary), var(--secondary));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .contact-sub {
          font-size: 1.1rem;
          color: var(--text-dim);
          max-width: 600px;
          margin: 0 auto;
        }
        .contact-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 40px;
        }
        .contact-form-card {
          padding: 48px;
        }
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }
        .input-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }
        .input-group {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .input-group label {
          color: white;
          font-weight: 700;
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .input-group input, 
        .input-group select, 
        .input-group textarea {
          background: rgba(255,255,255,0.03);
          border: 1px solid var(--glass-border);
          padding: 14px 18px;
          border-radius: 12px;
          color: white;
          font-size: 1rem;
          outline: none;
          transition: var(--transition);
        }
        .input-group input:focus, 
        .input-group select:focus, 
        .input-group textarea:focus {
          border-color: var(--primary);
          background: rgba(255,255,255,0.05);
          box-shadow: 0 0 20px var(--primary-glow);
        }
        .submit-btn {
          width: 100%;
          padding: 20px;
          font-size: 1.1rem;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        .info-card {
          padding: 32px;
          display: flex;
          gap: 24px;
          align-items: flex-start;
        }
        .info-icon {
          font-size: 2rem;
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255,255,255,0.05);
          border-radius: 12px;
        }
        .info-text h3 {
          color: white;
          font-size: 1.25rem;
          margin-bottom: 8px;
          font-family: 'Outfit', sans-serif;
        }
        .info-text p {
          color: var(--text-dim);
          font-size: 0.95rem;
          margin-bottom: 8px;
        }
        .info-text a {
          color: var(--primary);
          text-decoration: none;
          font-weight: 700;
          transition: var(--transition);
        }
        .info-text a:hover {
          color: var(--secondary);
        }
        .info-text span {
          color: var(--text-dim);
          font-size: 0.85rem;
          font-style: italic;
        }

        @media (max-width: 992px) {
          .contact-grid { grid-template-columns: 1fr; }
          .contact-form-card { padding: 32px; }
        }
        @media (max-width: 576px) {
          .input-row { grid-template-columns: 1fr; }
          .contact-title { font-size: 2.5rem; }
        }
      `}} />
    </div>
  );
}
