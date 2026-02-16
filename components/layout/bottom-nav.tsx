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
            <nav className="glass-dark modern-shadow rounded-full px-6 py-3 flex items-center justify-between">
                {navItems.map((item) => {
                    const isActive = pathname === item.href
                    return (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="relative flex flex-col items-center gap-1 group"
                        >
                            <div className={cn(
                                "p-2 rounded-full transition-all duration-300",
                                isActive ? "bg-safety-yellow text-void-black scale-110" : "text-white/60 hover:text-white"
                            )}>
                                <item.icon className="h-5 w-5" />
                                {item.badge !== undefined && item.badge > 0 && (
                                    <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white border-2 border-void-black">
                                        {item.badge}
                                    </span>
                                )}
                            </div>
                            {isActive && (
                                <motion.div
                                    layoutId="bottom-nav-active"
                                    className="absolute -bottom-1 w-1 h-1 bg-safety-yellow rounded-full"
                                />
                            )}
                        </Link>
                    )
                })}
            </nav>
        </div>
    )
}
