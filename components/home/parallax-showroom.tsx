"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const items = [
    {
        title: "Precision Switches",
        desc: "Engineered for high-frequency industrial use cases.",
        image: "https://images.unsplash.com/photo-1558444479-7a00d73771a8?auto=format&fit=crop&q=80",
        id: "switches"
    },
    {
        title: "High-Tension Cables",
        desc: "Scaling infrastructure with zero-loss transmission.",
        image: "https://images.unsplash.com/photo-1617470702892-e01504297e84?auto=format&fit=crop&q=80",
        id: "cables"
    },
    {
        title: "Smart Control Panels",
        desc: "Automation meets legacy reliability.",
        image: "https://images.unsplash.com/photo-1581092334651-ddf26d9a1930?auto=format&fit=crop&q=80",
        id: "panels"
    }
]

export function ParallaxShowroom() {
    const containerRef = useRef<HTMLDivElement>(null)

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    })

    return (
        <section ref={containerRef} className="relative bg-matte-black py-40">
            <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">
                {items.map((item, index) => {
                    const start = index / items.length
                    const end = (index + 1) / items.length

                    // eslint-disable-next-line react-hooks/rules-of-hooks
                    const opacity = useTransform(scrollYProgress, [start, start + 0.1, end - 0.1, end], [0, 1, 1, 0])
                    // eslint-disable-next-line react-hooks/rules-of-hooks
                    const scale = useTransform(scrollYProgress, [start, end], [1.1, 1])
                    // eslint-disable-next-line react-hooks/rules-of-hooks
                    const y = useTransform(scrollYProgress, [start, end], [100, -100])

                    return (
                        <motion.div
                            key={item.id}
                            style={{ opacity }}
                            className="absolute inset-0 w-full h-full flex items-center justify-center p-8 md:p-24"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full max-w-7xl">
                                <motion.div style={{ y }} className="order-2 md:order-1">
                                    <span className="font-technical text-industrial-amber text-xs tracking-[0.5em] uppercase mb-4 block">
                                        System Unit 0{index + 1}
                                    </span>
                                    <h2 className="font-industrial text-4xl md:text-6xl text-white uppercase tracking-tighter mb-6">
                                        {item.title}
                                    </h2>
                                    <p className="text-white/40 max-w-md font-body text-lg leading-relaxed mb-8">
                                        {item.desc}
                                    </p>
                                    <div className="flex gap-4">
                                        <div className="h-[2px] w-20 bg-white/10" />
                                        <span className="font-technical text-[10px] text-white/20 uppercase tracking-widest">
                                            Showroom Environment Active
                                        </span>
                                    </div>
                                </motion.div>

                                <motion.div
                                    style={{ scale }}
                                    className="relative aspect-video md:aspect-square order-1 md:order-2 group"
                                >
                                    <div className="absolute inset-0 bg-industrial-amber/10 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                    <div className="absolute inset-0 border border-white/5 group-hover:border-industrial-amber/30 transition-colors duration-700 z-20" />

                                    {/* Tactical Corners */}
                                    <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-industrial-amber/0 group-hover:border-industrial-amber/50 transition-all z-30" />
                                    <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-industrial-amber/0 group-hover:border-industrial-amber/50 transition-all z-30" />

                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                                    />

                                    {/* Floating Specs (Subtle) */}
                                    <div className="absolute -right-8 top-1/2 -translate-y-1/2 vertical-text hidden xl:block">
                                        <span className="font-technical text-[8px] text-white/10 uppercase tracking-[0.8em]">
                                            Industrial Grade • Spec 74.2
                                        </span>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    )
                })}
            </div>

            {/* Scroll Extender to enable sticky behavior */}
            <div className="h-[300vh]" />
        </section>
    )
}
