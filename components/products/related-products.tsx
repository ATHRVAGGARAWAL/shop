"use client"

import { motion } from 'framer-motion'
// import { Product } from '@/lib/products' // Remove this import
import { Product } from '@/lib/types'
import { ProductCard } from '@/components/products/product-card'
import { Container } from '@/components/ui/container'

interface RelatedProductsProps {
    relatedProducts: Product[]
}

export function RelatedProducts({ relatedProducts }: RelatedProductsProps) {
    if (!relatedProducts || relatedProducts.length === 0) return null

    return (
        <section className="py-16 bg-slate-50/30">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-3xl font-black text-industrial-blue uppercase tracking-tight mb-2">
                        You Might Also Like
                    </h2>
                    <p className="text-slate-500 text-sm">
                        Explore similar products from our collection
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {relatedProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </Container>
        </section>
    )
}
