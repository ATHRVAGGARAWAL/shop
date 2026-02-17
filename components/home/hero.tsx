"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { motion } from "framer-motion"

export function Hero() {
    return (
        <section className="relative h-[85vh] min-h-[600px] w-full overflow-hidden flex items-center">
            {/* Background Image Wrapper */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-black/50 z-10" /> {/* Dark Overlay */}
                <img
                    src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80"
                    alt="Warehouse Background"
                    className="w-full h-full object-cover"
                />
            </div>

            <Container className="relative z-20">
                <div className="max-w-4xl pl-8 md:pl-24">
                    <motion.div
                        initial={{ opacity: 0, x: -25 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center gap-6 mb-12">
                            <div className="relative w-20 h-20 bg-white p-3 shadow-2xl skew-x-[-12deg] border-r-4 border-b-4 border-safety-yellow transition-transform hover:skew-x-0 cursor-default">
                                <div className="skew-x-[12deg] w-full h-full relative">
                                    <Image
                                        src="/logo.png"
                                        alt="Devki Nandan & Sons Logo"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                            <div className="inline-block border border-white/20 bg-white/5 backdrop-blur-md px-5 py-2">
                                <span className="text-white text-[10px] font-bold uppercase tracking-[0.4em]">
                                    ESTABLISHED 1995
                                </span>
                            </div>
                        </div>

                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] tracking-tight mb-8 italic uppercase text-glow">
                            DEVKI NANDAN <br />
                            <span className="text-safety-yellow">& SONS</span>
                        </h1>

                        <p className="text-base md:text-xl text-white/80 font-medium leading-relaxed mb-12 max-w-xl border-l-2 border-safety-yellow/30 pl-6">
                            Authorized Wholesaler & Retailer of Premium Electrical Goods. Specializing in Industrial & Residential solutions.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6">
                            <Button asChild size="lg" className="h-14 px-10 rounded-none bg-white text-black hover:bg-white/90 text-xs font-bold uppercase tracking-widest shadow-xl transition-all hover:-translate-y-1">
                                <Link href="/shop">Bulk Wholesale</Link>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="h-14 px-10 rounded-none border-white/50 text-white hover:bg-white hover:text-black text-xs font-bold uppercase tracking-widest shadow-xl transition-all hover:-translate-y-1">
                                <Link href="/shop">Shop Retail</Link>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </Container>
        </section>
    )
}
