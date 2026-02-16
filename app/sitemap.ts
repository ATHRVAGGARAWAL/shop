import { MetadataRoute } from 'next'
import { db } from '@/lib/db'
import { products } from '@/lib/schema'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://devkinandanandsons.com'
    const allProducts = await db.select().from(products).all()

    const productUrls = allProducts.map((product) => ({
        url: `${baseUrl}/shop/${product.id}`,
        lastModified: product.updatedAt || new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }))

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 1,
        },
        {
            url: `${baseUrl}/shop`,
            lastModified: new Date(),
            changeFrequency: 'daily' as const,
            priority: 0.9,
        },
        ...productUrls,
    ]
}
