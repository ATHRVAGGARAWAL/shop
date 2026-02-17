"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { Container } from "@/components/ui/container"

const stats = [
    { label: "Years in Business", value: 30, suffix: "+", desc: "Legacy of trust since 1995" },
    { label: "Authorized Brands", value: 15, suffix: "+", desc: "Direct distribution partner" },
    { label: "Bulk Inventory", value: 100, suffix: "K+", desc: "SKUs ready for dispatch" },
    { label: "Service Area", value: 50, suffix: "+", desc: "Cities across India" },
]

function Counter({ value, suffix }: { value: number; suffix: string }) {
    const [count, setCount] = useState(0)
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    useEffect(() => {
        if (isInView) {
            let start = 0
            const end = value
            const duration = 2000
            const increment = end / (duration / 16)

            const timer = setInterval(() => {
                start += increment
                if (start >= end) {
                    setCount(end)
                    clearInterval(timer)
                } else {
                    setCount(Math.floor(start))
                }
            }, 16)

            return () => clearInterval(timer)
        }
    }, [isInView, value])

    return (
        <span ref={ref} className="font-industrial text-4xl md:text-6xl text-industrial-amber">
            {count}{suffix}
        </span>
    )
}

export function TrustStats() {
    return (
        <section className="bg-matte-black py-32 border-y border-white/5 relative overflow-hidden">
            {/* Background Blueprint element */}
            <div className="absolute left-0 top-0 w-full h-full blueprint-grid opacity-10 pointer-events-none" />

            <Container>
                <div className="mb-20">
                    <span className="font-technical text-industrial-amber text-xs tracking-[0.5em] uppercase mb-4 block">
                        Verification Protocol
                    </span>
                    <h2 className="font-industrial text-3xl md:text-5xl text-white uppercase tracking-tighter">
                        Why Contractors <br /> Choose Our Infrastructure
                    </h2>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-20">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="flex flex-col"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className="h-[1px] w-8 bg-industrial-amber/30" />
                                <span className="font-technical text-[10px] text-white/40 uppercase tracking-widest whitespace-nowrap">
                                    Metric 0{index + 1}
                                </span>
                            </div>
                            <Counter value={stat.value} suffix={stat.suffix} />
                            <p className="font-industrial text-xs text-white/80 mt-4 tracking-wider uppercase">
                                {stat.label}
                            </p>
                            <p className="font-technical text-[10px] text-white/30 mt-2 tracking-widest uppercase mb-8">
                                {stat.desc}
                            </p>

                            <div className="mt-auto flex gap-1 h-1">
                                {[1, 2, 3, 4, 5, 6].map(i => (
                                    <div key={i} className={`flex-grow ${i <= (index + 2) ? 'bg-industrial-amber/50' : 'bg-white/5'}`} />
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex gap-12">
                        <div className="flex flex-col">
                            <span className="font-technical text-[10px] text-white/20 uppercase tracking-widest mb-2">Auth Level</span>
                            <span className="font-industrial text-xs text-white/60 tracking-wider uppercase">Tier 1 Distributor</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-technical text-[10px] text-white/20 uppercase tracking-widest mb-2">Response Time</span>
                            <span className="font-industrial text-xs text-white/60 tracking-wider uppercase">&lt; 4 Hours</span>
                        </div>
                    </div>

                    <div className="px-6 py-3 border border-industrial-amber/20 bg-industrial-amber/5 rounded-none">
                        <span className="font-technical text-[10px] text-industrial-amber uppercase tracking-[0.4em]">
                            Authorized Partnership Protocol Active
                        </span>
                    </div>
                </div>
            </Container>
        </section>
    )
}
