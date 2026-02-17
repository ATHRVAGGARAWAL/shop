"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X, ArrowRight } from "lucide-react"
import Link from "next/link"

interface FullscreenMenuProps {
    isOpen: boolean
    onClose: () => void
}

export function FullscreenMenu({ isOpen, onClose }: FullscreenMenuProps) {
    const menuItems = [
        { label: "Products", href: "/shop", desc: "Industrial Grade Equipment" },
        { label: "Brands", href: "/#brands", desc: "Authorized Distribution" },
        { label: "Projects", href: "/#projects", desc: "Infrastructural Footprint" },
        { label: "About", href: "/#about", desc: "Legacy Since 1995" },
        { label: "Contact", href: "/#contact", desc: "Talk to Specialist" },
    ]

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] bg-matte-black/95 backdrop-blur-2xl flex flex-col p-8 md:p-16"
                >
                    <div className="flex justify-between items-start">
                        <div className="flex flex-col">
                            <span className="font-industrial text-industrial-amber text-xs tracking-[0.4em] uppercase mb-2">
                                Showroom Navigation
                            </span>
                            <div className="h-[1px] w-24 bg-industrial-amber/30" />
                        </div>

                        <button
                            onClick={onClose}
                            className="group p-4 bg-white/5 hover:bg-industrial-amber/20 rounded-full transition-all duration-500 magnetic-button"
                        >
                            <X className="w-8 h-8 text-white group-hover:rotate-90 transition-transform duration-500" />
                        </button>
                    </div>

                    <nav className="mt-20 flex flex-col gap-8 md:gap-12">
                        {menuItems.map((item, index) => (
                            <motion.div
                                key={item.label}
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            >
                                <Link
                                    href={item.href}
                                    onClick={onClose}
                                    className="group flex items-end gap-6 md:gap-10 hover:text-industrial-amber transition-colors"
                                >
                                    <span className="font-technical text-white/20 text-xl font-bold group-hover:text-industrial-amber/40">
                                        0{index + 1}
                                    </span>
                                    <div className="flex flex-col">
                                        <span className="font-industrial text-4xl md:text-7xl uppercase tracking-tighter leading-none">
                                            {item.label}
                                        </span>
                                        <span className="font-technical text-xs md:text-sm text-white/40 tracking-widest mt-2">
                                            {item.desc}
                                        </span>
                                    </div>
                                    <ArrowRight className="w-8 h-8 md:w-12 md:h-12 opacity-0 -translate-x-10 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 text-industrial-amber" />
                                </Link>
                            </motion.div>
                        ))}
                    </nav>

                    <div className="mt-auto grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 border-t border-white/5">
                        <div>
                            <p className="font-technical text-[10px] uppercase text-white/40 mb-4 tracking-widest">Office</p>
                            <p className="text-sm font-body">Main Industrial Zone,<br />Sector 12, Delhi - 110006</p>
                        </div>
                        <div>
                            <p className="font-technical text-[10px] uppercase text-white/40 mb-4 tracking-widest">Inquiries</p>
                            <p className="text-sm font-body">sales@devkinandan.com<br />+91 98765 43210</p>
                        </div>
                        <div className="col-span-2 flex items-end justify-end">
                            <span className="font-technical text-[10px] text-white/20 tracking-[0.5em] uppercase">
                                ESTD 1995 • POWERING INFRASTRUCTURE
                            </span>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
