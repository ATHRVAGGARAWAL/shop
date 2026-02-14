'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Cable, Lightbulb, Plug, Zap } from 'lucide-react'

const categories = [
    {
        icon: Cable,
        title: 'Wires & Cables',
        description: 'Premium quality electrical wiring solutions for all applications.'
    },
    {
        icon: Plug,
        title: 'Switches & Sockets',
        description: 'Modern, durable switches and power outlets from trusted brands.'
    },
    {
        icon: Lightbulb,
        title: 'LED Lighting',
        description: 'Energy-efficient fixtures, bulbs, and industrial lighting solutions.'
    },
    {
        icon: Zap,
        title: 'Electrical Fittings',
        description: 'Connectors, panels, and accessories for heavy infrastructure.'
    }
]

export function ProductsSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-150px" })

    return (
        <section ref={ref} className="relative min-h-screen bg-charcoal py-40 px-6 md:px-12 flex flex-col items-center justify-center overflow-hidden">
            <div className="industrial-texture absolute inset-0 opacity-10" />

            <div className="max-w-7xl mx-auto relative z-10 w-full flex flex-col items-center">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                    transition={{ duration: 1 }}
                    className="text-center mb-32 flex flex-col items-center w-full"
                >
                    <h2 className="text-6xl md:text-9xl font-display font-black text-white mb-8 uppercase tracking-tighter text-center">
                        Our <span className="text-industrial-orange">Inventory</span>
                    </h2>
                    <p className="text-white/50 text-xl max-w-2xl mx-auto font-light tracking-wide uppercase text-center">
                        Precision-engineered solutions for high-performance projects.
                    </p>
                </motion.div>

                {/* Product Categories Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 w-full">
                    {categories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 60 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
                            transition={{
                                delay: index * 0.2,
                                duration: 1,
                                ease: [0.16, 1, 0.3, 1] as [number, number, number, number]
                            }}
                            className="group relative border border-white/5 p-16 bg-void-black/80 backdrop-blur-xl hover:border-industrial-orange/30 transition-all duration-700 text-center flex flex-col items-center justify-center"
                        >
                            {/* Icon */}
                            <div className="mb-10 p-6 bg-white/5 rounded-full group-hover:bg-industrial-orange/10 transition-colors duration-700 flex items-center justify-center">
                                <category.icon
                                    className="w-16 h-16 text-industrial-orange group-hover:scale-110 transition-transform duration-700"
                                    strokeWidth={1}
                                />
                            </div>

                            {/* Content */}
                            <h3 className="text-2xl font-display text-white mb-6 group-hover:text-industrial-orange transition-colors duration-700 uppercase tracking-widest font-black text-center">
                                {category.title}
                            </h3>
                            <p className="text-white/40 text-sm leading-relaxed max-w-[220px] font-light italic text-center">
                                {category.description}
                            </p>

                            {/* Hover Glow Effect */}
                            <div className="absolute inset-0 bg-industrial-orange/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="text-center mt-32 flex flex-col items-center w-full"
                >
                    <a
                        href="#contact"
                        className="group relative inline-block px-16 py-6 border border-industrial-orange text-industrial-orange hover:bg-industrial-orange hover:text-void-black transition-all duration-500 text-xs tracking-[0.5em] font-black uppercase overflow-hidden"
                    >
                        <span className="relative z-10 font-black">Download Catalog</span>
                    </a>
                </motion.div>
            </div>
        </section>
    )
}


