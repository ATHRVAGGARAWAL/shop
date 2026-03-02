"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, ChevronRight, Activity, Zap, Box, Shield } from "lucide-react"
import { useRef } from "react"
import { cn } from "@/lib/utils"

export function Hero() {
    return (
        <section className="relative min-h-[calc(100vh-5rem)] w-full overflow-hidden flex items-center bg-slate-900">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&q=80"
                    alt="Premium Lighting"
                    fill
                    className="object-cover opacity-60"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10" />
            </div>

            <Container className="relative z-20">
                <div className="max-w-2xl space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="inline-block"
                    >
                        <div className="inline-flex bg-[#0055eb] text-white text-[10px] font-black uppercase tracking-[0.2em] px-4 py-2 rounded-sm mb-6">
                            New Arrival
                        </div>

                        <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.1] tracking-tight">
                            Illuminate Your <br />
                            <span className="text-white">Space with Style</span>
                        </h1>

                        <p className="text-lg md:text-xl text-slate-200 font-medium leading-relaxed mt-6 max-w-xl">
                            Discover premium lighting and high-performance electrical solutions from world-class brands like Philips and Anchor.
                        </p>

                        <div className="flex flex-wrap gap-4 mt-10">
                            <Button asChild size="lg" className="h-14 px-8 rounded-xl bg-[#0055eb] text-white hover:bg-blue-700 transition-all text-sm font-bold shadow-lg shadow-blue-600/20">
                                <Link href="/shop">Shop Collection</Link>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="h-14 px-8 rounded-xl border-white/20 text-white bg-white/10 hover:bg-white/20 backdrop-blur-md transition-all text-sm font-bold">
                                <Link href="/shop">View Brands</Link>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </Container>

            {/* Decorative element */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-1 h-12 bg-gradient-to-b from-white/20 to-transparent rounded-full hidden md:block" />
        </section>
    )
}

