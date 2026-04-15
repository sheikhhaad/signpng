export const metadata = {
  title: 'Privacy Policy',
  description: 'Read the SignPNG Privacy Policy. Learn how we protect your data with secure, client-side browser processing.',
};

export default function PrivacyPage() {
  return (
    <div style={containerStyle}>
      <div className="animate-fade-in" style={headerStyle}>
        <h1 style={titleStyle}>Privacy Policy</h1>
        <p style={subStyle}>Last updated: April 15, 2026</p>
      </div>

      <div className="glass" style={contentGlass}>
        <section style={section}>
          <h2>1. We Respect Your Privacy</h2>
          <p>
            At SignPNG, we believe your data belongs to you. Our tool is designed to process images entirely within your web browser. 
            <strong> We do not upload, store, or transmit your images to any server.</strong>
          </p>
        </section>

        <section style={section}>
          <h2>2. No Data Collection</h2>
          <p>
            Because all processing happens locally on your device (client-side), we do not collect:
          </p>
          <ul style={list}>
            <li>The images you upload</li>
            <li>The signatures you create</li>
            <li>Your personal identification (unless you contact us directly)</li>
          </ul>
        </section>

        <section style={section}>
          <h2>3. Cookies and Analytics</h2>
          <p>
            We may use basic web analytics to understand traffic patterns and improve our user interface. 
            This data is anonymized and does not include any information regarding your processed images.
          </p>
        </section>

        <section style={section}>
          <h2>4. Third-Party Services</h2>
          <p>
            To keep this tool free, we may display advertisements from third-party networks. 
            These networks may use cookies to serve ads based on your visits to this and other websites.
          </p>
        </section>

        <section style={section}>
          <h2>5. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please reach out via our contact page.
          </p>
        </section>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        h2 { color: white; margin-bottom: 15px; font-size: 1.5rem; }
        p { color: var(--text-dim); margin-bottom: 10px; line-height: 1.6; }
        strong { color: var(--primary); }
      `}} />
    </div>
  );
}

const containerStyle = {
  maxWidth: "800px",
  margin: "0 auto",
  padding: "40px 20px 100px",
};

const headerStyle = {
  textAlign: "center",
  marginBottom: "50px",
};

const titleStyle = {
  fontSize: "2.5rem",
  fontWeight: "800",
  marginBottom: "10px",
  color: "white"
};

const subStyle = {
  fontSize: "1rem",
  color: "var(--text-dim)",
};

const contentGlass = {
  padding: "40px",
  display: "flex",
  flexDirection: "column",
  gap: "40px",
};

const section = {
  borderBottom: "1px solid var(--glass-border)",
  paddingBottom: "30px",
};

const list = {
  color: "var(--text-dim)",
  paddingLeft: "20px",
  display: "flex",
  flexDirection: "column",
  gap: "8px",
};
