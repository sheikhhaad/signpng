export const metadata = {
  title: "Convert Signature to Transparent PNG Online (Free)",
  description: "The fastest way to convert your handwritten signature to a transparent PNG. Secure, browser-side processing—your images never leave your device.",
  keywords: ["signature background remover", "transparent signature online", "remove white background from signature", "digital signature creator", "free signature converter"],
};

export default function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section animate-fade-in">
        <div className="hero-content">
          <div className="hero-badge">✨ 100% Client-Side & Secure</div>
          <h1 className="hero-title">
            Professional <span className="text-gradient">Digital Signatures</span> in Seconds.
          </h1>
          <p className="hero-sub">
            Convert your handwritten signatures into high-quality transparent PNGs. 
            No uploads, no servers, just pure privacy and speed.
          </p>
          <div className="cta-group">
            <a href="/signature-to-png" className="glow-btn hero-btn">
              Create My Signature
            </a>
            <p className="cta-note">Join thousands of professionals worldwide</p>
          </div>
        </div>

        <div className="hero-visual">
          <div className="glass visual-card">
            <div className="visual-header">
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
            </div>
            <div className="visual-body">
              <div className="signature-mock">✍️</div>
              <div className="process-line"></div>
              <div className="result-mock">PNG</div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stat-item">
          <span className="stat-num">0</span>
          <span className="stat-label">Uploads to Server</span>
        </div>
        <div className="stat-item">
          <span className="stat-num"> 1s</span>
          <span className="stat-label">Processing Time</span>
        </div>
        <div className="stat-item">
          <span className="stat-num">Free</span>
          <span className="stat-label">Forever</span>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="section-header">
          <h2 className="section-title">Built for Professionals</h2>
          <p className="section-sub">Everything you need for a perfect digital signature.</p>
        </div>
        <div className="feature-grid">
          <div className="glass glass-hover feature-card">
            <div className="icon-box">⚡</div>
            <h3>Instant Conversion</h3>
            <p>Our optimized algorithms process your image instantly right in your browser tab.</p>
          </div>
          <div className="glass glass-hover feature-card">
            <div className="icon-box">🛡️</div>
            <h3>Privacy Guaranteed</h3>
            <p>Your signature never leaves your computer. We process everything locally using Web APIs.</p>
          </div>
          <div className="glass glass-hover feature-card">
            <div className="icon-box">✨</div>
            <h3>Perfect Clarity</h3>
            <p>Advanced thresholding removes even the slightest background noise for a clean finish.</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <h2 className="section-title text-center">Common Questions</h2>
        <div className="faq-grid">
          <div className="glass faq-item">
            <h4>Is it secure for business use?</h4>
            <p>Absolutely. Since no data is transmitted to our servers, it's safer than almost any other online tool.</p>
          </div>
          <div className="glass faq-item">
            <h4>What resolution will I get?</h4>
            <p>You get the exact same resolution as your original photo, just with the background removed.</p>
          </div>
          <div className="glass faq-item">
            <h4>Does it work on mobile?</h4>
            <p>Yes, SignPNG is fully responsive and works perfectly on iPhones, Androids, and tablets.</p>
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        .home-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }
        .text-gradient {
          background: linear-gradient(to right, var(--primary), var(--secondary));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .hero-section {
          min-height: calc(100vh - 120px);
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          align-items: center;
          gap: 60px;
          padding: 60px 0;
        }
        .hero-badge {
          display: inline-block;
          padding: 8px 16px;
          background: rgba(34, 211, 238, 0.1);
          border: 1px solid rgba(34, 211, 238, 0.2);
          border-radius: 100px;
          color: var(--primary);
          font-size: 0.9rem;
          font-weight: 600;
          margin-bottom: 24px;
        }
        .hero-title {
          font-family: 'Outfit', sans-serif;
          font-size: 4.5rem;
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 24px;
          color: white;
        }
        .hero-sub {
          font-size: 1.25rem;
          color: var(--text-dim);
          max-width: 600px;
          margin-bottom: 40px;
          line-height: 1.7;
        }
        .hero-btn {
          padding: 18px 40px;
          font-size: 1.1rem;
        }
        .cta-note {
          margin-top: 16px;
          color: var(--text-dim);
          font-size: 0.85rem;
        }
        .visual-card {
          padding: 20px;
          aspect-ratio: 4/3;
          display: flex;
          flex-direction: column;
          animation: float 6s ease-in-out infinite;
        }
        .visual-header {
          display: flex;
          gap: 6px;
          margin-bottom: 20px;
        }
        .visual-header .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(255,255,255,0.1);
        }
        .visual-body {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: space-around;
          background: rgba(255,255,255,0.02);
          border-radius: 12px;
          position: relative;
        }
        .signature-mock { font-size: 3rem; opacity: 0.5; }
        .result-mock { 
          background: var(--primary);
          color: white;
          padding: 10px 20px;
          border-radius: 8px;
          font-weight: 800;
          box-shadow: 0 10px 20px var(--primary-glow);
        }

        .stats-section {
          display: flex;
          justify-content: center;
          gap: 100px;
          padding: 80px 0;
          border-top: 1px solid var(--glass-border);
          border-bottom: 1px solid var(--glass-border);
        }
        .stat-item { text-align: center; }
        .stat-num {
          display: block;
          font-size: 2.5rem;
          font-weight: 800;
          color: white;
          font-family: 'Outfit', sans-serif;
        }
        .stat-label { color: var(--text-dim); font-weight: 600; }

        .features-section { padding: 120px 0; }
        .section-header { text-align: center; margin-bottom: 80px; }
        .section-title { font-family: 'Outfit', sans-serif; font-size: 3rem; font-weight: 800; color: white; margin-bottom: 16px; }
        .section-sub { font-size: 1.1rem; color: var(--text-dim); }
        .feature-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 30px;
        }
        .feature-card { padding: 48px; }
        .icon-box {
          width: 60px;
          height: 60px;
          background: rgba(255,255,255,0.05);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.75rem;
          margin-bottom: 28px;
        }
        .feature-card h3 { color: white; font-size: 1.5rem; margin-bottom: 16px; font-family: 'Outfit', sans-serif; }
        .feature-card p { color: var(--text-dim); line-height: 1.7; }

        .faq-section { padding: 80px 0 120px; }
        .faq-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 24px;
          margin-top: 60px;
        }
        .faq-item { padding: 32px; }
        .faq-item h4 { color: white; font-size: 1.2rem; margin-bottom: 12px; }
        .faq-item p { color: var(--text-dim); }

        .text-center { text-align: center; }

        @media (max-width: 992px) {
          .hero-section { grid-template-columns: 1fr; text-align: center; gap: 40px; }
          .hero-sub { margin-left: auto; margin-right: auto; }
          .hero-title { font-size: 3.5rem; }
          .hero-visual { max-width: 500px; margin: 0 auto; width: 100%; }
          .stats-section { gap: 40px; flex-wrap: wrap; }
        }
        @media (max-width: 576px) {
          .hero-title { font-size: 2.75rem; }
          .hero-sub { font-size: 1.1rem; }
          .stat-item { width: 100%; }
        }
      `}} />
    </div>
  );
}
