import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

import { Bebas_Neue, DM_Sans, DM_Mono } from "next/font/google";
const siteConfig = {
  name: "SignPNG",
  url: "https://signpng.vercel.app",
  description:
    "The fastest, most secure way to convert your handwritten signatures to high-quality transparent PNGs. Processed 100% in your browser.",
  keywords: [
    "signature to png",
    "transparent signature",
    "handwritten signature to digital",
    "remove signature background",
    "online signature converter",
  ],
};

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const dmMono = DM_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata = {
  title: {
    default: "SignPNG | Convert Signature to Transparent PNG Online (Free)",
    template: `%s | SignPNG`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: "SignPNG Team" }],
  creator: "SignPNG",
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: "SignPNG | Convert Signature to Transparent PNG Online (Free)",
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SignPNG - Convert Signature to Transparent PNG",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SignPNG | Convert Signature to Transparent PNG Online (Free)",
    description: siteConfig.description,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "SignPNG",
    url: "https://signpng.vercel.app",
    description: siteConfig.description,
    applicationCategory: "MultimediaApplication",
    operatingSystem: "All",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };

  return (
    <html
      lang="en"
      className={`${bebas.variable} ${dmSans.variable} ${dmMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>

      <body>
        <Navbar />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
