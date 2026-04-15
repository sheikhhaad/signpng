export default function Home() {
  return (
    <div style={containerStyle}>
      {/* Hero Section */}
      <section className="animate-fade-in" style={heroSection}>
        <div className="glass" style={heroGlass}>
          <h1 style={heroTitle}>
            Convert Your Signature to <span style={highlightText}>Transparent PNG</span> Fast & Free
          </h1>
          <p style={heroSub}>
            Tired of white backgrounds on your digital signatures? Our secure tool handles it in seconds using only your browser. No upload to servers, 100% private.
          </p>
          <div style={ctaGroup}>
            <a href="/signature-to-png" className="glow-btn" style={{ padding: '16px 40px', fontSize: '1.1rem' }}>
              Upload Signature Now
            </a>
            <span style={{ color: 'var(--text-dim)', fontSize: '0.9rem' }}>No registration required</span>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section style={sectionStyle}>
        <div style={sectionHeader}>
          <h2 style={sectionTitle}>Why Choose SignPNG?</h2>
          <p style={sectionSub}>Built for speed, security, and simplicity.</p>
        </div>
        <div style={featureGrid}>
          <div className="glass glass-hover" style={featureCard}>
            <div style={iconBox}>⚡</div>
            <h3>Lightning Fast</h3>
            <p>Processing happens in real-time right in your browser. No long waits or server queues.</p>
          </div>
          <div className="glass glass-hover" style={featureCard}>
            <div style={iconBox}>🔒</div>
            <h3>Privacy First</h3>
            <p>Your images never leave your device. All processing is client-side, ensuring total data security.</p>
          </div>
          <div className="glass glass-hover" style={featureCard}>
            <div style={iconBox}>💎</div>
            <h3>High Quality</h3>
            <p>Advanced pixel detection ensures a clean, professional transparent PNG every time.</p>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section style={sectionStyle}>
        <div className="glass" style={howItWorksContainer}>
          <h2 style={sectionTitle}>How It Works</h2>
          <div style={stepsGrid}>
            <div style={stepItem}>
              <span style={stepNumber}>1</span>
              <h4>Upload</h4>
              <p>Select your signature image (JPG or PNG).</p>
            </div>
            <div style={stepItem}>
              <span style={stepNumber}>2</span>
              <h4>Auto-Convert</h4>
              <p>Our tool instantly detects and removes the white background.</p>
            </div>
            <div style={stepItem}>
              <span style={stepNumber}>3</span>
              <h4>Download</h4>
              <p>Get your transparent signature PNG ready for use.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ ...sectionStyle, paddingBottom: '100px' }}>
        <h2 style={{ ...sectionTitle, textAlign: 'center', marginBottom: '40px' }}>Frequently Asked Questions</h2>
        <div style={faqContainer}>
          <div className="glass" style={faqItem}>
            <h4>Is it really free?</h4>
            <p>Yes! SignPNG is 100% free to use with no hidden costs or daily limits.</p>
          </div>
          <div className="glass" style={faqItem}>
            <h4>Is my signature image safe?</h4>
            <p>Absolutely. We use local browser processing, meaning your signature is never uploaded to any server.</p>
          </div>
          <div className="glass" style={faqItem}>
            <h4>What image formats are supported?</h4>
            <p>We support JPG, JPEG, and PNG images. For best results, use a signature on plain white paper.</p>
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        h3 { margin-bottom: 12px; font-size: 1.25rem; color: white; }
        h4 { color: white; margin-bottom: 8px; }
        @media (max-width: 768px) {
          section { padding: 40px 20px !important; }
          h1 { font-size: 2.5rem !important; }
        }
      `}} />
    </div>
  );
}

const containerStyle = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 20px',
};

const heroSection = {
  minHeight: '80vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '60px 0',
};

const heroGlass = {
  width: '100%',
  padding: '80px 40px',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '30px',
};

const heroTitle = {
  fontSize: '4rem',
  fontWeight: '800',
  lineHeight: '1.1',
  maxWidth: '900px',
  background: 'linear-gradient(to right, #fff, #94a3b8)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
};

const highlightText = {
  background: 'linear-gradient(to right, var(--primary), var(--secondary))',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
};

const heroSub = {
  fontSize: '1.25rem',
  color: 'var(--text-dim)',
  maxWidth: '700px',
};

const ctaGroup = {
  display: 'flex',
  flexDirection: 'column',
  gap: '15px',
  marginTop: '20px',
};

const sectionStyle = {
  padding: '80px 0',
};

const sectionHeader = {
  textAlign: 'center',
  marginBottom: '60px',
};

const sectionTitle = {
  fontSize: '2.5rem',
  fontWeight: '700',
  marginBottom: '10px',
  color: 'white'
};

const sectionSub = {
  fontSize: '1.1rem',
  color: 'var(--text-dim)',
};

const featureGrid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: '30px',
};

const featureCard = {
  padding: '40px',
  transition: 'var(--transition)',
};

const iconBox = {
  width: '50px',
  height: '50px',
  borderRadius: '12px',
  background: 'rgba(255,255,255,0.05)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '1.5rem',
  marginBottom: '20px',
};

const howItWorksContainer = {
  padding: '60px 40px',
  textAlign: 'center'
};

const stepsGrid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  gap: '40px',
  marginTop: '50px'
};

const stepItem = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '15px'
};

const stepNumber = {
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: 'bold',
  fontSize: '1.2rem'
};

const faqContainer = {
  maxWidth: '800px',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  gap: '20px'
};

const faqItem = {
  padding: '24px 30px',
};
