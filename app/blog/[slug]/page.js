import { notFound } from "next/navigation";

const BLOG_POSTS = {
  "create-professional-digital-signature": {
    title: "How to Create a Professional Digital Signature at Home",
    description: "Learn how to turn a handwritten signature into a high-quality digital asset for all your documents with our step-by-step guide.",
    keywords: ["create digital signature", "handwritten to digital", "professional signature tutorial"],
    date: "April 10, 2026",
    content: `
      <p>In today's digital world, having a professional signature for your PDF documents, contracts, and emails is essential. But how do you turn a pen-on-paper signature into a high-quality digital asset?</p>
      
      <h3>Step 1: The Paper and Pen</h3>
      <p>Start with a clean sheet of bright white, unlined paper. Use a black ink pen (a felt-tip or gel pen works best) to ensure the lines are bold and clear. Sign your name firmly and slightly larger than usual.</p>

      <h3>Step 2: Capture the Image</h3>
      <p>Use your smartphone camera in a well-lit area. Avoid shadows by placing the paper near a window. Keep the camera parallel to the paper to prevent distortion. High contrast is key for a clean digital conversion.</p>

      <h3>Step 3: Remove the Background</h3>
      <p>This is where SignPNG comes in. Upload your JPEG or PNG capture to our tool. Use the sensitivity slider to ensure every bit of white background is removed, leaving only your signature with a transparent background.</p>

      <h3>Step 4: Use Your PNG</h3>
      <p>Now that you have a transparent PNG, you can drag and drop it into Microsoft Word, Adobe Acrobat, or Apple Pages. Since the background is transparent, it will overlap correctly with lines and text in your documents.</p>
    `,
  },
  "why-transparent-signatures-matter": {
    title: "Why Your Business Needs Transparent Signature PNGs",
    description: "Discover why transparent signatures are superior to JPEGs for professional branding and document security.",
    keywords: ["transparent signature benefits", "professional branding", "digital signature security"],
    date: "April 12, 2026",
    content: `
      <p>Using a standard JPEG for your signature often results in an ugly white box that overlaps your document's signature lines. This looks unprofessional and amateurish.</p>
      
      <h3>1. Professionalism</h3>
      <p>A transparent signature looks like you've physically signed the digital document. It integrates seamlessly with the page layout, maintaining the aesthetic of the paper document it replaces.</p>

      <h3>2. Versatility</h3>
      <p>Transparent PNGs work everywhere—from dark-themed email signatures to official government forms. You don't have to worry about the background color of the destination document.</p>

      <h3>3. Security</h3>
      <p>By processing your signature locally with tools like SignPNG, you ensure your sensitive biological data (your handwriting) is never uploaded to distant servers, protecting your identity.</p>
    `,
  },
  "digital-signature-security-guide": {
    title: "The Ultimate Guide to Digital Signature Security",
    description: "Protect your digital identity. Learn the best practices for securing and storing your digital signatures.",
    keywords: ["digital signature security", "protect digital signature", "signature privacy guide"],
    date: "April 14, 2026",
    content: `
      <p>Digital security is more important than ever. Your signature is a key part of your legal identity, and protecting it should be your top priority.</p>
      
      <h3>Privacy is Security</h3>
      <p>Many online converters require you to upload your images to their servers. This creates a security risk. If their server is breached, your signature is out in the wild. SignPNG solves this by doing all the work in your browser.</p>

      <h3>Verification</h3>
      <p>Always ensure the documents you are signing are from trusted sources. A digital signature is powerful, but only when used correctly within a secure workflow.</p>

      <h3>Storage</h3>
      <p>Store your master transparent PNG in a secure, encrypted location on your device, such as a password manager or a secure vault.</p>
    `,
  },
};

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = BLOG_POSTS[slug];

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
  };
}

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const post = BLOG_POSTS[slug];

  if (!post) {
    notFound();
  }

  return (
    <>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out;
        }
        .glass {
          background: rgba(20, 20, 30, 0.8);
          backdrop-filter: blur(10px);
          border-radius: 24px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
        }
        .glow-btn {
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          color: white;
          border: none;
          padding: 12px 28px;
          border-radius: 99px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          display: inline-block;
          text-align: center;
          text-decoration: none;
        }
        .glow-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px -5px rgba(99, 102, 241, 0.4);
        }
        h3 {
          color: white;
          margin-top: 40px;
          margin-bottom: 15px;
          font-size: 1.5rem;
        }
        p {
          color: #9ca3af;
          margin-bottom: 15px;
          line-height: 1.8;
          font-size: 1.1rem;
        }
        ul, ol {
          color: #9ca3af;
          margin-bottom: 15px;
          line-height: 1.8;
        }
        li {
          margin-bottom: 8px;
        }
        a {
          color: #8b5cf6;
          text-decoration: none;
        }
        a:hover {
          text-decoration: underline;
        }
      `}</style>

      <div style={containerStyle}>
        <a href="/blog" style={backLink}>
          ← Back to Blog
        </a>

        <main className="animate-fade-in" style={postLayout}>
          <header style={header}>
            <span style={date}>{post.date}</span>
            <h1 style={titleStyle}>{post.title}</h1>
          </header>

          <div
            style={contentStyle}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="glass" style={ctaSection}>
            <h3 style={{ marginTop: 0 }}>Ready to create yours?</h3>
            <p style={{ marginBottom: 0 }}>
              Remove the background from your signature in seconds.
            </p>
            <a href="/signature-to-png" className="glow-btn">
              Go to Tool
            </a>
          </div>
        </main>
      </div>
    </>
  );
}

const containerStyle = {
  maxWidth: "800px",
  margin: "0 auto",
  padding: "40px 20px 100px",
  minHeight: "100vh",
  background: "radial-gradient(circle at 20% 50%, #1a1a2e, #0a0a15)",
};

const backLink = {
  color: "#8b5cf6",
  textDecoration: "none",
  fontWeight: "600",
  fontSize: "0.95rem",
  display: "inline-block",
  marginBottom: "40px",
  transition: "color 0.3s ease",
};

const postLayout = {
  display: "flex",
  flexDirection: "column",
  gap: "40px",
};

const header = {
  borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
  paddingBottom: "30px",
};

const date = {
  color: "#8b5cf6",
  fontWeight: "600",
  fontSize: "0.9rem",
  textTransform: "uppercase",
  letterSpacing: "1px",
};

const titleStyle = {
  fontSize: "3rem",
  fontWeight: "800",
  color: "white",
  marginTop: "10px",
  lineHeight: "1.2",
};

const contentStyle = {
  color: "#e5e7eb",
};

const ctaSection = {
  marginTop: "60px",
  padding: "50px",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "20px",
};

