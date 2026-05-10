import Link from "next/link";
import React from "react";

export default function Navbar() {
  const NAV_LINKS = [
    { label: "Tool", href: "/signature-to-png" },
    { label: "Blog", href: "/blog" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    
  ];

  return (
    <nav className="relative z-50 flex items-center justify-between px-6 md:px-12 py-6 border-b border-white/5">
      
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2.5">
        <img  width="100" src="/logo.png" alt="" />
      </Link>

      {/* Links */}
      <div className="hidden md:flex items-center gap-8">
        {NAV_LINKS.map((l) => (
          <Link
            key={l.label}
            href={l.href}
            className="text-sm text-neutral-400 hover:text-white transition-colors duration-200 tracking-wide uppercase font-mono"
          >
            {l.label}
          </Link>
        ))}
      </div>

      {/* CTA */}
      <Link
        href="/signature-to-png"
        className="glow-btn text-sm font-semibold px-5 py-2.5 rounded-full"
      >
        Start Now ↗
      </Link>
    </nav>
  );
}