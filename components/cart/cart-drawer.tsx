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
                                    <ShoppingBag className="h-5 w-5 text-blue-600" />
                                    <h2 className="text-xl font-bold text-slate-900">Your Cart ({totalItems})</h2>
                                </div>
                                <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                                    <X className="h-6 w-6 text-slate-500" />
                                </button>
                            </div>

                            {/* Content */}
                            <div className="flex-grow overflow-y-auto p-6 scrollbar-hide">
                                {cart && cart.length > 0 ? (
                                    <div className="space-y-6">
                                        {cart.map((item) => (
                                            <div key={item.id} className="flex gap-4 group">
                                                <div className="h-20 w-20 bg-slate-50 rounded-2xl flex items-center justify-center shrink-0 border border-slate-100 p-2 overflow-hidden">
                                                    <img src={item.image} alt={item.name} className="h-full w-full object-contain transform group-hover:scale-110 transition-transform duration-500" />
                                                </div>
                                                <div className="flex-grow">
                                                    <div className="flex justify-between mb-1">
                                                        <h3 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-1">{item.name}</h3>
                                                        <span className="text-sm font-black text-slate-900 whitespace-nowrap ml-2">₹{(item.price * item.quantity).toLocaleString('en-IN')}</span>
                                                    </div>
                                                    <p className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-3">{item.brand}</p>
                                                    <div className="flex items-center justify-between">
                                                        <div className="flex items-center bg-slate-50 rounded-xl p-1 border border-slate-100">
                                                            <button
                                                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                                className="w-8 h-8 flex items-center justify-center hover:bg-white rounded-lg transition-all text-slate-400"
                                                            >
                                                                <Minus className="h-3 w-3" />
                                                            </button>
                                                            <span className="w-8 text-center text-xs font-black text-slate-900">{item.quantity}</span>
                                                            <button
                                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                                className="w-8 h-8 flex items-center justify-center hover:bg-white rounded-lg transition-all text-slate-400"
                                                            >
                                                                <Plus className="h-3 w-3" />
                                                            </button>
                                                        </div>
                                                        <button
                                                            onClick={() => removeFromCart(item.id)}
                                                            className="p-2 text-slate-300 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all"
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
                                        <div className="h-20 w-20 bg-slate-50 rounded-[2rem] flex items-center justify-center mb-6">
                                            <ShoppingBag className="h-10 w-10 text-slate-300" />
                                        </div>
                                        <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight">Empty Cart</h3>
                                        <p className="text-slate-400 text-sm mt-2 max-w-[200px] italic">Looks like you haven&apos;t added any solutions yet.</p>
                                        <Button className="mt-8 rounded-2xl h-12 px-8 bg-blue-600 hover:bg-blue-700 text-white font-black uppercase text-[10px] tracking-widest shadow-lg shadow-blue-600/20" onClick={onClose}>Explore Inventory</Button>
                                    </div>
                                )}
                            </div>

                            {/* Footer */}
                            {cart && cart.length > 0 && (
                                <div className="p-8 border-t border-slate-100 bg-slate-50/50 rounded-t-[2.5rem]">
                                    <div className="flex justify-between mb-4 items-end">
                                        <div className="flex flex-col">
                                            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Subtotal</span>
                                            <span className="text-3xl font-black text-slate-900 tracking-tighter">₹{totalPrice.toLocaleString('en-IN')}</span>
                                        </div>
                                    </div>
                                    <p className="text-[10px] font-bold text-slate-400 mb-8 uppercase tracking-widest">Taxes and shipping calculated at checkout.</p>
                                    <Button
                                        className="w-full h-16 text-xs font-black uppercase tracking-[0.2em] bg-slate-900 hover:bg-blue-600 text-white rounded-2xl shadow-xl shadow-black/10 hover:shadow-blue-600/20 transition-all duration-300"
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
