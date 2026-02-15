"use client"

import { motion, AnimatePresence } from 'framer-motion'
import { X, ShoppingBag, Plus, Minus, Trash2 } from 'lucide-react'
import { useCart } from '@/lib/cart-context'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { openWhatsAppChat } from '@/lib/whatsapp'

export function CartDrawer({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
    const { cart, removeFromCart, updateQuantity, totalPrice, totalItems } = useCart()

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm"
                    />

                    {/* Drawer */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed right-0 top-0 z-[70] h-full w-full max-w-md bg-white shadow-2xl"
                    >
                        <div className="flex flex-col h-full">
                            {/* Header */}
                            <div className="flex items-center justify-between p-6 border-b border-slate-100">
                                <div className="flex items-center gap-2">
                                    <ShoppingBag className="h-5 w-5 text-industrial-blue" />
                                    <h2 className="text-xl font-bold text-slate-900">Your Cart ({totalItems})</h2>
                                </div>
                                <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                                    <X className="h-6 w-6 text-slate-500" />
                                </button>
                            </div>

                            {/* Content */}
                            <div className="flex-grow overflow-y-auto p-6">
                                {cart.length > 0 ? (
                                    <div className="space-y-6">
                                        {cart.map((item) => (
                                            <div key={item.id} className="flex gap-4">
                                                <div className="h-20 w-20 bg-slate-100 rounded-lg flex items-center justify-center shrink-0 border border-slate-200">
                                                    <span className="text-2xl opacity-20">⚡</span>
                                                </div>
                                                <div className="flex-grow">
                                                    <div className="flex justify-between mb-1">
                                                        <h3 className="text-sm font-bold text-slate-900">{item.name}</h3>
                                                        <span className="text-sm font-bold text-industrial-blue">${(item.price * item.quantity).toFixed(2)}</span>
                                                    </div>
                                                    <p className="text-xs text-slate-500 mb-3">{item.brand}</p>
                                                    <div className="flex items-center justify-between">
                                                        <div className="flex items-center border border-slate-200 rounded overflow-hidden">
                                                            <button
                                                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                                className="p-1 hover:bg-slate-50"
                                                            >
                                                                <Minus className="h-3 w-3" />
                                                            </button>
                                                            <span className="px-3 text-xs font-bold">{item.quantity}</span>
                                                            <button
                                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                                className="p-1 hover:bg-slate-50"
                                                            >
                                                                <Plus className="h-3 w-3" />
                                                            </button>
                                                        </div>
                                                        <button
                                                            onClick={() => removeFromCart(item.id)}
                                                            className="text-slate-400 hover:text-red-500 transition-colors"
                                                        >
                                                            <Trash2 className="h-4 w-4" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="flex flex-col items-center justify-center h-full text-center">
                                        <div className="h-16 w-16 bg-slate-50 rounded-full flex items-center justify-center mb-4">
                                            <ShoppingBag className="h-8 w-8 text-slate-300" />
                                        </div>
                                        <h3 className="font-bold text-slate-900">Your cart is empty</h3>
                                        <p className="text-slate-500 text-sm mt-2">Looks like you haven't added anything to your cart yet.</p>
                                        <Button className="mt-6" variant="outline" onClick={onClose}>Continue Shopping</Button>
                                    </div>
                                )}
                            </div>

                            {/* Footer */}
                            {cart.length > 0 && (
                                <div className="p-6 border-t border-slate-100 bg-slate-50/50">
                                    <div className="flex justify-between mb-4">
                                        <span className="text-slate-500 font-medium">Subtotal</span>
                                        <span className="text-xl font-bold text-slate-900">₹{totalPrice.toLocaleString('en-IN')}</span>
                                    </div>
                                    <p className="text-xs text-slate-500 mb-6">Taxes and shipping calculated at checkout.</p>
                                    <Button
                                        className="w-full h-12 text-base font-bold bg-green-600 hover:bg-green-700"
                                        onClick={() => {
                                            openWhatsAppChat(cart, totalPrice)
                                        }}
                                    >
                                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                        </svg>
                                        Order via WhatsApp
                                    </Button>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}
