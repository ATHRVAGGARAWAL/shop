"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, ChevronRight, Activity, Zap, Box, Shield } from "lucide-react"
import { useRef } from "react"

export function Hero() {
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollY } = useScroll()
    const y1 = useTransform(scrollY, [0, 500], [0, 200])
    const opacity = useTransform(scrollY, [0, 300], [1, 0])

    return (
        <section ref={containerRef} className="relative min-h-screen w-full overflow-hidden flex items-center bg-[#020617]">
            {/* Blueprint Grid Overlay */}
            <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

            {/* Background Image with Parallax */}
            <motion.div
                style={{ y: y1 }}
                className="absolute inset-0 z-0"
            >
                <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/80 via-[#020617]/40 to-[#020617] z-10" />
                <img
                    src="https://images.unsplash.com/photo-1558444479-7a00d73771a8?auto=format&fit=crop&q=80"
                    alt="Industrial Technology"
                    className="w-full h-full object-cover scale-110 blur-[2px]"
                />
            </motion.div>

            <Container className="relative z-20 pt-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-8 flex flex-col justify-center min-h-[60vh] md:min-h-0">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <div className="flex items-center gap-4 mb-8 justify-center md:justify-start">
                                <div className="h-px w-12 bg-safety-yellow" />
                                <span className="text-safety-yellow text-[10px] font-black uppercase tracking-[0.4em]">
                                    Est. 1995 • Industrial Excellence
                                </span>
                            </div>

                            <h1 className="text-[12vw] md:text-[8vw] xl:text-[7vw] font-black leading-[0.8] tracking-tighter uppercase select-none text-center md:text-left">
                                <span className="text-white block">Powering</span>
                                <span className="text-transparent block" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}>Industrial</span>
                                <span className="text-safety-yellow block italic">Futures.</span>
                            </h1>


                            <p className="mt-8 text-base md:text-xl text-white/50 font-medium leading-relaxed max-w-xl mx-auto md:mx-0 text-center md:text-left">
                                Premium electrical infrastructure for the next generation of builders. Authorized dealers for world-class equipment.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-6 mt-12 pb-20 justify-center md:justify-start">
                                <Button asChild size="lg" className="h-16 px-10 rounded-none bg-safety-yellow text-void-black hover:bg-white hover:scale-105 transition-all text-xs font-black uppercase tracking-widest border-b-4 border-black/20">
                                    <Link href="/shop" className="flex items-center gap-2">
                                        Enter Digital Store <ArrowRight className="h-4 w-4" />
                                    </Link>
                                </Button>
                                <Button asChild variant="outline" size="lg" className="h-16 px-10 rounded-none border-white/20 text-white glass hover:bg-white/10 transition-all text-xs font-black uppercase tracking-widest">
                                    <Link href="/shop">Technical Catalog</Link>
                                </Button>
                            </div>
                        </motion.div>
                    </div>


                    {/* Floating Depth Cards (Desktop Only) */}
                    <div className="hidden lg:col-span-4 lg:flex flex-col gap-6 relative">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="glass p-6 rounded-[2rem] border border-white/10 shrink-0 hover:border-safety-yellow/30 transition-colors"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-10 h-10 bg-safety-yellow/10 rounded-full flex items-center justify-center">
                                    <Zap className="h-5 w-5 text-safety-yellow" />
                                </div>
                                <span className="text-white font-black uppercase text-[10px] tracking-widest">Real-time Stock</span>
                            </div>
                            <div className="text-3xl font-black text-white">45k+</div>
                            <div className="text-[9px] text-white/40 uppercase tracking-widest mt-1">Ready to dispatch items</div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 }}
                            className="glass p-6 rounded-[2rem] border border-white/10 shrink-0 translate-x-12 hover:border-safety-yellow/30 transition-colors"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-10 h-10 bg-blue-500/10 rounded-full flex items-center justify-center">
                                    <Shield className="h-5 w-5 text-blue-400" />
                                </div>
                                <span className="text-white font-black uppercase text-[10px] tracking-widest">Warranty</span>
                            </div>
                            <div className="text-3xl font-black text-white">100%</div>
                            <div className="text-[9px] text-white/40 uppercase tracking-widest mt-1">Official Brand Support</div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.9 }}
                            className="glass p-6 rounded-[2rem] border border-white/10 shrink-0 hover:border-safety-yellow/30 transition-colors"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-10 h-10 bg-green-500/10 rounded-full flex items-center justify-center">
                                    <Box className="h-5 w-5 text-green-400" />
                                </div>
                                <span className="text-white font-black uppercase text-[10px] tracking-widest">Logistics</span>
                            </div>
                            <div className="text-3xl font-black text-white">24h</div>
                            <div className="text-[9px] text-white/40 uppercase tracking-widest mt-1">Nationwide Delivery</div>
                        </motion.div>
                    </div>
                </div>
            </Container>

            {/* Background Glows */}
            <div className="absolute top-1/4 -right-1/4 w-[500px] h-[500px] bg-safety-yellow/5 blur-[120px] rounded-full" />
            <div className="absolute bottom-1/4 -left-1/4 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full" />

            {/* Scroll indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-6 right-10 z-30"
            >
                <div className="flex flex-col items-center gap-4">
                    <span className="text-[9px] font-black uppercase tracking-[0.6em] vertical-text text-white/40">Continuity</span>
                    <div className="w-px h-16 bg-gradient-to-b from-safety-yellow/40 via-safety-yellow/10 to-transparent" />
                </div>
            </motion.div>
        </section>
    )
}

