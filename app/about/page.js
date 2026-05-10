export const metadata = {
  title: "About Us | The Mission Behind SignPNG",
  description:
    "Learn about the SignPNG team, our commitment to digital privacy, and why we built the world's most secure signature background removal tool.",
  keywords: [
    "about signpng",
    "digital signature experts",
    "privacy first tools",
    "signature security team",
  ],
};

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-5 py-10">
      <div className="text-center mb-16 animate-fade-in">
        <h1 className="font-outfit text-5xl md:text-6xl font-extrabold text-white mb-4">
          About <span className="text-gradient">SignPNG</span>
        </h1>
        <p className="text-xl text-text-dim">
          Security-first tools for the modern professional.
        </p>
      </div>

      <div
        className="glass p-10 md:p-14 flex flex-col gap-16 animate-fade-in"
        style={{ animationDelay: "0.2s" }}
      >
        <section>
          <h2 className="text-white text-3xl font-outfit font-bold mb-6">
            Our Mission
          </h2>
          <p className="text-text-dim text-lg leading-relaxed mb-5">
            SignPNG was born out of a simple observation: most "free" online
            tools are not actually free—you pay with your data. When it comes to
            something as sensitive as your handwritten signature, uploading it
            to a random server is a massive security risk.
          </p>
          <p className="text-text-dim text-lg leading-relaxed">
            Our mission is to provide professional-grade document tools that
            respect user privacy by design. By utilizing modern browser
            capabilities, we've built a system that processes your biometric
            data (your signature) entirely on your own device.
          </p>
        </section>

        <section>
          <h2 className="text-white text-3xl font-outfit font-bold mb-6">
            Who We Are
          </h2>
          <p className="text-text-dim text-lg leading-relaxed mb-5">
            We are a small team of software engineers and security enthusiasts
            dedicated to building "Local-First" web applications. With years of
            experience in web cryptography and image processing, we've optimized
            SignPNG to be fast, lightweight, and above all, secure.
          </p>
          <p className="text-text-dim text-lg leading-relaxed">
            Our team believes that the future of the web is decentralized and
            private. SignPNG is our contribution to a safer digital ecosystem
            where users retain 100% control over their digital assets.
          </p>
        </section>

        <section>
          <h2 className="text-white text-3xl font-outfit font-bold mb-8">
            Why Choose SignPNG?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/3 p-8 rounded-3xl border border-white/5">
              <h3 className="text-secondary text-xl font-bold mb-4">
                Privacy by Design
              </h3>
              <p className="text-text-dim text-base m-0">
                Zero server uploads. Your signature never leaves your computer.
              </p>
            </div>
            <div className="bg-white/3 p-8 rounded-3xl border border-white/5">
              <h3 className="text-secondary text-xl font-bold mb-4">
                Pro Quality
              </h3>
              <p className="text-text-dim text-base m-0">
                High-resolution PNG output suitable for legal documents and
                branding.
              </p>
            </div>
            <div className="bg-white/3 p-8 rounded-3xl border border-white/5">
              <h3 className="text-secondary text-xl font-bold mb-4">
                Completely Free
              </h3>
              <p className="text-text-dim text-base m-0">
                No hidden fees, no watermarks, and no registration required.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
