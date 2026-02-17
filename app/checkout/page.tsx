"use client"

import { useCart } from "@/lib/cart-context"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { placeOrder } from "@/lib/actions/orders"
import { useToast } from "@/lib/toast-context"
import { motion } from "framer-motion"
import { openWhatsAppChat } from "@/lib/whatsapp"

export default function CheckoutPage() {
    const { cart, totalPrice, clearCart } = useCart()
    const router = useRouter()
    const { showToast } = useToast()
    const [isSubmitting, setIsSubmitting] = useState(false)

    const [isCartLoaded, setIsCartLoaded] = useState(false)

    // Wait for cart to be loaded from localStorage
    useEffect(() => {
        setIsCartLoaded(true)
    }, [])

    // Redirect if cart is empty after hydration
    useEffect(() => {
        if (isCartLoaded && cart.length === 0 && !isSubmitting) {
            router.push('/shop')
        }
    }, [cart, router, isSubmitting, isCartLoaded])

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsSubmitting(true)

        const formData = new FormData(e.currentTarget)
        const orderData = {
            customerName: formData.get('name') as string,
            customerEmail: formData.get('email') as string,
            customerPhone: formData.get('phone') as string,
            address: formData.get('address') as string,
            totalAmount: totalPrice,
            items: cart.map(item => ({
                productId: item.id,
                quantity: item.quantity,
                price: item.price
            }))
        }

        try {
            const result = await placeOrder(orderData)
            if (result.success) {
                showToast('Order placed successfully!', 'success')
                clearCart()
                router.push(`/checkout/success?id=${result.orderId}`)
            }
        } catch (error) {
            console.error('Order error:', error)
            const message = error instanceof Error ? error.message : 'Failed to place order'
            showToast(message, 'error')
        } finally {
            setIsSubmitting(false)
        }
    }

    if (!isCartLoaded || (cart.length === 0 && !isSubmitting)) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50">
                <div className="animate-pulse flex flex-col items-center">
                    <div className="h-12 w-12 bg-industrial-blue/20 rounded-full mb-4"></div>
                    <p className="text-slate-400 font-medium">Loading checkout...</p>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-slate-50 py-12">
            <Container>
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-3xl font-black text-industrial-blue uppercase tracking-tight mb-8">Checkout</h1>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Shipping Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="bg-white p-8 rounded-lg shadow-sm border border-slate-100"
                        >
                            <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-industrial-blue text-white text-sm">1</span>
                                Shipping Details
                            </h2>

                            <form id="checkout-form" onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="name">Full Name</Label>
                                        <Input id="name" name="name" placeholder="John Doe" required />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="email">Email Address</Label>
                                        <Input id="email" name="email" type="email" placeholder="john@example.com" required />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="phone">Phone Number</Label>
                                    <Input id="phone" name="phone" placeholder="9876543210" required />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="address">Shipping Address</Label>
                                    <Textarea id="address" name="address" placeholder="123 Street, City, State, PIN" rows={4} required />
                                </div>

                                <div className="pt-4 space-y-3">
                                    <Button
                                        type="submit"
                                        className="w-full h-12 bg-industrial-blue font-bold text-base"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? 'Processing...' : 'Place Order'}
                                    </Button>

                                    <div className="relative">
                                        <div className="absolute inset-0 flex items-center">
                                            <span className="w-full border-t border-slate-100"></span>
                                        </div>
                                        <div className="relative flex justify-center text-xs uppercase">
                                            <span className="bg-white px-2 text-slate-400">Or</span>
                                        </div>
                                    </div>

                                    <Button
                                        type="button"
                                        variant="outline"
                                        className="w-full h-12 text-base font-bold border-green-600 text-green-600 hover:bg-green-50"
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
                            </form>
                        </motion.div>

                        {/* Order Summary */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="space-y-6"
                        >
                            <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-100">
                                <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-industrial-blue text-white text-sm">2</span>
                                    Order Summary
                                </h2>

                                <div className="space-y-4 mb-6">
                                    {cart.map((item) => (
                                        <div key={item.id} className="flex justify-between text-sm">
                                            <div className="flex gap-3">
                                                <span className="font-bold text-slate-900 w-6">{item.quantity}x</span>
                                                <span className="text-slate-600 truncate max-w-[200px]">{item.name}</span>
                                            </div>
                                            <span className="font-bold text-slate-900">₹{(item.price * item.quantity).toLocaleString('en-IN')}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="pt-6 border-t border-slate-100 space-y-3">
                                    <div className="flex justify-between text-sm text-slate-500">
                                        <span>Subtotal</span>
                                        <span>₹{totalPrice.toLocaleString('en-IN')}</span>
                                    </div>
                                    <div className="flex justify-between text-sm text-slate-500">
                                        <span>Shipping</span>
                                        <span className="text-green-600 font-bold uppercase text-[10px] tracking-wider">Free</span>
                                    </div>
                                    <div className="flex justify-between text-lg font-black text-industrial-blue pt-2 border-t border-slate-100">
                                        <span>Total</span>
                                        <span>₹{totalPrice.toLocaleString('en-IN')}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-slate-100 p-6 rounded-lg text-xs text-slate-500 space-y-2">
                                <p className="font-bold uppercase tracking-widest text-slate-400 mb-2">Secure Checkout</p>
                                <p>By placing this order, you agree to our Terms of Service and Privacy Policy. We will contact you on the provided phone number for order verification.</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </Container>
        </div>
    )
}
