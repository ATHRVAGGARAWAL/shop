"use client"

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Product } from '@/lib/types'
import { ShoppingBag, Heart, Star, ShoppingCart } from 'lucide-react'
import { useCart } from '@/lib/cart-context'
import { useWishlist } from '@/lib/wishlist-context'
import { useToast } from '@/lib/toast-context'

interface ProductCardProps {
    product: Product
}

function cn(...inputs: any[]) {
    return inputs.filter(Boolean).join(" ");
}

export function ProductCard({ product }: ProductCardProps) {
    const { addToCart } = useCart()
    const { addToWishlist, isInWishlist } = useWishlist()
    const { showToast } = useToast()
    const inWishlist = isInWishlist(product.id)

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="group bg-white rounded-3xl border border-slate-100 p-4 hover:shadow-xl hover:shadow-blue-600/5 transition-all duration-500 hover:-translate-y-1 flex flex-col h-full"
        >
            <div className="relative aspect-square mb-5 rounded-2xl overflow-hidden bg-slate-50 flex items-center justify-center p-6 transition-colors group-hover:bg-slate-100">
                {/* Brand Tag */}
                <div className="absolute top-3 left-3 z-20">
                    <div className="bg-white/90 backdrop-blur-md text-slate-900 text-[9px] font-black px-3 py-1.5 rounded-lg uppercase tracking-[0.1em] border border-slate-100 shadow-sm transition-transform group-hover:scale-105">
                        {product.brand}
                    </div>
                </div>

                {/* Wishlist Button */}
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        addToWishlist(product);
                        showToast('Updated wishlist', 'success');
                    }}
                    className="absolute top-3 right-3 z-20 p-2.5 bg-white/90 backdrop-blur-md rounded-xl shadow-sm hover:bg-white hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all duration-300 border border-slate-50"
                >
                    <Heart className={cn("h-4 w-4 transition-colors", inWishlist ? "fill-red-500 text-red-500" : "text-slate-400")} />
                </button>

                <Link href={`/shop/${product.id}`} className="block relative w-full h-full transform group-hover:scale-110 transition-transform duration-700 ease-out z-10">
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </Link>
            </div>

            <div className="flex flex-col flex-1 px-1">
                <div className="mb-3">
                    <div className="flex items-center gap-1 mb-2">
                        {[1, 2, 3, 4, 5].map((s) => (
                            <Star key={s} className="h-3 w-3 fill-amber-400 text-amber-400" />
                        ))}
                    </div>
                    <Link href={`/shop/${product.id}`}>
                        <h3 className="text-sm font-bold text-slate-800 line-clamp-2 leading-snug group-hover:text-[#0055eb] transition-colors duration-300">
                            {product.name}
                        </h3>
                    </Link>
                </div>

                <div className="mt-auto flex items-center justify-between">
                    <span className="text-xl font-black text-[#0055eb]">
                        ₹{(product.price).toLocaleString('en-IN')}
                    </span>

                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            addToCart(product, 1);
                            showToast('Added to cart', 'success');
                        }}
                        className="h-10 w-10 bg-slate-900 text-white rounded-xl flex items-center justify-center hover:bg-[#0055eb] active:scale-90 transition-all duration-300 shadow-lg shadow-black/5"
                    >
                        <ShoppingCart className="h-5 w-5" />
                    </button>
                </div>
            </div>
        </motion.div>
    )
}


