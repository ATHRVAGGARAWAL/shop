"use client"

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Trash2, Heart, Plus, Minus, ShoppingBag, ChevronRight, Tag } from 'lucide-react'
import { Button } from '../ui/button'
import { useCart, CartItem } from '../../lib/cart-context'
import { useToast } from '../../lib/toast-context'
import { cn } from '../../lib/utils'

export default function CartContent() {
    const { cart, removeFromCart, updateQuantity, totalPrice } = useCart()
    const { showToast } = useToast()

    if (cart.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center py-24 text-center">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-sm border border-slate-100 mb-8">
                    <ShoppingBag className="h-10 w-10 text-slate-300" />
                </div>
                <h1 className="text-2xl md:text-3xl font-black text-slate-900 mb-4 tracking-tight">
                    Your cart is empty
                </h1>
                <p className="text-slate-500 max-w-xs mx-auto mb-10 text-sm md:text-base">
                    Looks like you haven't added anything to your cart yet. Let's find something special for your home!
                </p>
                <Link href="/shop">
                    <Button className="h-14 px-10 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-lg shadow-lg shadow-blue-600/20">
                        Start Shopping
                    </Button>
                </Link>
            </div>
        )
    }

    return (
        <div className="space-y-12 pb-24">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 text-xs md:text-sm text-slate-500">
                <Link href="/" className="hover:text-slate-700">Home</Link>
                <ChevronRight className="h-3 w-3" />
                <span className="text-slate-900 font-medium">Shopping Cart</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">Shopping Cart</h1>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                {/* Cart Items List */}
                <div className="lg:col-span-8 space-y-6">
                    <AnimatePresence>
                        {cart.map((item: CartItem) => (
                            <motion.div
                                key={item.id}
                                layout
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, x: -100 }}
                                className="bg-white rounded-[2rem] p-6 border border-slate-100 shadow-sm flex flex-col sm:flex-row gap-6 items-center"
                            >
                                <div className="relative w-32 h-32 bg-slate-50 rounded-2xl overflow-hidden flex-shrink-0">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        fill
                                        className="object-contain p-4"
                                    />
                                </div>

                                <div className="flex-grow space-y-2 text-center sm:text-left">
                                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                                        <div>
                                            <h3 className="text-xl font-bold text-slate-900 line-clamp-1">{item.name}</h3>
                                            <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest">{item.category}</p>
                                        </div>
                                        <div className="text-xl font-black text-slate-900">
                                            ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-center sm:justify-start gap-6 pt-4">
                                        <div className="flex items-center bg-slate-50 rounded-xl p-1 border border-slate-100">
                                            <button
                                                onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                                                className="w-10 h-10 flex items-center justify-center hover:bg-white rounded-lg transition-colors text-slate-400"
                                            >
                                                <Minus className="h-4 w-4" />
                                            </button>
                                            <span className="w-10 text-center font-bold text-slate-900">{item.quantity}</span>
                                            <button
                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                className="w-10 h-10 flex items-center justify-center hover:bg-white rounded-lg transition-colors text-slate-400"
                                            >
                                                <Plus className="h-4 w-4" />
                                            </button>
                                        </div>

                                        <div className="flex items-center gap-4">
                                            <button className="text-slate-400 hover:text-blue-600 font-bold text-sm transition-colors flex items-center gap-1">
                                                <Heart className="h-4 w-4" /> Save
                                            </button>
                                            <div className="w-px h-4 bg-slate-100" />
                                            <button
                                                onClick={() => {
                                                    removeFromCart(item.id)
                                                    showToast('Item removed', 'info')
                                                }}
                                                className="text-slate-400 hover:text-red-500 font-bold text-sm transition-colors flex items-center gap-1"
                                            >
                                                <Trash2 className="h-4 w-4" /> Remove
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* Summary Sidebar */}
                <div className="lg:col-span-4 space-y-6">
                    <div className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm space-y-8">
                        <h2 className="text-2xl font-bold text-slate-900">Order Summary</h2>

                        <div className="space-y-4">
                            <div className="flex justify-between items-center text-slate-500 font-medium">
                                <span>Subtotal</span>
                                <span className="text-slate-900 font-bold">₹{totalPrice.toLocaleString('en-IN')}</span>
                            </div>
                            <div className="flex justify-between items-center text-slate-500 font-medium">
                                <span>Shipping</span>
                                <span className="text-green-500 font-bold uppercase text-xs tracking-widest">Free</span>
                            </div>
                            <div className="flex justify-between items-center text-slate-500 font-medium">
                                <span>Estimated Tax</span>
                                <span className="text-slate-900 font-bold">₹0</span>
                            </div>
                        </div>

                        <div className="h-px bg-slate-50" />

                        <div className="flex justify-between items-center">
                            <span className="text-lg font-bold text-slate-900">Total</span>
                            <span className="text-3xl font-black text-slate-900 tracking-tighter">₹{totalPrice.toLocaleString('en-IN')}</span>
                        </div>

                        <div className="space-y-4 pt-4">
                            <Link href="/checkout" className="block">
                                <Button className="w-full h-16 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-lg shadow-lg shadow-blue-600/20">
                                    Proceed to Checkout
                                </Button>
                            </Link>
                            <p className="text-[10px] text-center text-slate-400 font-bold uppercase tracking-[0.1em]">
                                Secure Checkout with SSL Encryption
                            </p>
                        </div>
                    </div>

                    {/* Coupon Section */}
                    <div className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm">
                        <div className="flex items-center gap-3 mb-6">
                            <Tag className="h-5 w-5 text-blue-600" />
                            <h2 className="text-lg font-bold text-slate-900">Discount Code</h2>
                        </div>
                        <div className="flex gap-2">
                            <input
                                type="text"
                                placeholder="Enter code"
                                className="flex-1 px-5 rounded-xl bg-slate-50 border border-slate-100 text-sm font-bold text-slate-900 focus:outline-none focus:border-blue-600 transition-colors"
                            />
                            <button className="px-6 py-3 bg-slate-900 text-white font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-black transition-colors">
                                Apply
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
