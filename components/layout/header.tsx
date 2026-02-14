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
    const [isOpen, setIsOpen] = useState(false)
    const [isCartOpen, setIsCartOpen] = useState(false)

    const { totalItems } = useCart()

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Shop", href: "/shop" },
        { name: "Categories", href: "/shop" },
        { name: "Wholesale", href: "#wholesale" },
        { name: "Contact", href: "#contact" },
    ]

    return (
        <header className="sticky top-0 z-50 w-full bg-white">

            <div className="border-b border-slate-100">
                <Container className="flex h-20 items-center justify-between">
                    <div className="flex items-center gap-3">
                        <Link href="/" className="flex items-center gap-4 group">
                            <div className="relative w-12 h-12 transition-transform duration-300 group-hover:scale-105">
                                <Image
                                    src="/logo.png"
                                    alt="Devki Nandan & Sons Logo"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xl font-black leading-tight text-industrial-blue tracking-tighter">
                                    DEVKI NANDAN
                                </span>
                                <span className="text-[10px] font-extrabold tracking-[0.3em] text-slate-400 group-hover:text-industrial-blue transition-colors">
                                    AND SONS
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
                                className="text-sm font-medium text-slate-700 hover:text-industrial-blue transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}

                        <div className="flex items-center gap-2 ml-4 pl-4 border-l border-slate-100">
                            <button className="text-industrial-blue hover:text-industrial-blue/80 p-2">
                                <Search className="h-5 w-5 stroke-[2.5px]" />
                            </button>
                            <button
                                onClick={() => setIsCartOpen(true)}
                                className="text-industrial-blue hover:text-industrial-blue/80 p-2 relative"
                            >
                                <ShoppingBag className="h-5 w-5 stroke-[2.5px]" />
                                {totalItems > 0 && (
                                    <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-industrial-blue text-[10px] font-bold text-white border-2 border-white">
                                        {totalItems}
                                    </span>
                                )}
                            </button>
                        </div>
                    </nav>

                    {/* Mobile Cart Button */}
                    <div className="flex md:hidden items-center gap-2">
                        <button
                            onClick={() => setIsCartOpen(true)}
                            className="text-slate-700 p-2 relative"
                        >
                            <ShoppingBag className="h-6 w-6" />
                            {totalItems > 0 && (
                                <span className="absolute top-0 right-0 flex h-4 w-4 items-center justify-center rounded-full bg-industrial-blue text-[10px] font-bold text-white">
                                    {totalItems}
                                </span>
                            )}
                        </button>
                        {/* Mobile Menu Toggle */}
                        <button
                            className="p-2 text-slate-700"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </Container>
            </div>

            <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

            {/* Mobile Nav */}
            {isOpen && (
                <div className="md:hidden border-t border-slate-200 bg-white p-4 absolute w-full shadow-lg">
                    <nav className="flex flex-col space-y-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-base font-medium text-slate-700 hover:text-industrial-blue"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    )
}
