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

                {/* Badges */}
                <div className="absolute top-3 left-3 z-20 flex flex-col gap-2">
                    {product.stock < 20 && (
                        <span className="bg-red-500 text-white text-[8px] font-bold px-2 py-1 uppercase tracking-tight rounded-sm">
                            Low Stock
                        </span>
                    )}
                    {product.isNew && (
                        <span className="bg-green-500 text-white text-[8px] font-bold px-2 py-1 uppercase tracking-tight rounded-sm">
                            New
                        </span>
                    )}
                    {product.isBestseller && (
                        <span className="bg-amber-500 text-white text-[8px] font-bold px-2 py-1 uppercase tracking-tight rounded-sm">
                            Bestseller
                        </span>
                    )}
                </div>

                <div className="absolute top-3 right-3 z-20 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                    <button
                        onClick={handleWishlistToggle}
                        className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-all shadow-md active:scale-95"
                    >
                        <Heart
                            className={`h-4 w-4 transition-colors ${inWishlist ? 'fill-red-500 text-red-500' : 'text-slate-400'}`}
                        />
                    </button>
                    <button
                        onClick={handleAddToCart}
                        className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-all shadow-md active:scale-95"
                    >
                        <ShoppingBag className="h-4 w-4 text-slate-400 hover:text-industrial-blue" />
                    </button>
                </div>
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
