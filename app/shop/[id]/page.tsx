"use client"

import { use, useState } from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ShoppingBag, Star, ShieldCheck, Truck, RefreshCw, Minus, Plus } from 'lucide-react'
import { Container } from '@/components/ui/container'
import { Button } from '@/components/ui/button'
import { products } from '@/lib/products'
import { useCart } from '@/lib/cart-context'
import { useToast } from '@/lib/toast-context'
import { RelatedProducts } from '@/components/products/related-products'
import { ProductReviews } from '@/components/products/product-reviews'
import { Breadcrumbs } from '@/components/ui/breadcrumbs'

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params)
    const product = products.find(p => p.id === id)
    const { addToCart } = useCart()
    const { showToast } = useToast()
    const [quantity, setQuantity] = useState(1)

    if (!product) {
        return (
            <div className="flex flex-col min-h-screen items-center justify-center">
                <h1 className="text-2xl font-bold">Product Not Found</h1>
                <Button className="mt-4" onClick={() => window.history.back()}>Go Back</Button>
            </div>
        )
    }

    const handleAddToCart = () => {
        addToCart(product, quantity)
        showToast(`${quantity}x ${product.name} added to cart!`, 'success')
    }

    return (
        <div className="flex flex-col min-h-screen bg-white">
            <main className="flex-grow pt-8 lg:pt-16 pb-24">
                <Container>
                    <Breadcrumbs
                        items={[
                            { label: 'Shop', href: '/shop' },
                            { label: product.category, href: `/shop?category=${product.category}` },
                            { label: product.name }
                        ]}
                    />
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-32">
                        {/* Image Section */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="aspect-[4/5] bg-[#f8f8f8] flex items-center justify-center overflow-hidden relative"
                        >
                            <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                className="object-contain p-20"
                                priority
                            />

                            <div className="absolute top-8 left-8">
                                <span className="text-[10px] font-extrabold text-industrial-blue/20 uppercase tracking-[0.3em] vertical-text">
                                    {product.brand}
                                </span>
                            </div>
                        </motion.div>

                        {/* Product Info Section */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex flex-col justify-start"
                        >
                            <div className="pt-8">
                                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 block">
                                    {product.category}
                                </span>
                                <h1 className="text-4xl lg:text-5xl font-black text-industrial-blue uppercase leading-tight mb-6">
                                    {product.name}
                                </h1>
                                <div className="text-2xl font-bold text-slate-900 mb-10">
                                    ₹{product.price.toLocaleString('en-IN')}
                                </div>

                                <p className="text-slate-500 text-sm leading-relaxed mb-12 max-w-lg">
                                    {product.description}
                                </p>

                                {/* Quantity Selector exactly like Image 1 */}
                                <div className="mb-12">
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-4 block">Quantity</span>
                                    <div className="flex items-center bg-[#f8f8f8] w-fit px-4 py-2 rounded-full border border-slate-100">
                                        <button
                                            onClick={() => setQuantity(q => Math.max(1, q - 1))}
                                            className="p-1 hover:text-industrial-blue transition-colors"
                                        >
                                            <Minus className="h-3 w-3" />
                                        </button>
                                        <span className="px-6 text-sm font-bold min-w-[50px] text-center">{quantity}</span>
                                        <button
                                            onClick={() => setQuantity(q => q + 1)}
                                            className="p-1 hover:text-industrial-blue transition-colors"
                                        >
                                            <Plus className="h-3 w-3" />
                                        </button>
                                    </div>
                                </div>

                                <Button
                                    size="lg"
                                    className="w-full h-16 bg-industrial-blue hover:bg-industrial-blue/90 text-white font-bold rounded-full text-sm uppercase tracking-widest mb-16"
                                    onClick={handleAddToCart}
                                >
                                    Add to Cart
                                </Button>

                                {/* Bottom Info Columns exactly like Image 1 */}
                                <div className="grid grid-cols-2 gap-12 pt-12 border-t border-slate-100">
                                    <div>
                                        <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-4">Materials</h4>
                                        <p className="text-xs text-slate-500 leading-relaxed font-medium">
                                            Industrial grade copper, High-tensile PVC, Flame-retardant coating.
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-4">Care</h4>
                                        <p className="text-xs text-slate-500 leading-relaxed font-medium">
                                            Store in cool dry place, Avoid direct sunlight exposure, Installation by certified electricians.
                                        </p>
                                    </div>
                                </div>
                                <ProductReviews />
                            </div>
                        </motion.div>
                    </div>
                </Container>
            </main>
            <RelatedProducts currentProduct={product} allProducts={products} />
        </div>
    )
}
