'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export function AboutSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (
        <section ref={ref} className="relative min-h-screen bg-charcoal py-32 px-6 md:px-12">
            <div className="industrial-texture absolute inset-0 opacity-10" />

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                    transition={{ duration: 1 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-5xl md:text-7xl font-display font-bold text-warm-white mb-6">
                        Our Legacy
                    </h2>
                    <div className="w-24 h-1 bg-electric-yellow mx-auto" />
                </motion.div>

                {/* Story Content */}
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
                        transition={{ duration: 1.2, delay: 0.2 }}
                    >
                        <div className="text-electric-yellow text-sm tracking-widest mb-6">SINCE 2008</div>
                        <h3 className="text-4xl font-display font-bold text-warm-white mb-6 leading-tight">
                            A Family Business Built on Trust
                        </h3>
                        <p className="text-warm-white/70 leading-relaxed mb-6">
                            For over 15 years, DEVKI NANDAN & SONS has been the cornerstone of electrical
                            supply in Rampur Bushahr. What started as a small family venture has grown into
                            a trusted name across Himachal Pradesh.
                        </p>
                        <p className="text-warm-white/70 leading-relaxed">
                            We believe in honest business, quality products, and lasting relationships.
                            Every wire, every switch, every fitting we supply carries our family&apos;s commitment
                            to excellence.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
                        transition={{ duration: 1.2, delay: 0.4 }}
                        className="space-y-6"
                    >
                        {/* Value Props */}
                        <div className="border-l-2 border-electric-yellow pl-6">
                            <h4 className="text-xl font-display text-warm-white mb-2">Experience</h4>
                            <p className="text-warm-white/60 text-sm">
                                Decades of expertise in electrical goods and deep industry knowledge
                            </p>
                        </div>
                        <div className="border-l-2 border-electric-yellow pl-6">
                            <h4 className="text-xl font-display text-warm-white mb-2">Consistency</h4>
                            <p className="text-warm-white/60 text-sm">
                                Reliable supply chain ensuring products are always available when you need them
                            </p>
                        </div>
                        <div className="border-l-2 border-electric-yellow pl-6">
                            <h4 className="text-xl font-display text-warm-white mb-2">Trust</h4>
                            <p className="text-warm-white/60 text-sm">
                                Built on transparency, fair pricing, and genuine products from authorized brands
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
