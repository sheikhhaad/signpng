"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

const FEATURES = [
  {
    icon: "⚡",
    title: "Instant Conversion",
    desc: "Optimized algorithms process your image in under a second, entirely inside your browser tab.",
    accent: "from-amber-400 to-yellow-300",
  },
  {
    icon: "🛡️",
    title: "Zero-Upload Privacy",
    desc: "Your signature never touches a server. Everything runs locally using native Web APIs.",
    accent: "from-emerald-400 to-teal-300",
  },
  {
    icon: "✦",
    title: "Surgical Clarity",
    desc: "Advanced thresholding eliminates every trace of background noise for a pristine result.",
    accent: "from-rose-400 to-pink-300",
  },
];

const FAQS = [
  {
    q: "Is it secure for business use?",
    a: "Absolutely. Since no data is ever transmitted to our servers, SignPNG is safer than almost any other online tool for sensitive document work.",
  },
  {
    q: "What resolution will I get?",
    a: "You receive the exact same resolution as your original photo — just with the background surgically removed, pixel-perfect.",
  },
  {
    q: "Does it work on mobile?",
    a: "Yes. SignPNG is fully responsive and works seamlessly on iPhones, Android phones, and tablets of all sizes.",
  },
];

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

function FadeIn({ children, delay = 0, className = "" }) {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

function SignatureAnimation() {
  const [step, setStep] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setStep((s) => (s + 1) % 4), 1400);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="relative w-full aspect-[4/3] flex items-center justify-center select-none">
      {/* Grain overlay */}
      <div
        className="absolute inset-0 rounded-3xl opacity-30 pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E\")",
        }}
      />
      {/* Glow blob */}
      <div className="absolute w-48 h-48 rounded-full bg-amber-400/20 blur-3xl top-1/4 left-1/4 animate-pulse" />
      {/* Card */}
      <div className="relative z-10 bg-neutral-900 border border-neutral-700/60 rounded-2xl p-8 w-4/5 shadow-2xl">
        <div className="flex gap-2 mb-6">
          {["bg-rose-500", "bg-amber-400", "bg-emerald-500"].map((c) => (
            <span key={c} className={`w-3 h-3 rounded-full ${c} opacity-70`} />
          ))}
        </div>
        <div className="h-20 flex items-center justify-center mb-6">
          <svg
            viewBox="0 0 260 80"
            className="w-full"
            style={{ filter: "drop-shadow(0 0 12px rgba(251,191,36,0.5))" }}
          >
            <path
              d="M20,60 C40,20 60,70 80,40 C100,10 110,65 130,45 C150,25 160,60 180,35 C200,10 215,55 240,30"
              fill="none"
              stroke="#f59e0b"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeDasharray="400"
              strokeDashoffset={step < 2 ? 400 - step * 200 : 0}
              style={{ transition: "stroke-dashoffset 1.2s ease" }}
            />
          </svg>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-xs text-neutral-500 font-mono tracking-widest uppercase">
            Processing
          </span>
          <div className="flex gap-1">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="w-1.5 h-1.5 rounded-full bg-amber-400"
                style={{
                  opacity: step % 3 === i ? 1 : 0.25,
                  transition: "opacity 0.3s ease",
                }}
              />
            ))}
          </div>
          <span
            className="text-xs font-semibold tracking-widest uppercase"
            style={{
              color: step >= 2 ? "#34d399" : "#71717a",
              transition: "color 0.5s ease",
            }}
          >
            {step >= 2 ? "✓ Done" : "..."}
          </span>
        </div>
      </div>
      {/* PNG badge */}
      <div
        className="absolute bottom-6 right-6 bg-amber-400 text-neutral-900 text-xs font-black tracking-widest uppercase px-3 py-1.5 rounded-full shadow-lg"
        style={{
          opacity: step >= 2 ? 1 : 0,
          transform: step >= 2 ? "scale(1)" : "scale(0.7)",
          transition: "all 0.4s cubic-bezier(0.34,1.56,0.64,1)",
        }}
      >
        .PNG ready
      </div>
    </div>
  );
}

