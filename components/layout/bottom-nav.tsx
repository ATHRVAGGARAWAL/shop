"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, ShoppingBag, Grid, ShoppingCart, User } from "lucide-react"
import { cn } from "@/lib/utils"
import { useCart } from "@/lib/cart-context"
import { motion } from "framer-motion"

export function BottomNav() {
    const pathname = usePathname()
    const { totalItems } = useCart()

    const navItems = [
        { name: "Home", href: "/", icon: Home },
        { name: "Shop", href: "/shop", icon: ShoppingBag },
        { name: "Categories", href: "/shop#categories", icon: Grid },
        { name: "Cart", href: "/checkout", icon: ShoppingCart, badge: totalItems },
    ]

    return (
        <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-[400px]">
            <nav className="bg-slate-900/90 backdrop-blur-xl border border-white/10 shadow-2xl rounded-full px-6 py-3 flex items-center justify-between">
                {navItems.map((item) => {
                    const isActive =
                        pathname === item.href ||
                        (item.href !== "/" && pathname.startsWith(item.href))
                    return (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="relative flex flex-col items-center gap-1 group"
                        >
                            <div className={cn(
                                "p-2 rounded-full transition-all duration-300",
                                isActive ? "bg-blue-600 text-white scale-110 shadow-lg shadow-blue-600/20" : "text-white/40 hover:text-white"
                            )}>
                                <item.icon className="h-5 w-5" />
                                {item.badge !== undefined && item.badge > 0 && (
                                    <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-black text-white border-2 border-slate-900">
                                        {item.badge}
                                    </span>
                                )}
                            </div>
                            {isActive && (
                                <motion.div
                                    layoutId="bottom-nav-active"
                                    className="absolute -bottom-1 w-1 h-1 bg-blue-600 rounded-full"
                                />
                            )}
                        </Link>
                    )
                })}
            </nav>
        </div>
    )
}
