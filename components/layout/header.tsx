"use client"

import Link from "next/link"
import Image from "next/image"
import { Menu, X, Phone, Zap, Search, ShoppingBag, MapPin } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { useCart } from "@/lib/cart-context"
import { CartDrawer } from "@/components/cart/cart-drawer"

export function Header() {
    const [isCartOpen, setIsCartOpen] = useState(false)
    const { totalItems } = useCart()

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Shop", href: "/shop" },
        { name: "Bulk", href: "/shop" },
        { name: "Contact", href: "#contact" },
    ]

    return (
        <header className="sticky top-0 z-50 w-full glass modern-shadow border-b border-white/10">
            <Container className="flex h-16 md:h-20 items-center justify-between">
                <div className="flex items-center gap-3">
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="relative w-8 h-8 md:w-10 md:h-10 transition-transform duration-500 group-hover:rotate-[360deg]">
                            <Image
                                src="/logo.png"
                                alt="Logo"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-sm md:text-lg font-black tracking-tighter text-industrial-blue uppercase">
                                DEVKI NANDAN
                            </span>
                        </div>
                    </Link>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-xs font-bold uppercase tracking-widest text-slate-600 hover:text-industrial-blue transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-2">
                    <button className="p-2 text-slate-600 hover:bg-slate-100 rounded-full transition-colors hidden md:block">
                        <Search className="h-4 w-4" />
                    </button>
                    <button
                        onClick={() => setIsCartOpen(true)}
                        className="relative p-2 text-industrial-blue hover:bg-industrial-blue/5 rounded-full transition-all"
                    >
                        <ShoppingBag className="h-5 w-5 md:h-6 md:w-6" />
                        {totalItems > 0 && (
                            <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-industrial-blue text-[9px] font-bold text-white animate-flowy-fade">
                                {totalItems}
                            </span>
                        )}
                    </button>
                </div>
            </Container>

            <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
        </header>
    )
}

