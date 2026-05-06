export const metadata = {
  title: 'Privacy Policy & Data Security | SignPNG',
  description: 'Your privacy is our priority. SignPNG is designed for zero data collection—all signature processing happens locally in your browser. No images are ever uploaded.',
  keywords: ['signpng privacy', 'signature security', 'data protection', 'private signature converter', 'local image processing'],
};

export default function PrivacyPage() {
  return (
    <div className="privacy-container">
      <div className="privacy-header animate-fade-in">
        <h1 className="privacy-title">Privacy <span className="text-gradient">Policy</span></h1>
        <p className="privacy-sub">Transparency and security are at our core. Last updated: April 15, 2026</p>
      </div>

      <div className="glass privacy-content animate-fade-in" style={{ animationDelay: '0.2s' }}>
        <section className="privacy-section">
          <h2>1. Data Sovereignty</h2>
          <p>
            At SignPNG, we believe your data belongs to you. Our tool is engineered to process images entirely within your web browser using modern Web APIs. 
            <strong className="highlight-text"> We do not upload, store, or transmit your images to any server.</strong>
          </p>
        </section>

        <section className="privacy-section">
          <h2>2. Zero Data Collection</h2>
          <p>
            Because all processing happens locally on your device (client-side), we do not collect:
          </p>
          <ul className="privacy-list">
            <li>The images you upload for background removal</li>
            <li>The final transparent signatures you generate</li>
            <li>Any personal identifying information from your files</li>
          </ul>
        </section>

        <section className="privacy-section">
          <h2>3. Cookies and Analytics</h2>
          <p>
            We use minimal web analytics to understand traffic patterns and improve our user interface. 
            This data is anonymized and helps us provide a better experience for everyone. No image data is ever part of this analysis.
          </p>
        </section>

        <section className="privacy-section">
          <h2>4. Third-Party Networks</h2>
          <p>
            To keep SignPNG free for everyone, we may display advertisements from trusted third-party networks. 
            These networks may use cookies to serve ads based on your interests.
          </p>
        </section>

        <section className="privacy-section">
          <h2>5. Contact & Support</h2>
          <p>
            If you have any questions regarding our privacy practices, please contact us through our dedicated support channels.
          </p>
        </section>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .privacy-container {
          max-width: 900px;
          margin: 0 auto;
          padding: 40px 20px 120px;
        }
        .privacy-header {
          text-align: center;
          margin-bottom: 60px;
        }
        .privacy-title {
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
        .privacy-sub {
          font-size: 1.1rem;
          color: var(--text-dim);
        }
        .privacy-content {
          padding: 60px;
          display: flex;
          flex-direction: column;
          gap: 60px;
        }
        .privacy-section h2 {
          color: white;
          font-size: 1.75rem;
          font-family: 'Outfit', sans-serif;
          margin-bottom: 24px;
        }
        .privacy-section p {
          color: var(--text-dim);
          line-height: 1.8;
          font-size: 1.1rem;
        }
        .highlight-text {
          color: var(--primary);
        }
        .privacy-list {
          margin-top: 24px;
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .privacy-list li {
          color: var(--text-dim);
          padding-left: 32px;
          position: relative;
          font-size: 1.05rem;
        }
        .privacy-list li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: var(--primary);
          font-weight: 800;
        }

        @media (max-width: 768px) {
          .privacy-content { padding: 32px; gap: 40px; }
          .privacy-title { font-size: 2.5rem; }
          .privacy-section h2 { font-size: 1.5rem; }
        }
      `}} />
    </div>
  );
}
