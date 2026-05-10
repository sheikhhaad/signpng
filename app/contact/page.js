export const metadata = {
  title: "Contact SignPNG - Support & Feedback",
  description:
    "Have a question about converting your signature to PNG? Need technical support? Contact the SignPNG team for fast assistance.",
  keywords: [
    "contact signpng",
    "signature tool support",
    "signpng feedback",
    "customer service",
    "digital signature help",
  ],
};

export default function ContactPage() {
  return (
    <div className="max-w-6xl mx-auto px-5 py-10">
      <div className="text-center mb-16 animate-fade-in">
        <h1 className="font-outfit text-5xl md:text-6xl font-extrabold text-white mb-4">
          Get in <span className="text-gradient">Touch</span>
        </h1>
        <p className="text-xl text-text-dim max-w-2xl mx-auto">
          Have a question or a feature request? We'd love to hear from you.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-10">
        <div className="glass p-8 md:p-12 animate-fade-in">
          <form className="flex flex-col gap-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2.5">
                <label className="text-white font-bold text-xs uppercase tracking-widest">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="bg-white/3 border border-white/10 p-4 rounded-xl color-white text-base outline-none transition-all focus:border-primary focus:bg-white/5 focus:shadow-[0_0_20px_var(--primary-glow)]"
                />
              </div>
              <div className="flex flex-col gap-2.5">
                <label className="text-white font-bold text-xs uppercase tracking-widest">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="bg-white/3 border border-white/10 p-4 rounded-xl color-white text-base outline-none transition-all focus:border-primary focus:bg-white/5 focus:shadow-[0_0_20px_var(--primary-glow)]"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2.5">
              <label className="text-white font-bold text-xs uppercase tracking-widest">
                Subject
              </label>
              <select className="bg-white/3 border border-white/10 p-4 rounded-xl color-white text-base outline-none transition-all focus:border-primary focus:bg-white/5 focus:shadow-[0_0_20px_var(--primary-glow)] appearance-none">
                <option>General Inquiry</option>
                <option>Technical Support</option>
                <option>Feature Request</option>
                <option>Other</option>
              </select>
            </div>
            <div className="flex flex-col gap-2.5">
              <label className="text-white font-bold text-xs uppercase tracking-widest">
                Message
              </label>
              <textarea
                placeholder="How can we help you today?"
                className="bg-white/3 border border-white/10 p-4 rounded-xl color-white text-base outline-none transition-all focus:border-primary focus:bg-white/5 focus:shadow-[0_0_20px_var(--primary-glow)] min-h-[160px]"
              ></textarea>
            </div>
            <button type="button" className="glow-btn w-full py-5 text-lg">
              <span>Send Message</span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="22" y1="2" x2="11" y2="13" />
                <polyline points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </button>
          </form>
        </div>

        <div
          className="flex flex-col gap-6 animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          <div className="glass glass-hover p-8 flex gap-6 items-start">
            <div className="text-3xl w-14 h-14 flex items-center justify-center bg-white/5 rounded-xl shrink-0">
              📧
            </div>
            <div>
              <h3 className="text-white text-xl font-outfit font-bold mb-2">
                Support Email
              </h3>
              <p className="text-text-dim text-sm mb-2">
                For technical help and issues.
              </p>
              <a
                href="mailto:support@signpng.com"
                className="text-primary no-underline font-bold transition-all hover:text-secondary"
              >
                support@signpng.com
              </a>
            </div>
          </div>
          <div className="glass glass-hover p-8 flex gap-6 items-start">
            <div className="text-3xl w-14 h-14 flex items-center justify-center bg-white/5 rounded-xl shrink-0">
              💬
            </div>
            <div>
              <h3 className="text-white text-xl font-outfit font-bold mb-2">
                General Feedback
              </h3>
              <p className="text-text-dim text-sm mb-2">
                Help us improve SignPNG.
              </p>
              <a
                href="mailto:feedback@signpng.com"
                className="text-primary no-underline font-bold transition-all hover:text-secondary"
              >
                feedback@signpng.com
              </a>
            </div>
          </div>
          <div className="glass glass-hover p-8 flex gap-6 items-start">
            <div className="text-3xl w-14 h-14 flex items-center justify-center bg-white/5 rounded-xl shrink-0">
              🌍
            </div>
            <div>
              <h3 className="text-white text-xl font-outfit font-bold mb-2">
                Global Community
              </h3>
              <p className="text-text-dim text-sm mb-2">
                Join our secure signing revolution.
              </p>
              <span className="text-text-dim text-xs italic">
                Built for everyone, everywhere.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
