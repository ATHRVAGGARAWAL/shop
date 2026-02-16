"use client"

import { ProductCard } from "@/components/products/product-card"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Product } from "@/lib/types"

interface FeaturedProductsProps {
    products: Product[]
}

export function FeaturedProducts({ products }: FeaturedProductsProps) {
    // Show first 4 products as featured
    const featuredProducts = products.slice(0, 4)

    return (
        <Section className="bg-white">
            <Container>
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div>
                        <h2 className="text-3xl font-extrabold text-industrial-blue tracking-tight uppercase sm:text-4xl mb-3">
                            Featured Products
                        </h2>
                        <p className="text-slate-500 max-w-2xl font-medium">
                            Our most popular and reliable electrical solutions for immediate supply.
                        </p>
                    </div>
                    <Link href="/shop">
                        <Button variant="outline" className="group border-industrial-blue text-industrial-blue hover:bg-industrial-blue hover:text-white transition-all duration-300 font-bold px-6">
                            View All Products <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {featuredProducts.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <ProductCard product={product} />
                        </motion.div>
                    ))}
                </div>
            </Container>
        </Section>
    )
}
