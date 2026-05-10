import Link from "next/link";

export const metadata = {
  title: "Digital Signature Guides & Professional Branding Tips",
  description:
    "Expert guides on digital signatures, professional branding, and document security. Learn how to optimize your digital signature for a professional workflow.",
  keywords: [
    "digital signature guides",
    "professional signature tips",
    "document security",
    "electronic signature branding",
    "handwritten to digital signature tutorial",
  ],
};

const BLOG_POSTS = [
  {
    title: "How to Create a Professional Digital Signature at Home",
    slug: "create-professional-digital-signature",
    excerpt:
      "Learn how to turn a handwritten signature into a high-quality digital asset for all your documents.",
    date: "April 10, 2026",
    category: "Tutorial",
    image: "✍️",
  },
  {
    title: "Why Your Business Needs Transparent Signature PNGs",
    slug: "why-transparent-signatures-matter",
    excerpt:
      "Discover the benefits of using transparent PNGs over JPEG for professional document signing.",
    date: "April 12, 2026",
    category: "Business",
    image: "💼",
  },
  {
    title: "The Ultimate Guide to Digital Signature Security",
    slug: "digital-signature-security-guide",
    excerpt:
      "Everything you need to know about keeping your digital identity safe while signing online.",
    date: "April 14, 2026",
    category: "Security",
    image: "🔒",
  },
];

export default function BlogPage() {
  return (
    <div className="max-w-6xl mx-auto px-5 py-10">
      <div className="text-center mb-16 animate-fade-in">
        <h1 className="font-outfit text-5xl md:text-6xl font-extrabold text-white mb-4">
          The SignPNG <span className="text-gradient">Blog</span>
        </h1>
        <p className="text-xl text-text-dim max-w-2xl mx-auto">
          Master your digital workflow with our expert guides and technical
          tips.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {BLOG_POSTS.map((post, index) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="glass glass-hover p-8 flex flex-col gap-6 no-underline animate-fade-in group"
            style={{ animationDelay: `${0.1 * (index + 1)}s` }}
          >
            <div className="flex justify-between items-start">
              <div className="text-4xl w-16 h-16 bg-white/3 rounded-2xl flex items-center justify-center transition-all group-hover:bg-white/10">
                {post.image}
              </div>
              <span className="text-[10px] font-extrabold text-primary uppercase tracking-[2px] px-3 py-1.5 bg-primary/10 rounded-full border border-primary/20">
                {post.category}
              </span>
            </div>
            <div>
              <div className="mb-3">
                <span className="text-text-dim text-xs font-semibold">
                  {post.date}
                </span>
              </div>
              <h2 className="text-white text-2xl font-outfit font-extrabold mb-4 leading-tight transition-all group-hover:text-primary">
                {post.title}
              </h2>
              <p className="text-text-dim leading-relaxed mb-6 line-clamp-3">
                {post.excerpt}
              </p>
              <div className="flex items-center gap-2 text-white font-bold text-sm">
                <span>Read Article</span>
                <svg
                  className="transition-all duration-300 group-hover:translate-x-1"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
