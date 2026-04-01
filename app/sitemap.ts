import type { MetadataRoute } from 'next'

const BASE_URL = 'https://firesafe.ai'

export default function sitemap(): MetadataRoute.Sitemap {
  const tools = [
    'fds-cfd', 'smoke-control', 'egress', 'fire-detection',
    'suppression', 'code-consulting', 'hazmat-risk', 'storagepro', 'pe-tutor',
  ]

  const pages = ['about', 'mission', 'pricing']

  return [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    ...pages.map((page) => ({
      url: `${BASE_URL}/${page}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    ...tools.map((tool) => ({
      url: `${BASE_URL}/tools/${tool}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ]
}
