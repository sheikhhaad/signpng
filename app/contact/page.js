export const metadata = {
  title: 'Contact Us',
  description: 'Get in touch with SignPNG for support, feature requests, or feedback on our signature background removal tool.',
};

export default function ContactPage() {
  return (
    <div style={containerStyle}>
      <div className="animate-fade-in" style={headerStyle}>
        <h1 style={titleStyle}>Get in <span style={highlight}>Touch</span></h1>
        <p style={subStyle}>Have questions or feedback? We'd love to hear from you.</p>
      </div>

      <div style={layoutGrid}>
        <div className="glass" style={formGlass}>
          <form style={form}>
            <div style={inputGroup}>
              <label style={label}>Name</label>
              <input type="text" placeholder="Your name" style={input} />
            </div>
            <div style={inputGroup}>
              <label style={label}>Email</label>
              <input type="email" placeholder="your@email.com" style={input} />
            </div>
            <div style={inputGroup}>
              <label style={label}>Message</label>
              <textarea placeholder="How can we help?" style={{ ...input, minHeight: "150px", resize: "vertical" }}></textarea>
            </div>
            <button type="button" className="glow-btn" style={{ width: "100%", padding: "16px" }}>
              Send Message
            </button>
          </form>
        </div>

        <div style={infoCol}>
          <div className="glass glass-hover" style={infoCard}>
            <h3>Support</h3>
            <p>For technical issues or feature requests, email us at:</p>
            <a href="mailto:support@signpng.com" style={link}>support@signpng.com</a>
          </div>
          <div className="glass glass-hover" style={infoCard}>
            <h3>Feedback</h3>
            <p>Tell us how we can improve our signature tool.</p>
            <a href="mailto:feedback@signpng.com" style={link}>feedback@signpng.com</a>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        h3 { color: white; margin-bottom: 10px; }
        p { color: var(--text-dim); margin-bottom: 10px; }
      `}} />
    </div>
  );
}

const containerStyle = {
  maxWidth: "1000px",
  margin: "0 auto",
  padding: "40px 20px 100px",
};

const headerStyle = {
  textAlign: "center",
  marginBottom: "60px",
};

const titleStyle = {
  fontSize: "3rem",
  fontWeight: "800",
  marginBottom: "15px",
  color: "white"
};

const highlight = {
  background: "linear-gradient(to right, var(--primary), var(--secondary))",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
};

const subStyle = {
  fontSize: "1.1rem",
  color: "var(--text-dim)",
};

const layoutGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
  gap: "40px",
};

const formGlass = {
  padding: "40px",
};

const form = {
  display: "flex",
  flexDirection: "column",
  gap: "24px",
};

const inputGroup = {
  display: "flex",
  flexDirection: "column",
  gap: "8px",
};

const label = {
  fontSize: "0.9rem",
  fontWeight: "600",
  color: "white",
};

const input = {
  background: "rgba(255,255,255,0.03)",
  border: "1px solid var(--glass-border)",
  padding: "14px",
  borderRadius: "12px",
  color: "white",
  outline: "none",
  transition: "var(--transition)",
  fontSize: "1rem",
};

const infoCol = {
  display: "flex",
  flexDirection: "column",
  gap: "20px",
};

const infoCard = {
  padding: "30px",
  transition: "var(--transition)",
};

const link = {
  color: "var(--primary)",
  textDecoration: "none",
  fontWeight: "600",
};
