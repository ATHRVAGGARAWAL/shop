'use client'

import { motion, useInView, Variants } from 'framer-motion'
import { useRef } from 'react'

export function RevealSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    const fadeInVariants: Variants = {
        hidden: { opacity: 0, y: 60 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.3,
                duration: 1.2,
                ease: [0.16, 1, 0.3, 1]
            }
        })
    }

    return (
        <section ref={ref} className="relative min-h-screen bg-void-black py-40 px-6 md:px-12 flex flex-col items-center justify-center overflow-hidden">
            <div className="industrial-texture absolute inset-0 opacity-20" />

            <div className="max-w-7xl mx-auto relative z-10 w-full flex flex-col items-center">
                {/* Section Intro */}
                <motion.div
                    custom={0}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={fadeInVariants}
                    className="text-center mb-32 w-full flex flex-col items-center"
                >
                    <h2 className="text-6xl md:text-9xl font-display font-black text-white mb-10 uppercase tracking-tighter text-center">
                        Who <span className="text-industrial-orange">We Are</span>
                    </h2>
                    <div className="flex items-center justify-center gap-6">
                        <div className="h-[2px] w-24 bg-industrial-orange/40" />
                        <div className="w-5 h-5 rounded-full border-2 border-industrial-orange animate-pulse" />
                        <div className="h-[2px] w-24 bg-industrial-orange/40" />
                    </div>
                </motion.div>

                {/* Business Details Grid */}
                <div className="grid md:grid-cols-2 gap-16 w-full">
                    <motion.div
                        custom={1}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        variants={fadeInVariants}
                        className="border border-white/5 p-16 bg-charcoal/40 backdrop-blur-xl text-center group hover:border-industrial-orange/20 transition-all duration-500 flex flex-col items-center"
                    >
                        <div className="flex items-center justify-center gap-4 mb-8">
                            <div className="h-[1px] w-8 bg-industrial-orange/50" />
                            <div className="text-industrial-orange text-[10px] tracking-[0.5em] font-black uppercase opacity-80">Mission</div>
                            <div className="h-[1px] w-8 bg-industrial-orange/50" />
                        </div>

                        <h3 className="text-4xl md:text-5xl font-display text-white mb-8 font-black uppercase tracking-tight">
                            Electrical <br className="hidden md:block" /> Wholesaler
                        </h3>
                        <p className="text-white/60 leading-relaxed text-lg mx-auto max-w-sm font-light text-center">
                            Supplying premium industrial and residential electrical materials.
                            We bridge the gap between world-class manufacturing and local projects.
                        </p>
                    </motion.div>

                    <motion.div
                        custom={2}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        variants={fadeInVariants}
                        className="border border-white/5 p-16 bg-charcoal/40 backdrop-blur-xl text-center group hover:border-industrial-orange/20 transition-all duration-500 flex flex-col items-center"
                    >
                        <div className="flex items-center justify-center gap-4 mb-8">
                            <div className="h-[1px] w-8 bg-industrial-orange/50" />
                            <div className="text-industrial-orange text-[10px] tracking-[0.5em] font-black uppercase opacity-80">Location</div>
                            <div className="h-[1px] w-8 bg-industrial-orange/50" />
                        </div>

                        <h3 className="text-4xl md:text-5xl font-display text-white mb-8 font-black uppercase tracking-tight">
                            Rampur <br className="hidden md:block" /> Bushahr
                        </h3>
                        <p className="text-white/60 leading-relaxed text-lg mx-auto max-w-sm font-light text-center">
                            Ideally situated to serve the heart of Himachal Pradesh.
                            Speed, reliability, and local expertise in every shipment.
                        </p>
                    </motion.div>
                </div>

                {/* Key Stats */}
                <motion.div
                    custom={3}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={fadeInVariants}
                    className="grid grid-cols-1 md:grid-cols-3 gap-16 mt-40 w-full"
                >
                    <div className="flex flex-col items-center group">
                        <div className="text-7xl font-display font-black text-industrial-orange mb-4 group-hover:scale-110 transition-transform duration-500">15+</div>
                        <div className="text-white/40 text-[10px] tracking-[0.4em] font-black uppercase">Years Legacy</div>
                    </div>
                    <div className="flex flex-col items-center group">
                        <div className="text-7xl font-display font-black text-industrial-orange mb-4 group-hover:scale-110 transition-transform duration-500">500+</div>
                        <div className="text-white/40 text-[10px] tracking-[0.4em] font-black uppercase">Active SKUs</div>
                    </div>
                    <div className="flex flex-col items-center group">
                        <div className="text-7xl font-display font-black text-industrial-orange mb-4 group-hover:scale-110 transition-transform duration-500">100%</div>
                        <div className="text-white/40 text-[10px] tracking-[0.4em] font-black uppercase">Pure Quality</div>
                    </div>
                </motion.div>
            </div>
        </section>

    )
}

