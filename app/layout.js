import "./globals.css";

// Next.js recognizes 'metadata' variable name for SEO
export const metadata = {
  title: "SignPNG | Convert Signature to Transparent PNG Online (Free)",
  description:
    "Convert your handwritten signature to a transparent PNG instantly. 100% private, browser-side processing. No more white backgrounds on your digital signatures.",
  keywords: [
    "bg remover",
    "bg remover online",
    "signature to transparent png",
    "signature to png",
    "signature to transparent png",
    "remove signature background",
    "signature maker",
    "digital signature converter",
    "sign png",
  ],
  authors: [{ name: "SignPNG" }],
  metadataBase: new URL("https://signpng.vercel.app"),
  openGraph: {
    title: "SignPNG - Transparent Signature Maker",
    description:
      "Fast, free, and secure way to clean up your signature background.",
    url: "https://signpng.vercel.app/",
    siteName: "SignPNG",
    type: "website",
    images: [
      {
        url: "/og-image.png", // Public folder mein ye image honi chahiye
        width: 1200,
        height: 630,
        alt: "SignPNG Tool Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SignPNG - Convert Signature to PNG",
    description: "Remove signature background in seconds.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
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
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="bg-radial"></div>
        <div className="bg-grid"></div>

        <header style={headerStyle}>
          <nav className="glass" style={navStyle}>
            <a href="/" style={logoStyle}>
              <span style={logoDot}></span>
              SignPNG
            </a>
            <div style={navLinksStyle}>
              <a href="/signature-to-png" className="nav-link">
                Tool
              </a>
              <a href="/blog" className="nav-link">
                Blog
              </a>
              <a href="/contact" className="nav-link">
                Contact
              </a>
            </div>
            <a href="/signature-to-png" className="glow-btn">
              Use Tool
            </a>
          </nav>
        </header>

        <main
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            paddingTop: "100px",
          }}
        >
          {children}
        </main>

        <footer style={footerStyle}>
          <div className="glass" style={footerContentStyle}>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              <div style={logoStyle}>SignPNG</div>
              <p style={{ color: "var(--text-dim)", fontSize: "0.9rem" }}>
                The fastest way to clean up your signature.
              </p>
            </div>
            <div style={footerLinksContainer}>
              <div style={footerCol}>
                <h4 style={{ color: "white", marginBottom: "12px" }}>
                  Product
                </h4>
                <a href="/signature-to-png">Converter</a>
                <a href="/blog">Guides</a>
              </div>
              <div style={footerCol}>
                <h4 style={{ color: "white", marginBottom: "12px" }}>Legal</h4>
                <a href="/privacy">Privacy Policy</a>
              </div>
            </div>
          </div>
          <p style={copyrightStyle}>
            © {new Date().getFullYear()} SignPNG. Fast, Free, Secure.
          </p>
        </footer>

        <style
          dangerouslySetInnerHTML={{
            __html: `
          .nav-link {
            color: var(--text-color);
            text-decoration: none;
            font-weight: 500;
            transition: var(--transition);
            font-size: 0.95rem;
          }
          .nav-link:hover { color: var(--primary); }
          footer a { color: var(--text-dim); text-decoration: none; font-size: 0.9rem; transition: var(--transition); }
          footer a:hover { color: var(--primary); }
          @media (max-width: 768px) {
            header nav div:nth-child(2) { display: none; }
          }
        `,
          }}
        />
      </body>
    </html>
  );
}

// --- Styles ---
const headerStyle = {
  position: "fixed",
  top: "20px",
  left: "0",
  right: "0",
  zIndex: 100,
  padding: "0 20px",
  display: "flex",
  justifyContent: "center",
};
const navStyle = {
  width: "100%",
  maxWidth: "1200px",
  padding: "12px 24px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};
const logoStyle = {
  fontSize: "1.5rem",
  fontWeight: "700",
  color: "white",
  textDecoration: "none",
  display: "flex",
  alignItems: "center",
  gap: "10px",
};
const logoDot = {
  width: "12px",
  height: "12px",
  backgroundColor: "var(--primary)",
  borderRadius: "50%",
  boxShadow: "0 0 10px var(--primary-glow)",
};
const navLinksStyle = { display: "flex", gap: "32px" };
const footerStyle = {
  padding: "80px 20px 40px",
  maxWidth: "1200px",
  margin: "0 auto",
  width: "100%",
};
const footerContentStyle = {
  padding: "40px",
  display: "flex",
  justifyContent: "space-between",
  flexWrap: "wrap",
  gap: "40px",
};
const footerLinksContainer = { display: "flex", gap: "60px" };
const footerCol = { display: "flex", flexDirection: "column", gap: "10px" };
const copyrightStyle = {
  textAlign: "center",
  marginTop: "40px",
  color: "var(--text-dim)",
  fontSize: "0.8rem",
};