export default function Home() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="min-h-screen text-white bg-bg-dark">
      {/* Grain bg */}
      <div className="grain-bg" />

      {/* Ambient blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-amber-500/8 blur-[120px]" />
        <div className="absolute top-1/2 -right-24 w-80 h-80 rounded-full bg-amber-600/6 blur-[100px]" />
        <div className="absolute bottom-0 left-1/3 w-72 h-72 rounded-full bg-amber-400/5 blur-[80px]" />
      </div>

      {/* HERO */}
      <section className="relative z-10 grid-line-bg">
        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-20 pb-16 grid md:grid-cols-2 gap-16 items-center min-h-[88vh]">
          {/* Left */}
          <div>
            <div
              className="inline-flex items-center gap-2 border border-amber-400/30 bg-amber-400/8 text-amber-400 mono-font text-xs tracking-widest uppercase px-4 py-2 rounded-full mb-10"
              style={{ opacity: 1 }}
            >
              <span className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse" />
              100% client-side · zero uploads
            </div>

            <h1 className="display-font text-[clamp(4rem,8vw,7rem)] leading-none tracking-wide mb-8">
              <span className="block text-white">Professional</span>
              <span className="block shimmer-text">Digital</span>
              <span className="block text-white">Signatures.</span>
            </h1>

            <p className="text-neutral-400 text-lg leading-relaxed mb-12 max-w-md">
              Convert handwritten signatures into high-quality transparent PNGs.
              No uploads, no servers — your data never leaves your device.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/signature-to-png"
                className="glow-btn group bg-amber-400 text-neutral-900 font-semibold px-8 py-4 rounded-full text-base hover:bg-amber-300 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Create My Signature
                <span className="group-hover:translate-x-1 transition-transform duration-200">
                  →
                </span>
              </Link>
              <Link
                href="/blog"
                className="border border-neutral-700 text-neutral-300 hover:border-neutral-500 hover:text-white font-medium px-8 py-4 rounded-full text-base transition-all duration-200 flex items-center justify-center gap-2"
              >
                Read the guides
              </Link>
            </div>

            <p className="mono-font text-xs text-neutral-600 mt-6 tracking-wider">
              TRUSTED BY PROFESSIONALS WORLDWIDE · FREE FOREVER
            </p>
          </div>

          {/* Right */}
          <div className="float hidden md:block">
            <SignatureAnimation />
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <FadeIn>
        <div className="relative z-10 border-y border-white/5 bg-neutral-900/40 backdrop-blur-sm">
          <div className="max-w-5xl mx-auto px-6 md:px-12 py-12 grid grid-cols-3 gap-0">
            {[
              { val: "0", label: "Server uploads", sub: "Ever." },
              { val: "<1s", label: "Processing time", sub: "Always." },
              { val: "Free", label: "Forever", sub: "No catch." },
            ].map((s, i) => (
              <div
                key={i}
                className={`text-center px-6 ${i > 0 ? "stat-border" : ""}`}
              >
                <div className="display-font text-5xl md:text-6xl text-amber-400 mb-1">
                  {s.val}
                </div>
                <div className="text-neutral-300 text-sm font-medium">
                  {s.label}
                </div>
                <div className="mono-font text-neutral-600 text-xs tracking-widest mt-0.5">
                  {s.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>

      {/* FEATURES */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-32">
        <FadeIn>
          <div className="mb-20">
            <p className="mono-font text-amber-400 text-xs tracking-[0.25em] uppercase mb-4">
              Why SignPNG
            </p>
            <h2 className="display-font text-[clamp(3rem,6vw,5rem)] text-white leading-none">
              Built for
              <br />
              Professionals.
            </h2>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6">
          {FEATURES.map((f, i) => (
            <FadeIn key={f.title} delay={i * 100}>
              <div className="feature-card-hover h-full bg-neutral-900 border border-neutral-800 rounded-2xl p-8 flex flex-col">
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${f.accent} flex items-center justify-center text-2xl mb-8 flex-shrink-0`}
                  style={{
                    filter: "drop-shadow(0 4px 16px rgba(245,158,11,0.25))",
                  }}
                >
                  {f.icon}
                </div>
                <h3 className="text-white font-semibold text-xl mb-4">
                  {f.title}
                </h3>
                <p className="text-neutral-500 leading-relaxed text-sm flex-1">
                  {f.desc}
                </p>
                <div className="mt-8 w-8 h-px bg-amber-400/40" />
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="relative z-10 border-y border-white/5 bg-neutral-950/60 py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <FadeIn>
            <div className="mb-20 text-center">
              <p className="mono-font text-amber-400 text-xs tracking-[0.25em] uppercase mb-4">
                Simple process
              </p>
              <h2 className="display-font text-[clamp(2.5rem,5vw,4.5rem)] text-white">
                Three steps. Done.
              </h2>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-4 md:gap-0 relative">
            {/* Connector line */}
            <div className="hidden md:block absolute top-10 left-1/6 right-1/6 h-px bg-gradient-to-r from-transparent via-amber-400/30 to-transparent" />

            {[
              {
                num: "01",
                title: "Sign on paper",
                desc: "Use a black pen on bright white, unlined paper. Slightly larger than usual works best.",
              },
              {
                num: "02",
                title: "Photograph it",
                desc: "Take a crisp photo in good natural light. Keep the camera parallel to the paper.",
              },
              {
                num: "03",
                title: "Get your PNG",
                desc: "Upload to SignPNG. Adjust the sensitivity slider. Download your transparent signature.",
              },
            ].map((step, i) => (
              <FadeIn key={step.num} delay={i * 120}>
                <div className="relative flex flex-col items-center text-center px-8">
                  <div className="w-20 h-20 rounded-2xl border border-amber-400/30 bg-amber-400/8 flex items-center justify-center mb-6">
                    <span className="display-font text-amber-400 text-3xl">
                      {step.num}
                    </span>
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-3">
                    {step.title}
                  </h3>
                  <p className="text-neutral-500 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={200}>
            <div className="text-center mt-16">
              <Link
                href="/signature-to-png"
                className="inline-flex items-center gap-2 bg-amber-400 text-neutral-900 font-semibold px-10 py-4 rounded-full hover:bg-amber-300 transition-all duration-200"
              >
                Try it now — it's free
                <span>→</span>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 py-32">
        <FadeIn>
          <div className="mb-16">
            <p className="mono-font text-amber-400 text-xs tracking-[0.25em] uppercase mb-4">
              Questions
            </p>
            <h2 className="display-font text-[clamp(2.5rem,5vw,4.5rem)] text-white leading-none">
              Common
              <br />
              Questions.
            </h2>
          </div>
        </FadeIn>

        <div className="space-y-2">
          {FAQS.map((faq, i) => (
            <FadeIn key={i} delay={i * 80}>
              <div
                className="faq-item border border-neutral-800 rounded-xl overflow-hidden cursor-pointer"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <div className="flex items-center justify-between px-6 py-5">
                  <h4 className="text-white font-medium">{faq.q}</h4>
                  <span
                    className="text-amber-400 text-xl flex-shrink-0 ml-4 transition-transform duration-300"
                    style={{
                      transform:
                        openFaq === i ? "rotate(45deg)" : "rotate(0deg)",
                    }}
                  >
                    +
                  </span>
                </div>
                {openFaq === i && (
                  <div className="px-6 pb-5 text-neutral-500 text-sm leading-relaxed border-t border-neutral-800 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* CTA BANNER */}
      <FadeIn>
        <section
          className="relative z-10 mx-4 md:mx-12 mb-20 rounded-3xl overflow-hidden border border-amber-400/20"
          style={{
            background:
              "linear-gradient(135deg, #0a0a0a 0%, #1a1200 50%, #0a0a0a 100%)",
          }}
        >
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "radial-gradient(ellipse at 60% 50%, rgba(245,158,11,0.4) 0%, transparent 70%)",
            }}
          />
          <div className="relative z-10 text-center py-20 px-6">
            <p className="mono-font text-amber-400/70 text-xs tracking-[0.3em] uppercase mb-6">
              Ready?
            </p>
            <h2 className="display-font text-[clamp(3rem,7vw,6rem)] text-white leading-none mb-8">
              Your signature.
              <br />
              <span className="shimmer-text">Perfected.</span>
            </h2>
            <p className="text-neutral-500 text-base mb-10 max-w-md mx-auto">
              Join thousands of professionals who trust SignPNG for clean,
              transparent signature exports.
            </p>
            <Link
              href="/signature-to-png"
              className="inline-flex items-center gap-2 bg-amber-400 text-neutral-900 font-bold px-10 py-4 rounded-full text-base hover:bg-amber-300 transition-all duration-200"
            >
              Create My Signature — Free
              <span>→</span>
            </Link>
          </div>
        </section>
      </FadeIn>
    </div>
  );
}
