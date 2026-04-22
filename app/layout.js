import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "SignPNG | Convert Signature to Transparent PNG Online (Free)",
  description:
    "Convert your handwritten signature to a transparent PNG instantly.",
  metadataBase: new URL("https://signpng.vercel.app"),
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
        {/* Background */}
        <div className="bg-radial"></div>
        <div className="bg-grid"></div>

        {/* Header */}
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

        {/* Main */}
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

        {/* -------- ADS START -------- */}

        {/* Script 1 */}
        <Script
          src="https://pl29225045.profitablecpmratenetwork.com/2a/87/df/2a87df58e98a9202470e8ae8d7d41fde.js"
          strategy="afterInteractive"
        />

        {/* Banner Ad */}
        <div id="container-banner-1"></div>

        <Script id="ad-options-1" strategy="afterInteractive">
          {`
            var atOptions = {
              key: '201b10fd8fd9eb4718c10ff78c95e4e8',
              format: 'iframe',
              height: 50,
              width: 320,
              params: {}
            };
          `}
        </Script>

        <Script
          src="https://www.highperformanceformat.com/201b10fd8fd9eb4718c10ff78c95e4e8/invoke.js"
          strategy="afterInteractive"
        />

        {/* Sidebar Ad */}
        <div id="container-sidebar-1"></div>

        <Script id="ad-options-2" strategy="afterInteractive">
          {`
            var atOptions = {
              key: 'a61324938c0e42ee0bacea14f604120b',
              format: 'iframe',
              height: 300,
              width: 160,
              params: {}
            };
          `}
        </Script>

        <Script
          src="https://www.highperformanceformat.com/a61324938c0e42ee0bacea14f604120b/invoke.js"
          strategy="afterInteractive"
        />

        {/* Large Skyscraper Ad */}
        <div id="container-sidebar-2"></div>

        <Script id="ad-options-3" strategy="afterInteractive">
          {`
            var atOptions = {
              key: '19dc376f584de9f6dd1c5a200811c609',
              format: 'iframe',
              height: 600,
              width: 160,
              params: {}
            };
          `}
        </Script>

        <Script
          src="https://www.highperformanceformat.com/19dc376f584de9f6dd1c5a200811c609/invoke.js"
          strategy="afterInteractive"
        />

        {/* -------- ADS END -------- */}

        {/* Footer */}
        <footer style={footerStyle}>
          <div className="glass" style={footerContentStyle}>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <div style={logoStyle}>SignPNG</div>
              <p style={{ color: "var(--text-dim)", fontSize: "0.9rem" }}>
                Fast signature background remover.
              </p>
            </div>

            <div style={footerLinksContainer}>
              <div style={footerCol}>
                <h4 style={{ color: "white" }}>Product</h4>
                <a href="/signature-to-png">Converter</a>
              </div>
              <div style={footerCol}>
                <h4 style={{ color: "white" }}>Legal</h4>
                <a href="/privacy">Privacy</a>
              </div>
            </div>
          </div>

          <p style={copyrightStyle}>
            © {new Date().getFullYear()} SignPNG
          </p>
        </footer>

        {/* Styles */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
            .nav-link { color: white; text-decoration: none; }
            .nav-link:hover { color: var(--primary); }
          `,
          }}
        />
      </body>
    </html>
  );
}

/* Styles */
const headerStyle = {
  position: "fixed",
  top: "20px",
  left: "0",
  right: "0",
  zIndex: 100,
  display: "flex",
  justifyContent: "center",
};

const navStyle = {
  width: "100%",
  maxWidth: "1200px",
  display: "flex",
  justifyContent: "space-between",
};

const logoStyle = {
  color: "white",
  display: "flex",
  alignItems: "center",
  gap: "10px",
};

const logoDot = {
  width: "10px",
  height: "10px",
  background: "blue",
  borderRadius: "50%",
};

const navLinksStyle = { display: "flex", gap: "20px" };

const footerStyle = {
  padding: "60px 20px",
};

const footerContentStyle = {
  display: "flex",
  justifyContent: "space-between",
};

const footerLinksContainer = { display: "flex", gap: "40px" };

const footerCol = { display: "flex", flexDirection: "column" };

const copyrightStyle = {
  textAlign: "center",
  marginTop: "20px",
};