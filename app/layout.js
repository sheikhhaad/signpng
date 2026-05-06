import "./globals.css";

const siteConfig = {
  name: "SignPNG",
  url: "https://signpng.vercel.app",
  description: "The fastest, most secure way to convert your handwritten signatures to high-quality transparent PNGs. Processed 100% in your browser.",
  keywords: ["signature to png", "transparent signature", "handwritten signature to digital", "remove signature background", "online signature converter"],
};

export const metadata = {
  title: {
    default: "SignPNG | Convert Signature to Transparent PNG Online (Free)",
    template: `%s | SignPNG`
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: "SignPNG Team" }],
  creator: "SignPNG",
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: "SignPNG | Convert Signature to Transparent PNG Online (Free)",
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SignPNG - Convert Signature to Transparent PNG",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SignPNG | Convert Signature to Transparent PNG Online (Free)",
    description: siteConfig.description,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "SignPNG",
    "url": "https://signpng.vercel.app",
    "description": siteConfig.description,
    "applicationCategory": "MultimediaApplication",
    "operatingSystem": "All",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Outfit:wght@400;600;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>

      <body>
        {/* Background */}
        <div className="bg-radial"></div>
        <div className="bg-grid"></div>

        {/* Header */}
        <header className="main-header">
          <nav className="glass nav-container">
            <a href="/" className="logo">
              <div className="logo-icon"></div>
              <span>SignPNG</span>
            </a>

            <div className="nav-links">
              <a href="/signature-to-png" className="nav-link">Tool</a>
              <a href="/blog" className="nav-link">Blog</a>
              <a href="/contact" className="nav-link">Contact</a>
            </div>

            <div className="nav-actions">
              <a href="/signature-to-png" className="glow-btn">
                Start Now
              </a>
            </div>
          </nav>
        </header>

        {/* Main Content */}
        <main className="main-content">
          {children}
        </main>

        {/* Footer */}
        <footer className="footer">
          <div className="glass footer-content">
            <div className="footer-info">
              <div className="logo" style={{ marginBottom: '15px' }}>
                <div className="logo-icon"></div>
                SignPNG
              </div>
              <p className="footer-desc">
                The most secure, client-side signature background removal tool. 
                Your privacy is our priority.
              </p>
            </div>

            <div className="footer-links-grid">
              <div className="footer-col">
                <h5>Product</h5>
                <a href="/signature-to-png">Converter</a>
                <a href="/blog">Guides</a>
              </div>
              <div className="footer-col">
                <h5>Company</h5>
                <a href="/contact">Support</a>
                <a href="/privacy">Privacy</a>
              </div>
            </div>
          </div>

          <div className="copyright">
            <p>© {new Date().getFullYear()} SignPNG. All rights reserved.</p>
          </div>
        </footer>

        {/* Global Inline Styles for Layout Components */}
        <style dangerouslySetInnerHTML={{ __html: `
          .main-header {
            position: fixed;
            top: 20px;
            left: 0;
            right: 0;
            z-index: 1000;
            padding: 0 20px;
            display: flex;
            justify-content: center;
          }
          .nav-container {
            width: 100%;
            max-width: 1200px;
            padding: 12px 24px;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .logo {
            display: flex;
            align-items: center;
            gap: 12px;
            text-decoration: none;
            font-family: 'Outfit', sans-serif;
            font-weight: 800;
            font-size: 1.5rem;
            color: white;
          }
          .logo-icon {
            width: 12px;
            height: 12px;
            background: var(--primary);
            border-radius: 50%;
            box-shadow: 0 0 15px var(--primary-glow);
          }
          .nav-links {
            display: flex;
            gap: 32px;
          }
          .nav-link {
            color: var(--text-dim);
            text-decoration: none;
            font-weight: 600;
            transition: var(--transition);
            font-size: 0.95rem;
          }
          .nav-link:hover {
            color: var(--primary);
          }
          .main-content {
            min-height: 100vh;
            padding-top: 120px;
          }
          .footer {
            padding: 80px 20px 40px;
          }
          .footer-content {
            max-width: 1200px;
            margin: 0 auto;
            padding: 60px 40px;
            display: grid;
            grid-template-columns: 1.5fr 1fr;
            gap: 60px;
          }
          .footer-desc {
            color: var(--text-dim);
            max-width: 320px;
            line-height: 1.7;
          }
          .footer-links-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 40px;
          }
          .footer-col h5 {
            color: white;
            font-size: 1.1rem;
            margin-bottom: 24px;
            font-family: 'Outfit', sans-serif;
          }
          .footer-col a {
            display: block;
            color: var(--text-dim);
            text-decoration: none;
            margin-bottom: 12px;
            transition: var(--transition);
          }
          .footer-col a:hover {
            color: var(--primary);
          }
          .copyright {
            text-align: center;
            margin-top: 40px;
            color: var(--text-dim);
            font-size: 0.9rem;
          }

          @media (max-width: 768px) {
            .nav-links { display: none; }
            .footer-content {
              grid-template-columns: 1fr;
              padding: 40px 24px;
              gap: 40px;
            }
          }
        `}} />
      </body>
    </html>
  );
}