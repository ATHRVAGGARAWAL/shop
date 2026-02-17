"use client"

import { motion, AnimatePresence } from 'framer-motion'
import { X, ShoppingBag, Plus, Minus, Trash2 } from 'lucide-react'
import { useCart } from '@/lib/cart-context'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

export function CartDrawer({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
    const { cart, removeFromCart, updateQuantity, totalPrice, totalItems } = useCart()
    const router = useRouter()

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
                                        <p className="text-slate-500 text-sm mt-2">Looks like you haven&apos;t added anything to your cart yet.</p>
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
                                        className="w-full h-12 text-base font-bold bg-industrial-blue hover:bg-industrial-blue/90 mb-3"
                                        onClick={() => {
                                            onClose();
                                            router.push('/checkout');
                                        }}
                                    >
                                        Proceed to Checkout
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
