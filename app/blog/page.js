export const metadata = {
  title: 'Digital Signature Guides & Professional Branding Tips',
  description: 'Expert guides on digital signatures, professional branding, and document security. Learn how to optimize your digital signature for a professional workflow.',
  keywords: ['digital signature guides', 'professional signature tips', 'document security', 'electronic signature branding', 'handwritten to digital signature tutorial'],
};

const BLOG_POSTS = [
  {
    title: "How to Create a Professional Digital Signature at Home",
    slug: "create-professional-digital-signature",
    excerpt: "Learn how to turn a handwritten signature into a high-quality digital asset for all your documents.",
    date: "April 10, 2026",
    category: "Tutorial",
    image: "✍️"
  },
  {
    title: "Why Your Business Needs Transparent Signature PNGs",
    slug: "why-transparent-signatures-matter",
    excerpt: "Discover the benefits of using transparent PNGs over JPEG for professional document signing.",
    date: "April 12, 2026",
    category: "Business",
    image: "💼"
  },
  {
    title: "The Ultimate Guide to Digital Signature Security",
    slug: "digital-signature-security-guide",
    excerpt: "Everything you need to know about keeping your digital identity safe while signing online.",
    date: "April 14, 2026",
    category: "Security",
    image: "🔒"
  }
];

export default function BlogPage() {
  return (
    <div className="blog-container">
      <div className="blog-header animate-fade-in">
        <h1 className="blog-title">The SignPNG <span className="text-gradient">Blog</span></h1>
        <p className="blog-sub">Master your digital workflow with our expert guides and technical tips.</p>
      </div>

      <div className="blog-grid">
        {BLOG_POSTS.map((post, index) => (
          <a 
            key={post.slug} 
            href={`/blog/${post.slug}`} 
            className="glass glass-hover blog-card animate-fade-in"
            style={{ animationDelay: `${0.1 * (index + 1)}s` }}
          >
            <div className="card-top">
              <div className="post-icon">{post.image}</div>
              <span className="post-category">{post.category}</span>
            </div>
            <div className="post-content">
              <div className="post-meta">
                <span className="post-date">{post.date}</span>
              </div>
              <h2 className="post-title">{post.title}</h2>
              <p className="post-excerpt">{post.excerpt}</p>
              <div className="read-more">
                <span>Read Article</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </div>
            </div>
          </a>
        ))}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .blog-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 40px 20px 120px;
        }
        .blog-header {
          text-align: center;
          margin-bottom: 80px;
        }
        .blog-title {
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
        .blog-sub {
          font-size: 1.1rem;
          color: var(--text-dim);
          max-width: 600px;
          margin: 0 auto;
        }
        .blog-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
          gap: 32px;
        }
        .blog-card {
          padding: 32px;
          display: flex;
          flex-direction: column;
          gap: 24px;
          text-decoration: none;
        }
        .card-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }
        .post-icon {
          font-size: 2.5rem;
          width: 70px;
          height: 70px;
          background: rgba(255,255,255,0.03);
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .post-category {
          font-size: 0.75rem;
          font-weight: 800;
          color: var(--primary);
          text-transform: uppercase;
          letter-spacing: 1.5px;
          padding: 6px 12px;
          background: rgba(34, 211, 238, 0.1);
          border-radius: 100px;
          border: 1px solid rgba(34, 211, 238, 0.2);
        }
        .post-meta {
          margin-bottom: 12px;
        }
        .post-date {
          font-size: 0.85rem;
          color: var(--text-dim);
          font-weight: 500;
        }
        .post-title {
          font-family: 'Outfit', sans-serif;
          font-size: 1.5rem;
          font-weight: 800;
          color: white;
          margin-bottom: 12px;
          line-height: 1.3;
          transition: var(--transition);
        }
        .blog-card:hover .post-title {
          color: var(--primary);
        }
        .post-excerpt {
          color: var(--text-dim);
          line-height: 1.7;
          margin-bottom: 24px;
        }
        .read-more {
          display: flex;
          align-items: center;
          gap: 8px;
          color: white;
          font-weight: 700;
          font-size: 0.95rem;
        }
        .read-more svg {
          transition: transform 0.3s ease;
        }
        .blog-card:hover .read-more svg {
          transform: translateX(5px);
        }

        @media (max-width: 768px) {
          .blog-title { font-size: 2.5rem; }
          .blog-grid { grid-template-columns: 1fr; }
        }
      `}} />
    </div>
  );
}
