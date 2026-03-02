"use client"

import { ProductCard } from "@/components/products/product-card"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronRight } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Product } from "@/lib/types"

interface FeaturedProductsProps {
    products: Product[]
}

export function FeaturedProducts({ products }: FeaturedProductsProps) {
    const featuredProducts = products.slice(0, 4)

    return (
        <Section className="bg-white py-24">
            <Container>
                <div className="flex items-center justify-between mb-12">
                    <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                        Featured Products
                    </h2>
                    <Link
                        href="/shop"
                        className="text-sm font-bold text-[#0055eb] hover:underline flex items-center gap-2 transition-all"
                    >
                        Explore all <ChevronRight className="h-4 w-4" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
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
