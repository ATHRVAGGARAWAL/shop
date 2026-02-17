import { Metadata } from 'next'
import { db } from '@/lib/db'
import { products } from '@/lib/schema'
import { eq } from 'drizzle-orm'
import { ProductDetailContent } from '@/components/products/product-detail-content'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export async function generateStaticParams() {
    const allProducts = await db.select().from(products).all()
    return allProducts.map((product) => ({
        id: product.id,
    }))
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
    const { id } = await params
    const product = await db.select().from(products).where(eq(products.id, id)).get()

    if (!product) {
        return {
            title: 'Product Not Found',
        }
    }

    return {
        title: product.name,
        description: product.description,
        openGraph: {
            title: product.name,
            description: product.description,
            images: [
                {
                    url: product.image,
                    width: 800,
                    height: 800,
                    alt: product.name,
                }
            ],
            type: 'website',
        }
    }
}

export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const product = await db.select().from(products).where(eq(products.id, id)).get()

    if (!product) {
        return (
            <div className="flex flex-col min-h-screen items-center justify-center">
                <h1 className="text-2xl font-bold">Product Not Found</h1>
                <Link href="/shop">
                    <Button className="mt-4">Go Back</Button>
                </Link>
            </div>
        )
    }

    // Specifications are stored as a string in SQLite version, need to parse if component expects object
    // Check if ProductDetailContent expects spec as string or object.
    // Based on previous static file, it was Record<string, string>.
    const formattedProduct = {
        ...product,
        specifications: JSON.parse(product.specifications),
    }

    // Fetch related products (same category, exclude current)
    const relatedProducts = await db.select().from(products)
        .where(eq(products.category, product.category))
        .limit(5)
        .all()

    // Filter out current product locally since != is strictly supported by all drivers differently or simpler in js
    const filteredRelated = relatedProducts.filter(p => p.id !== product.id).slice(0, 4)

    return <ProductDetailContent product={formattedProduct} relatedProducts={filteredRelated} />
}
