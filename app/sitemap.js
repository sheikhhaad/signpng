export default function sitemap() {
  const blogPosts = [
    'create-professional-digital-signature',
    'why-transparent-signatures-matter',
    'digital-signature-security-guide'
  ];

  const blogRoutes = blogPosts.map(slug => ({
    url: `https://signpng.vercel.app/blog/${slug}`,
    lastModified: "2026-04-14",
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    {
      url: "https://signpng.vercel.app/",
      lastModified: "2026-05-06",
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: "https://signpng.vercel.app/signature-to-png",
      lastModified: "2026-05-06",
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://signpng.vercel.app/blog",
      lastModified: "2026-05-06",
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...blogRoutes,
    {
      url: "https://signpng.vercel.app/contact",
      lastModified: "2026-05-06",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://signpng.vercel.app/privacy",
      lastModified: "2026-05-06",
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}