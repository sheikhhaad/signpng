import Link from "next/link";

export default function Footer() {
  return (
    <>
      {/* FOOTER */}
      <footer className="relative z-10 border-t border-white/5 px-6 md:px-12 py-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
         <img  width="150" src="/logo.png" alt="" />
          </div>
          <div className="flex items-center gap-8">
            <Link href="/signature-to-png" className="mono-font text-xs text-neutral-600 hover:text-neutral-400 uppercase tracking-widest transition-colors">Tool</Link>
            <Link href="/blog" className="mono-font text-xs text-neutral-600 hover:text-neutral-400 uppercase tracking-widest transition-colors">Blog</Link>
            <Link href="/contact" className="mono-font text-xs text-neutral-600 hover:text-neutral-400 uppercase tracking-widest transition-colors">Contact</Link>
            <Link href="/privacy" className="mono-font text-xs text-neutral-600 hover:text-neutral-400 uppercase tracking-widest transition-colors">Privacy</Link>
          </div>
          <p className="mono-font text-xs text-neutral-700">© 2026 SignPNG. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}