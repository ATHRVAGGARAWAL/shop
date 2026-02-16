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
        <Section className="bg-slate-50/50 py-32 overflow-hidden relative">
            {/* Background Texture */}
            <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '80px 80px' }} />

            <Container className="relative z-10">
                <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8 text-center md:text-left">
                    <div className="max-w-xl mx-auto md:mx-0">
                        <div className="flex items-center gap-3 mb-6 justify-center md:justify-start">
                            <div className="w-12 h-1 bg-accent-blue rounded-full" />
                            <span className="text-accent-blue text-xs font-black uppercase tracking-[0.3em]">Trending Now</span>
                        </div>
                        <h2 className="text-5xl md:text-7xl font-black text-industrial-blue tracking-tighter uppercase leading-[0.9]">
                            Hot <span className="text-transparent" style={{ WebkitTextStroke: '2px #0f172a' }}>Picks.</span>
                        </h2>
                    </div>

                    <Button asChild variant="outline" className="rounded-full h-14 px-8 border-slate-200 hover:bg-industrial-blue hover:text-white transition-all text-[10px] font-black uppercase tracking-widest hidden md:flex">
                        <Link href="/shop" className="flex items-center gap-2">Explore All <ArrowRight className="h-3 w-3" /></Link>
                    </Button>
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

                <div className="mt-16 flex justify-center md:hidden">
                    <Button asChild variant="outline" className="rounded-full h-14 w-full border-slate-200 text-[10px] font-black uppercase tracking-widest bg-white">
                        <Link href="/shop">Explore All</Link>
                    </Button>
                </div>
            </Container>
        </Section>
    )
}
