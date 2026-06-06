import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://drinkingdirtysoda.com'
  return [
    { url: base,                  lastModified: new Date(), changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${base}/menu`,        lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${base}/find`,        lastModified: new Date(), changeFrequency: 'daily',   priority: 0.9 },
    { url: `${base}/events`,      lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/story`,       lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/loyalty`,     lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/faq`,         lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${base}/contact`,     lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.4 },
  ]
}
