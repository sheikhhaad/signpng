export const metadata = {
  title: 'Blog - Digital Signature Guides & Tips',
  description: 'Expert guides on digital signatures, professional branding, and document security from SignPNG.',
};

const BLOG_POSTS = [
  {
    title: "How to Create a Professional Digital Signature at Home",
    slug: "create-professional-digital-signature",
    excerpt: "Learn how to turn a handwritten signature into a high-quality digital asset for all your documents.",
    date: "April 10, 2026",
    image: "✍️"
  },
  {
    title: "Why Your Business Needs Transparent Signature PNGs",
    slug: "why-transparent-signatures-matter",
    excerpt: "Discover the benefits of using transparent PNGs over JPEG for professional document signing.",
    date: "April 12, 2026",
    image: "💼"
  },
  {
    title: "The Ultimate Guide to Digital Signature Security",
    slug: "digital-signature-security-guide",
    excerpt: "Everything you need to know about keeping your digital identity safe while signing online.",
    date: "April 14, 2026",
    image: "🔒"
  }
];

export default function BlogPage() {
  return (
    <div style={containerStyle}>
      <div className="animate-fade-in" style={headerStyle}>
        <h1 style={titleStyle}>The SignPNG <span style={highlight}>Blog</span></h1>
        <p style={subStyle}>Expert guides on digital signatures, professional branding, and document security.</p>
      </div>

      <div style={blogGrid}>
        {BLOG_POSTS.map((post) => (
          <a key={post.slug} href={`/blog/${post.slug}`} className="glass glass-hover" style={blogCard}>
            <div style={iconBox}>{post.image}</div>
            <div style={content}>
              <span style={date}>{post.date}</span>
              <h2 style={postTitle}>{post.title}</h2>
              <p style={postExcerpt}>{post.excerpt}</p>
              <span style={readMore}>Read Article →</span>
            </div>
          </a>
        ))}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        a { text-decoration: none; }
      `}} />
    </div>
  );
}

const containerStyle = {
  maxWidth: "1100px",
  margin: "0 auto",
  padding: "40px 20px 100px",
};

const headerStyle = {
  textAlign: "center",
  marginBottom: "70px",
};

const titleStyle = {
  fontSize: "3.5rem",
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
  fontSize: "1.2rem",
  color: "var(--text-dim)",
  maxWidth: "700px",
  margin: "0 auto",
};

const blogGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
  gap: "30px",
};

const blogCard = {
  padding: "40px",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  transition: "var(--transition)",
};

const iconBox = {
  fontSize: "3rem",
  background: "rgba(255,255,255,0.03)",
  width: "80px",
  height: "80px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "20px",
};

const content = {
  display: "flex",
  flexDirection: "column",
  gap: "12px",
};

const date = {
  fontSize: "0.85rem",
  color: "var(--primary)",
  fontWeight: "600",
  textTransform: "uppercase",
};

const postTitle = {
  fontSize: "1.5rem",
  color: "white",
  fontWeight: "700",
  lineHeight: "1.3",
};

const postExcerpt = {
  fontSize: "1rem",
  color: "var(--text-dim)",
  lineHeight: "1.6",
};

const readMore = {
  color: "var(--secondary)",
  fontWeight: "600",
  marginTop: "10px",
  fontSize: "0.95rem",
};
