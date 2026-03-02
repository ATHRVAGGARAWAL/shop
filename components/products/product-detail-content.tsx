"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ShoppingBag, Plus, Minus, Heart, ShieldCheck, Zap, Package, ChevronRight, Star, Truck, Shield, Play } from 'lucide-react'
import { Container } from '@/components/ui/container'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { Product } from '@/lib/types'
import { useCart } from '@/lib/cart-context'
import { useToast } from '@/lib/toast-context'
import { useWishlist } from '@/lib/wishlist-context'
import { cn } from '@/lib/utils'
import { ProductCard } from '@/components/products/product-card'
import Link from 'next/link'

interface ProductDetailContentProps {
    product: Product
    relatedProducts: Product[]
}

export default function ProductDetailContent({ product, relatedProducts }: ProductDetailContentProps) {
    const [quantity, setQuantity] = useState(1)
    const [activeImage, setActiveImage] = useState(0)
    const { addToCart } = useCart()
    const { showToast } = useToast()
    const { addToWishlist, isInWishlist } = useWishlist()
    const inWishlist = isInWishlist(product.id)

    const handleAddToCart = () => {
        addToCart(product, quantity)
        showToast('Added to cart!', 'success')
    }

    const specifications = typeof product.specifications === 'string'
        ? JSON.parse(product.specifications)
        : product.specifications

    // Mock thumbnails for demonstration as per screenshot
    const thumbnails = [product.image, product.image, product.image, 'video']

    return (
        <main className="flex-grow pb-24 pt-8 bg-white">
            <Container>
                {/* Breadcrumbs */}
                <div className="flex items-center gap-2 text-sm text-slate-400 mb-8">
                    <Link href="/" className="hover:text-slate-600">Home</Link>
                    <ChevronRight className="h-3 w-3" />
                    <Link href="/shop" className="hover:text-slate-600">Smart Lighting</Link>
                    <ChevronRight className="h-3 w-3" />
                    <span className="text-slate-900 font-medium">Bulbs</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
                    {/* Left: Image Gallery */}
                    <div className="space-y-6">
                        <div className="relative aspect-square bg-[#f5f5f5] rounded-3xl overflow-hidden border border-slate-100">
                            <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                className="object-contain p-12"
                                priority
                            />
                        </div>
                        <div className="grid grid-cols-4 gap-4">
                            {thumbnails.map((thumb, i) => (
                                <button
                                    key={i}
                                    onClick={() => setActiveImage(i)}
                                    className={cn(
                                        "relative aspect-square rounded-xl overflow-hidden border-2 transition-all p-2 bg-slate-50",
                                        activeImage === i ? "border-blue-600 bg-white" : "border-transparent hover:border-slate-200"
                                    )}
                                >
                                    {thumb === 'video' ? (
                                        <div className="w-full h-full flex items-center justify-center bg-slate-100 rounded-lg text-slate-400">
                                            <Play className="h-6 w-6 fill-current" />
                                        </div>
                                    ) : (
                                        <Image src={thumb} alt="Thumbnail" fill className="object-contain p-1" />
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right: Product Info */}
                    <div className="flex flex-col">
                        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                            {product.name}
                        </h1>

                        <div className="flex items-center gap-4 mb-8">
                            <div className="flex items-center gap-0.5">
                                {[1, 2, 3, 4, 5].map((s) => (
                                    <Star key={s} className="h-5 w-5 fill-orange-400 text-orange-400" />
                                ))}
                            </div>
                            <span className="text-sm font-semibold text-slate-400">4.8 (1,240 reviews)</span>
                        </div>

                        <div className="flex items-end gap-4 mb-8">
                            <span className="text-5xl font-bold text-slate-900">₹{product.price.toLocaleString('en-IN')}</span>
                            <span className="text-xl text-slate-300 line-through mb-1">₹{(product.price * 1.15).toLocaleString('en-IN')}</span>
                            <span className="bg-green-100 text-green-600 text-[10px] font-bold px-3 py-1.5 rounded-md uppercase tracking-wider mb-1">
                                SAVE 15%
                            </span>
                        </div>

                        <p className="text-slate-500 text-lg leading-relaxed mb-10">
                            Transform your home lighting with millions of colors and shades of white light. Control instantly via Bluetooth in one room or connect to a Hue Bridge to unlock the full suite of smart lighting features.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-center gap-6">
                                <span className="font-bold text-slate-900">Quantity</span>
                                <div className="flex items-center bg-slate-50 rounded-xl p-1 border border-slate-100">
                                    <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-10 h-10 flex items-center justify-center hover:bg-white rounded-lg transition-colors text-slate-400">
                                        <Minus className="h-4 w-4" />
                                    </button>
                                    <span className="w-12 text-center font-bold text-slate-900">{quantity}</span>
                                    <button onClick={() => setQuantity(quantity + 1)} className="w-10 h-10 flex items-center justify-center hover:bg-white rounded-lg transition-colors text-slate-400">
                                        <Plus className="h-4 w-4" />
                                    </button>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <Button
                                    onClick={handleAddToCart}
                                    className="flex-1 h-16 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-lg shadow-lg shadow-blue-600/20"
                                >
                                    <ShoppingCart className="mr-2 h-5 w-5" /> Add to Cart
                                </Button>
                                <Button
                                    className="flex-1 h-16 bg-slate-900 hover:bg-black text-white font-bold rounded-xl text-lg"
                                >
                                    Buy Now
                                </Button>
                            </div>

                            <div className="flex items-center gap-10 py-6">
                                <div className="flex items-center gap-3 text-blue-600 font-bold text-sm">
                                    <Truck className="h-5 w-5" /> Free Delivery
                                </div>
                                <div className="flex items-center gap-3 text-blue-600 font-bold text-sm">
                                    <Shield className="h-5 w-5" /> 2-Year Warranty
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Info Sections */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 border-t border-slate-100 pt-16">
                    <div className="lg:col-span-2 space-y-16">
                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-4">
                                <div className="w-1 h-8 bg-blue-600 rounded-full" />
                                Product Description
                            </h2>
                            <p className="text-slate-500 leading-relaxed">
                                Set the mood with 16 million colors and a variety of white light options, from warm to cool. The Philips Hue White and Color Ambiance smart bulb allows you to create the perfect ambiance for any occasion. Whether you're throwing a party, reading a book, or just relaxing, you can easily customize your lighting to suit your needs.
                                <br /><br />
                                This bulb is Bluetooth-compatible for instant control in a single room. For a full smart home experience, connect it to a Philips Hue Bridge (sold separately) to enjoy features like out-of-home control, routines, and timers.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-4">
                                <div className="w-1 h-8 bg-blue-600 rounded-full" />
                                Key Features
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {[
                                    { icon: <Zap className="h-5 w-5" />, title: "App Control", desc: "Manage your lights from anywhere with the Hue app." },
                                    { icon: <SlidersHorizontal className="h-5 w-5" />, title: "Voice Control", desc: "Works with Alexa, Google Assistant, and Apple HomeKit." },
                                    { icon: <Star className="h-5 w-5" />, title: "16 Million Colors", desc: "Unlimited possibilities for ambient atmosphere." },
                                    { icon: <Clock className="h-5 w-5" />, title: "Smart Scheduling", desc: "Set lights to turn on or off at specific times." }
                                ].map((feature, i) => (
                                    <div key={i} className="p-6 bg-slate-50 rounded-2xl flex items-start gap-4 hover:bg-blue-50 transition-colors cursor-default">
                                        <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-blue-600 border border-slate-100">
                                            {feature.icon}
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-slate-900 mb-1">{feature.title}</h3>
                                            <p className="text-sm text-slate-500 leading-snug">{feature.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    <div className="space-y-8">
                        <div className="p-8 bg-white border border-slate-100 rounded-2xl shadow-sm sticky top-24">
                            <h2 className="text-xl font-bold text-slate-900 mb-8">Technical Specifications</h2>
                            <div className="space-y-6">
                                {Object.entries(specifications).map(([key, value]) => (
                                    <div key={key} className="flex justify-between items-center py-4 border-b border-slate-50 last:border-0">
                                        <span className="text-slate-400 font-medium">{key}</span>
                                        <span className="text-slate-900 font-bold">{value as string}</span>
                                    </div>
                                ))}
                            </div>
                            <button className="w-full mt-8 py-4 text-blue-600 font-bold text-sm border-t border-slate-50 hover:text-blue-700 transition-colors flex items-center justify-center gap-2">
                                Download User Manual <ChevronRight className="h-4 w-4 rotate-90" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Related Products */}
                {relatedProducts.length > 0 && (
                    <div className="mt-32 pb-24">
                        <div className="flex items-center justify-between mb-12">
                            <h2 className="text-3xl font-bold text-slate-900">Related Products</h2>
                            <div className="flex gap-2">
                                <button className="p-3 rounded-full border border-slate-100 text-slate-400 hover:text-blue-600 hover:border-blue-600 transition-all">
                                    <ChevronRight className="h-5 w-5 rotate-180" />
                                </button>
                                <button className="p-3 rounded-full border border-slate-100 text-slate-400 hover:text-blue-600 hover:border-blue-600 transition-all">
                                    <ChevronRight className="h-5 w-5" />
                                </button>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {relatedProducts.map((relProduct) => (
                                <ProductCard key={relProduct.id} product={relProduct} />
                            ))}
                        </div>
                    </div>
                )}
            </Container>
        </main>
    )
}

import { SlidersHorizontal, Clock, ShoppingCart } from 'lucide-react'
