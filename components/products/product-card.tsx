"use client"

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ShoppingBag, Eye } from 'lucide-react'
import { Product } from '@/lib/products'
import { useCart } from '@/lib/cart-context'
import { Button } from '@/components/ui/button'

export function ProductCard({ product }: { product: Product }) {
    const { addToCart } = useCart()

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="group"
        >
            <Link href={`/shop/${product.id}`} className="relative aspect-square bg-[#f1f1f1] mb-4 overflow-hidden group/image rounded-sm block">
                <div className="absolute inset-0 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-industrial-blue/10 backdrop-blur-[2px]">
                    <Button variant="secondary" size="sm" className="rounded-full text-[10px] font-bold uppercase tracking-widest px-6 shadow-xl active:scale-95 transition-transform bg-white text-industrial-blue hover:bg-slate-50 border-none">
                        View Details
                    </Button>
                </div>

                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-6 transition-transform duration-500 group-hover/image:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />

                {product.stock < 20 && (
                    <div className="absolute top-3 left-3 z-20">
                        <span className="bg-red-500 text-white text-[8px] font-bold px-2 py-1 uppercase tracking-tight rounded-sm">
                            Low Stock
                        </span>
                    </div>
                )}
            </Link>

            <div className="space-y-1">
                <div className="flex items-center gap-2">
                    <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">
                        {product.brand}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-slate-300" />
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                        {product.category}
                    </span>
                </div>

                <Link href={`/shop/${product.id}`} className="block">
                    <p className="text-sm font-bold text-industrial-blue uppercase tracking-tight leading-tight group-hover:text-amber-600 transition-colors line-clamp-2">
                        {product.name}
                    </p>
                </Link>

                <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-sm font-extrabold text-industrial-blue">₹{product.price.toLocaleString('en-IN')}</span>
                    <span className="text-[10px] text-slate-400 font-medium">Incl. GST</span>
                </div>
            </div>
        </motion.div>
    )
}
