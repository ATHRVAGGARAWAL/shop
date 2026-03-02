"use client"

import Link from "next/link"
import Image from "next/image"
import { Menu, X, Search, ShoppingBag, Heart, User, MessageCircle } from "lucide-react"
import { useEffect, useState } from "react"
import { Container } from "@/components/ui/container"
import { useCart } from "@/lib/cart-context"
import { CartDrawer } from "@/components/cart/cart-drawer"

export function Header() {
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const [isMounted, setIsMounted] = useState(false)
    const [isContactOpen, setIsContactOpen] = useState(false)
    const [contactMessage, setContactMessage] = useState("")

    const { totalItems } = useCart()

    useEffect(() => {
        setIsMounted(true)
    }, [])

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Products", href: "/shop" },
        { name: "Contact", href: "#" },
    ]

    const handleOpenWhatsApp = () => {
        const baseUrl = "https://wa.me/919418033069"
        const text =
            contactMessage.trim() ||
            "Hello, I would like to know more about your products and services."
        const url = `${baseUrl}?text=${encodeURIComponent(text)}`
        if (typeof window !== "undefined") {
            window.open(url, "_blank")
        }
    }

    return (
        <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-100">
            <Container className="flex h-20 items-center justify-between gap-8">
                {/* Logo */}
                <div className="flex items-center shrink-0">
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="relative h-10 w-10 rounded-xl overflow-hidden bg-white shadow-lg shadow-blue-600/20 ring-1 ring-slate-200 group-hover:ring-[#0055eb] transition-all">
                            <Image
                                src="/logo.png"
                                alt="Devki Nandan & Sons logo"
                                fill
                                className="object-contain p-1.5"
                                priority
                            />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xl font-black tracking-tighter text-slate-900 uppercase leading-none">
                                Devki Nandan
                            </span>
                            <span className="text-[10px] font-bold text-[#0055eb] uppercase tracking-[0.2em]">
                                & Sons Electrical
                            </span>
                        </div>
                    </Link>
                </div>

                {/* Navigation - Desktop */}
                <nav className="hidden lg:flex items-center gap-8">
                    {navLinks.map((link) => {
                        const isContact = link.name === "Contact"
                        if (isContact) {
                            return (
                                <button
                                    key={link.name}
                                    type="button"
                                    onClick={() => setIsContactOpen(true)}
                                    className="text-[13px] font-bold text-slate-500 hover:text-[#0055eb] transition-colors inline-flex items-center gap-1"
                                >
                                    Contact
                                    <MessageCircle className="h-4 w-4" />
                                </button>
                            )
                        }

                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-[13px] font-bold text-slate-500 hover:text-[#0055eb] transition-colors"
                            >
                                {link.name}
                            </Link>
                        )
                    })}
                </nav>

                {/* Search Bar */}
                <div className="hidden md:flex flex-1 max-w-md relative group">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#0055eb] transition-colors">
                        <Search className="h-4 w-4" />
                    </div>
                    <input
                        type="text"
                        placeholder="Search products, brands..."
                        style={{ paddingLeft: "3.5rem" }}
                        className="w-full bg-slate-50 border border-transparent focus:border-[#0055eb]/20 focus:bg-white rounded-xl py-3 pr-4 text-sm font-medium text-slate-900 outline-none transition-all"
                    />
                </div>

                {/* Icons */}
                <div className="flex items-center gap-1 sm:gap-3">
                    <button className="p-2.5 text-slate-600 hover:bg-slate-50 rounded-xl transition-all hidden sm:block">
                        <Heart className="h-5 w-5" />
                    </button>

                    <button
                        onClick={() => setIsCartOpen(true)}
                        className="relative p-2.5 text-slate-600 hover:text-[#0055eb] hover:bg-blue-50 rounded-xl transition-all"
                    >
                        <ShoppingBag className="h-6 w-6" />
                        {isMounted && totalItems > 0 && (
                            <span className="absolute top-1.5 right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#0055eb] text-[9px] font-black text-white ring-2 ring-white">
                                {totalItems}
                            </span>
                        )}
                    </button>

                    <button className="p-2.5 text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-all hidden sm:block shadow-md">
                        <User className="h-5 w-5" />
                    </button>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="p-2 text-slate-700 lg:hidden"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </Container>

            {/* Mobile Nav & Search */}
            {isOpen && (
                <div className="lg:hidden border-t border-slate-100 bg-white p-6 space-y-6 animate-in slide-in-from-top duration-300">
                    <div className="relative">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                            <Search className="h-4 w-4" />
                        </div>
                        <input
                            type="text"
                            placeholder="Quick search..."
                            className="w-full bg-slate-50 rounded-xl py-4 pl-12 pr-4 text-sm font-bold"
                        />
                    </div>
                    <nav className="flex flex-col space-y-4">
                        {navLinks.map((link) => {
                            const isContact = link.name === "Contact"
                            if (isContact) {
                                return (
                                    <button
                                        key={link.name}
                                        type="button"
                                        onClick={() => {
                                            setIsOpen(false)
                                            setIsContactOpen(true)
                                        }}
                                        className="text-lg font-black text-slate-900 hover:text-[#0055eb] flex items-center justify-between group"
                                    >
                                        <span className="inline-flex items-center gap-2">
                                            Contact
                                            <MessageCircle className="h-5 w-5" />
                                        </span>
                                        <div className="w-2 h-2 rounded-full bg-[#0055eb] opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </button>
                                )
                            }

                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-lg font-black text-slate-900 hover:text-[#0055eb] flex items-center justify-between group"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                    <div className="w-2 h-2 rounded-full bg-[#0055eb] opacity-0 group-hover:opacity-100 transition-opacity" />
                                </Link>
                            )
                        })}
                    </nav>
                </div>
            )}

            <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

            {/* WhatsApp Contact Modal */}
            {isContactOpen && (
                <div className="fixed inset-0 z-[80] flex items-center justify-center bg-black/40 backdrop-blur-sm">
                    <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 p-6 border border-slate-100">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-2">
                                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-green-500 text-white">
                                    <MessageCircle className="h-4 w-4" />
                                </span>
                                <div>
                                    <h2 className="text-base font-bold text-slate-900">
                                        Contact us on WhatsApp
                                    </h2>
                                    <p className="text-xs text-slate-500">
                                        We usually reply within a few minutes during business hours.
                                    </p>
                                </div>
                            </div>
                            <button
                                type="button"
                                onClick={() => setIsContactOpen(false)}
                                className="p-1.5 rounded-full hover:bg-slate-100 text-slate-400"
                            >
                                <X className="h-4 w-4" />
                            </button>
                        </div>

                        <label className="block text-xs font-semibold text-slate-500 mb-2">
                            Your message
                        </label>
                        <textarea
                            value={contactMessage}
                            onChange={(e) => setContactMessage(e.target.value)}
                            rows={4}
                            placeholder="Hi, I would like to enquire about electrical goods for my project…"
                            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none focus:border-[#0055eb] focus:bg-white transition-colors resize-none"
                        />
                        <p className="mt-2 text-[11px] text-slate-400">
                            This will open WhatsApp with your message pre-filled to our number{" "}
                            <span className="font-semibold text-slate-500">+91 98765 43210</span>.
                        </p>

                        <div className="mt-4 flex gap-2">
                            <button
                                type="button"
                                onClick={handleOpenWhatsApp}
                                className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-green-500 px-4 py-2 text-sm font-bold text-white hover:bg-green-600 transition-colors"
                            >
                                <MessageCircle className="h-4 w-4" />
                                Send via WhatsApp
                            </button>
                            <button
                                type="button"
                                onClick={() => setIsContactOpen(false)}
                                className="px-4 py-2 rounded-xl border border-slate-200 text-sm font-semibold text-slate-600 hover:bg-slate-50 transition-colors"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    )
}
