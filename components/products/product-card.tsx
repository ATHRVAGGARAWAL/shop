"use client"

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Product } from '@/lib/types'
import { ShoppingBag, Eye, Heart } from 'lucide-react'
import { useCart } from '@/lib/cart-context'
import { useWishlist } from '@/lib/wishlist-context'
import { useToast } from '@/lib/toast-context'
import { Button } from '@/components/ui/button'

interface ProductCardProps {
    product: Product
}

export function ProductCard({ product }: ProductCardProps) {
    const { addToCart } = useCart()
    const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist()
    const { showToast } = useToast()
    const inWishlist = isInWishlist(product.id)

    const handleWishlistToggle = (e: React.MouseEvent) => {
        e.preventDefault()
        if (inWishlist) {
            removeFromWishlist(product.id)
            showToast('Removed from wishlist', 'info')
        } else {
            addToWishlist(product)
            showToast('Added to wishlist!', 'success')
        }
    }

    const handleAddToCart = (e: React.MouseEvent) => {
        e.preventDefault()
        addToCart(product, 1)
        showToast('Added to cart!', 'success')
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="group"
        >
            <Link href={`/shop/${product.id}`} className="relative aspect-[4/5] bg-white modern-shadow rounded-[2rem] mb-6 overflow-hidden group/image block border border-slate-100/50">
                <div className="absolute inset-0 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 bg-void-black/20 backdrop-blur-[4px]">
                    <div className="rounded-full text-[10px] font-black uppercase tracking-widest px-8 py-4 shadow-2xl transition-all bg-white text-void-black hover:bg-safety-yellow hover:scale-110 active:scale-95 animate-flowy-up cursor-pointer">
                        View Item
                    </div>
                </div>


                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-8 md:p-12 transition-transform duration-700 group-hover/image:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />

                {/* Badges */}
                <div className="absolute top-6 left-6 z-20 flex flex-col gap-2">
                    {product.isNew && (
                        <span className="bg-accent-blue text-white text-[9px] font-black px-3 py-1 uppercase tracking-widest rounded-full shadow-lg animate-flowy-fade">
                            New
                        </span>
                    )}
                    {product.isBestseller && (
                        <span className="bg-safety-yellow text-void-black text-[9px] font-black px-3 py-1 uppercase tracking-widest rounded-full shadow-lg animate-flowy-fade">
                            Best
                        </span>
                    )}
                </div>

                <div className="absolute bottom-6 right-6 z-20 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <button
                        onClick={handleWishlistToggle}
                        className="p-3 bg-white/90 backdrop-blur-md rounded-full hover:bg-white transition-all shadow-xl active:scale-90"
                    >
                        <Heart
                            className={`h-5 w-5 transition-colors ${inWishlist ? 'fill-red-500 text-red-500' : 'text-slate-400'}`}
                        />
                    </button>
                    <button
                        onClick={handleAddToCart}
                        className="p-3 bg-white/90 backdrop-blur-md rounded-full hover:bg-white transition-all shadow-xl active:scale-90"
                    >
                        <ShoppingBag className="h-5 w-5 text-slate-400 hover:text-accent-blue" />
                    </button>
                </div>
            </Link>

            <div className="space-y-2 px-2">
                <div className="flex items-center gap-3">
                    <span className="text-[10px] font-black text-accent-blue uppercase tracking-widest">
                        {product.brand}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-slate-200" />
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                        {product.category}
                    </span>
                </div>

                <Link href={`/shop/${product.id}`} className="block">
                    <h3 className="text-base font-black text-industrial-blue uppercase tracking-tight leading-none group-hover:text-accent-blue transition-colors line-clamp-1">
                        {product.name}
                    </h3>
                </Link>

                <div className="flex items-center justify-between mt-4">
                    <div className="flex items-baseline gap-1">
                        <span className="text-lg font-black text-industrial-blue">₹{product.price.toLocaleString('en-IN')}</span>
                        <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">+GST</span>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}


