export const dynamic = 'force-static';

export default function sitemap() {
  const baseUrl = 'https://vaibhav-kaul.web.app';

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];
}
