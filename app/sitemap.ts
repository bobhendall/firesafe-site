import type { MetadataRoute } from 'next'
import { posts } from '@/lib/blog'

const BASE_URL = 'https://firesafe.ai'

export default function sitemap(): MetadataRoute.Sitemap {
  const tools = [
    'fds-cfd', 'smoke-control', 'egress', 'fire-detection',
    'suppression', 'code-consulting', 'hazmat-risk', 'storagepro', 'pe-tutor',
  ]

  const pages = ['about', 'mission', 'pricing', 'contact', 'privacy', 'terms']

  return [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${BASE_URL}/tools`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
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
    ...['calculators', 'calculators/aset-rset', 'calculators/smoke-layer'].map((path) => ({
      url: `${BASE_URL}/${path}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    { url: `${BASE_URL}/blog`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    ...posts.map((post) => ({
      url: `${BASE_URL}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: 'yearly' as const,
      priority: 0.6,
    })),
  ]
}
