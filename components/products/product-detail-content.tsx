"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ShoppingBag, Plus, Minus, Heart, ShieldCheck, Zap, Package, ChevronRight } from 'lucide-react'
import { Container } from '@/components/ui/container'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { Product } from '@/lib/types'
import { useCart } from '@/lib/cart-context'
import { useToast } from '@/lib/toast-context'
import { useWishlist } from '@/lib/wishlist-context'
import { cn } from '@/lib/utils'
import { ProductCard } from '@/components/products/product-card'

interface ProductDetailContentProps {
    product: Product
    relatedProducts: Product[]
}

export default function ProductDetailContent({ product, relatedProducts }: ProductDetailContentProps) {
    const [quantity, setQuantity] = useState(1)
    const { addToCart } = useCart()
    const { showToast } = useToast()
    const { addToWishlist, isInWishlist, removeFromWishlist } = useWishlist()
    const inWishlist = isInWishlist(product.id)

    const handleAddToCart = () => {
        addToCart(product, quantity)
        showToast('Added to cart!', 'success')
    }

    const handleWishlistToggle = () => {
        if (inWishlist) {
            removeFromWishlist(product.id)
            showToast('Removed from wishlist', 'info')
        } else {
            addToWishlist(product)
            showToast('Added to wishlist!', 'success')
        }
    }

    const specifications = typeof product.specifications === 'string'
        ? JSON.parse(product.specifications)
        : product.specifications

    return (
        <main className="flex-grow pb-32 md:py-24 bg-[#fafafa] relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

            <Container className="relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
                    {/* Left: Image Section */}
                    <div className="lg:col-span-7">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="relative aspect-square bg-white rounded-[3rem] overflow-hidden modern-shadow border border-slate-100 group"
                        >
                            <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                className="object-contain p-12 md:p-20 transition-transform duration-700 group-hover:scale-110"
                                priority
                                sizes="(max-width: 1024px) 100vw, 60vw"
                            />
                            <div className="absolute top-8 right-8 z-20">
                                <button
                                    onClick={handleWishlistToggle}
                                    className="p-4 bg-white/80 backdrop-blur-md modern-shadow rounded-full hover:bg-white transition-all active:scale-90"
                                >
                                    <Heart className={cn("h-6 w-6 transition-colors", inWishlist ? "fill-red-500 text-red-500" : "text-slate-400")} />
                                </button>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right: Info Section */}
                    <div className="lg:col-span-5 flex flex-col animate-flowy-up">
                        <div className="mb-12">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="px-4 py-1.5 bg-accent-blue-soft text-accent-blue text-[10px] font-black uppercase tracking-[0.2em] rounded-full border border-accent-blue/10">
                                    {product.brand}
                                </span>
                                <span className="text-slate-300"><ChevronRight className="h-4 w-4" /></span>
                                <span className="px-4 py-1.5 bg-slate-100 text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] rounded-full">
                                    {product.category}
                                </span>
                            </div>

                            <h1 className="text-5xl md:text-7xl font-black text-industrial-blue uppercase tracking-tighter leading-[0.8] mb-8">
                                {product.name.split(' ').map((word, i) => (
                                    <span key={i} className={i === 0 ? "block" : "block text-transparent"} style={i === 0 ? {} : { WebkitTextStroke: '1px #1b365d' }}>{word} </span>
                                ))}
                            </h1>

                            <div className="flex items-center gap-6 p-6 bg-white rounded-3xl border border-slate-100 modern-shadow w-fit">
                                <div className="flex flex-col">
                                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">MSRP + GST</span>
                                    <span className="text-4xl font-black text-industrial-blue tracking-tighter">₹{product.price.toLocaleString('en-IN')}</span>
                                </div>
                                <div className="h-10 w-px bg-slate-100" />
                                <div className="flex flex-col">
                                    <span className="text-[10px] font-black text-green-500 uppercase tracking-widest animate-pulse">● Available</span>
                                    <span className="text-[9px] font-bold text-slate-400 tracking-widest">In Stock</span>
                                </div>
                            </div>
                        </div>

                        <div className="prose prose-slate prose-sm max-w-none mb-12">
                            <p className="text-slate-500 leading-relaxed text-lg font-medium border-l-4 border-accent-blue pl-8">
                                {product.description}
                            </p>
                        </div>

                        {/* Specs Grid */}
                        <div className="grid grid-cols-2 gap-4 mb-12">
                            {Object.entries(specifications).map(([key, value]) => (
                                <div key={key} className="p-5 bg-white rounded-3xl border border-slate-100 group hover:border-accent-blue/20 transition-all cursor-default">
                                    <span className="block text-[9px] font-black text-slate-300 uppercase tracking-widest mb-1 group-hover:text-accent-blue transition-colors">{key}</span>
                                    <span className="text-sm font-black text-industrial-blue">{value as string}</span>
                                </div>
                            ))}
                        </div>

                        {/* Actions (Desktop) */}
                        <div className="hidden md:flex items-center gap-6 mt-auto bg-industrial-blue p-3 rounded-[2rem] modern-shadow">
                            <div className="flex items-center bg-white/10 rounded-full p-1">
                                <button
                                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                    className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-white/20 transition-all text-white"
                                >
                                    <Minus className="h-4 w-4" />
                                </button>
                                <span className="w-12 text-center font-black text-lg text-white">{quantity}</span>
                                <button
                                    onClick={() => setQuantity(quantity + 1)}
                                    className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-white/20 transition-all text-white"
                                >
                                    <Plus className="h-4 w-4" />
                                </button>
                            </div>
                            <Button
                                onClick={handleAddToCart}
                                size="lg"
                                className="flex-grow h-14 rounded-full bg-safety-yellow text-void-black hover:bg-white text-[10px] font-black uppercase tracking-widest transition-all"
                            >
                                Add To Secure Cart
                            </Button>
                        </div>

                        {/* Trust Badges */}
                        <div className="flex justify-between mt-12 py-10 border-y border-slate-100">
                            {[
                                { icon: ShieldCheck, label: "Genuine", color: "text-accent-blue" },
                                { icon: Zap, label: "Express", color: "text-safety-yellow" },
                                { icon: Package, label: "Secure", color: "text-industrial-blue" }
                            ].map((badge, i) => (
                                <div key={i} className="flex flex-col items-center gap-3">
                                    <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center">
                                        <badge.icon className={cn("h-6 w-6", badge.color)} />
                                    </div>
                                    <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">{badge.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Related Products */}
                {relatedProducts.length > 0 && (
                    <div className="mt-32">
                        <div className="flex items-center gap-6 mb-12">
                            <h2 className="text-4xl font-black text-industrial-blue uppercase tracking-tighter">Similar <span className="text-transparent" style={{ WebkitTextStroke: '1.5px #1b365d' }}>Items</span></h2>
                            <div className="h-px flex-grow bg-slate-100" />
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {relatedProducts.map((relProduct) => (
                                <ProductCard key={relProduct.id} product={relProduct} />
                            ))}
                        </div>
                    </div>
                )}
            </Container>

            {/* Mobile Sticky CTA */}
            <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 p-6 animate-flowy-up mb-20">
                <div className="glass-dark modern-shadow rounded-[2.5rem] p-4 flex items-center justify-between gap-4 border border-white/10 backdrop-blur-2xl">
                    <div className="flex flex-col pl-4">
                        <span className="text-[9px] font-black text-white/40 uppercase tracking-widest mb-1">Total Due</span>
                        <span className="text-2xl font-black text-white tracking-tighter">₹{product.price.toLocaleString('en-IN')}</span>
                    </div>
                    <Button
                        onClick={handleAddToCart}
                        className="h-16 px-10 rounded-full bg-safety-yellow text-void-black font-black uppercase tracking-widest text-[10px] active:scale-95 transition-all shadow-2xl"
                    >
                        Buy Now
                    </Button>
                </div>
            </div>

            {/* Background Glows */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-blue/5 blur-[150px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-safety-yellow/5 blur-[150px] rounded-full pointer-events-none" />
        </main>
    )
}
