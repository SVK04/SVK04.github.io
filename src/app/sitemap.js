export const dynamic = 'force-static';

export default function sitemap() {
  const baseUrl = 'https://svk04.github.io';

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];
}
