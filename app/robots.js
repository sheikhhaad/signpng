import { MetadataRoute } from 'next'
export default function robots() {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://signpng.vercel.app/sitemap.xml',
  }
}