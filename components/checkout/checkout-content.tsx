"use client"

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ChevronRight, CreditCard, ShieldCheck, Truck, Lock, ChevronDown } from 'lucide-react'
import { Button } from '../ui/button'
import { useCart, CartItem } from '../../lib/cart-context'
import { cn } from '../../lib/utils'

export default function CheckoutContent() {
    const { cart, totalPrice } = useCart()
    const [step, setStep] = useState(1) // 1: Shipping, 2: Payment

    return (
        <div className="space-y-12 pb-24 max-w-6xl mx-auto">
            {/* Simple Logo */}
            <div className="text-center">
                <Link href="/" className="text-2xl font-black text-slate-900 uppercase tracking-tighter">
                    Devki Nandan & Sons
                </Link>
            </div>

            {/* Stepper */}
            <div className="flex items-center justify-center gap-12 text-sm font-bold uppercase tracking-[0.2em]">
                <div className={cn("flex items-center gap-3 transition-colors", step >= 1 ? "text-blue-600" : "text-slate-300")}>
                    <span className={cn("w-8 h-8 rounded-full border-2 flex items-center justify-center", step >= 1 ? "border-blue-600 bg-blue-50" : "border-slate-100")}>1</span>
                    Shipping
                </div>
                <div className="w-12 h-px bg-slate-100" />
                <div className={cn("flex items-center gap-3 transition-colors", step >= 2 ? "text-blue-600" : "text-slate-300")}>
                    <span className={cn("w-8 h-8 rounded-full border-2 flex items-center justify-center", step >= 2 ? "border-blue-600 bg-blue-50" : "border-slate-100")}>2</span>
                    Payment
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                {/* Left Side: Forms */}
                <div className="space-y-12">
                    {step === 1 ? (
                        <div className="space-y-8">
                            <h2 className="text-3xl font-bold text-slate-900">Shipping Details</h2>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">First Name</label>
                                    <input type="text" className="w-full h-14 px-5 rounded-xl border border-slate-100 bg-slate-50 focus:outline-none focus:border-blue-600 transition-colors font-medium text-slate-900" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Last Name</label>
                                    <input type="text" className="w-full h-14 px-5 rounded-xl border border-slate-100 bg-slate-50 focus:outline-none focus:border-blue-600 transition-colors font-medium text-slate-900" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Address</label>
                                <input type="text" className="w-full h-14 px-5 rounded-xl border border-slate-100 bg-slate-50 focus:outline-none focus:border-blue-600 transition-colors font-medium text-slate-900" />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">City</label>
                                    <input type="text" className="w-full h-14 px-5 rounded-xl border border-slate-100 bg-slate-50 focus:outline-none focus:border-blue-600 transition-colors font-medium text-slate-900" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Postal Code</label>
                                    <input type="text" className="w-full h-14 px-5 rounded-xl border border-slate-100 bg-slate-50 focus:outline-none focus:border-blue-600 transition-colors font-medium text-slate-900" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Phone</label>
                                <input type="text" className="w-full h-14 px-5 rounded-xl border border-slate-100 bg-slate-50 focus:outline-none focus:border-blue-600 transition-colors font-medium text-slate-900" />
                            </div>

                            <Button
                                onClick={() => setStep(2)}
                                className="w-full h-16 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-lg shadow-xl shadow-blue-600/20"
                            >
                                Continue to Payment
                            </Button>
                        </div>
                    ) : (
                        <div className="space-y-8">
                            <h2 className="text-3xl font-bold text-slate-900">Payment Method</h2>
                            <div className="space-y-4">
                                <div className="p-6 border-2 border-blue-600 rounded-2xl bg-blue-50/50 flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-blue-600">
                                            <CreditCard className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-slate-900">Credit / Debit Card</p>
                                            <p className="text-xs text-slate-400 font-medium">Visa, Mastercard, AMEX</p>
                                        </div>
                                    </div>
                                    <div className="w-6 h-6 rounded-full border-4 border-blue-600 bg-white" />
                                </div>
                                <div className="p-6 border border-slate-100 rounded-2xl bg-white flex items-center justify-between opacity-50 cursor-not-allowed">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400">
                                            <span className="font-bold text-sm">UPI</span>
                                        </div>
                                        <p className="font-bold text-slate-400">Net Banking / UPI</p>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4 pt-4">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Card Number</label>
                                    <input type="text" placeholder="0000 0000 0000 0000" className="w-full h-14 px-5 rounded-xl border border-slate-100 bg-slate-50 focus:outline-none focus:border-blue-600 transition-colors font-medium text-slate-900" />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Expiry Date</label>
                                        <input type="text" placeholder="MM / YY" className="w-full h-14 px-5 rounded-xl border border-slate-100 bg-slate-50 focus:outline-none focus:border-blue-600 transition-colors font-medium text-slate-900" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">CVV</label>
                                        <input type="text" placeholder="123" className="w-full h-14 px-5 rounded-xl border border-slate-100 bg-slate-50 focus:outline-none focus:border-blue-600 transition-colors font-medium text-slate-900" />
                                    </div>
                                </div>
                            </div>

                            <Button
                                className="w-full h-16 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-lg shadow-xl shadow-blue-600/20"
                            >
                                Place Order — ₹{totalPrice.toLocaleString('en-IN')}
                            </Button>

                            <button
                                onClick={() => setStep(1)}
                                className="w-full text-center font-bold text-slate-400 hover:text-slate-600 text-sm py-2"
                            >
                                Back to Shipping
                            </button>
                        </div>
                    )}
                </div>

                {/* Right Side: Summary Container */}
                <div className="space-y-12">
                    <div className="p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100 space-y-10">
                        <div className="flex items-center justify-between">
                            <h2 className="text-2xl font-bold text-slate-900">Your Order</h2>
                            <Link href="/cart" className="text-sm font-bold text-blue-600 hover:text-blue-700 underline underline-offset-4">Edit Cart</Link>
                        </div>

                        <div className="space-y-6 max-h-[300px] overflow-y-auto pr-4 custom-scrollbar">
                            {cart.map((item: CartItem) => (
                                <div key={item.id} className="flex gap-4 items-center">
                                    <div className="relative w-20 h-20 bg-white rounded-xl overflow-hidden border border-slate-100 p-2 flex-shrink-0">
                                        <Image src={item.image} alt={item.name} fill className="object-contain" />
                                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-slate-900 text-white text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-white">
                                            {item.quantity}
                                        </div>
                                    </div>
                                    <div className="flex-grow">
                                        <h4 className="font-bold text-slate-900 line-clamp-1">{item.name}</h4>
                                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-0.5">{item.brand}</p>
                                    </div>
                                    <div className="font-bold text-slate-900 whitespace-nowrap">
                                        ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="h-px bg-slate-200/50" />

                        <div className="space-y-4">
                            <div className="flex justify-between items-center text-slate-500 font-medium">
                                <span>Subtotal</span>
                                <span className="text-slate-900 font-bold">₹{totalPrice.toLocaleString('en-IN')}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-slate-500 font-medium">Shipping</span>
                                <span className="text-blue-600 font-bold uppercase text-[10px] tracking-widest bg-blue-50 px-3 py-1 rounded-md border border-blue-100">Complementary</span>
                            </div>
                        </div>

                        <div className="h-px bg-slate-200/50" />

                        <div className="flex justify-between items-end">
                            <div>
                                <span className="block text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Total Amount</span>
                                <span className="text-4xl font-black text-slate-900 tracking-tighter">₹{totalPrice.toLocaleString('en-IN')}</span>
                            </div>
                            <div className="flex flex-col items-end gap-1">
                                <div className="flex items-center gap-1 text-green-500 font-bold text-[10px] uppercase tracking-widest">
                                    <ShieldCheck className="h-3.5 w-3.5" /> Secured
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Trust Factor Cards */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="p-6 rounded-2xl border border-slate-100 bg-white flex flex-col items-center text-center gap-3">
                            <Truck className="h-6 w-6 text-blue-600" />
                            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Fast Local Delivery</p>
                        </div>
                        <div className="p-6 rounded-2xl border border-slate-100 bg-white flex flex-col items-center text-center gap-3">
                            <Lock className="h-6 w-6 text-blue-600" />
                            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Bank-level Security</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
