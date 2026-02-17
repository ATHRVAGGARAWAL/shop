'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Star, Quote } from 'lucide-react'

const testimonials = [
    {
        name: 'Rajesh Kumar',
        role: 'Chief Contractor',
        text: 'Reliable quality and prompt delivery. DEVKI NANDAN & SONS has been our go-to supplier for over 15 years.',
        rating: 5
    },
    {
        name: 'Amit Sharma',
        role: 'Lead Architect',
        text: 'Exceptional product range and knowledgeable staff. They understand complex project needs perfectly.',
        rating: 5
    },
    {
        name: 'Priya Verma',
        role: 'Building Developer',
        text: 'Trustworthy and professional. Always get genuine factory-direct products at competitive prices.',
        rating: 5
    }
]

export function ReviewsSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (
        <section ref={ref} className="relative min-h-screen bg-void-black py-40 px-6 md:px-12 flex flex-col items-center justify-center overflow-hidden">
            <div className="industrial-texture absolute inset-0 opacity-20" />

            <div className="max-w-7xl mx-auto relative z-10 w-full flex flex-col items-center">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                    transition={{ duration: 1 }}
                    className="text-center mb-32 flex flex-col items-center w-full"
                >
                    <div className="flex items-center justify-center gap-2 mb-10">
                        <Star className="w-10 h-10 fill-industrial-orange text-industrial-orange" />
                        <span className="text-7xl font-display font-black text-industrial-orange">4.9</span>
                        <Star className="w-10 h-10 fill-industrial-orange text-industrial-orange" />
                    </div>
                    <h2 className="text-6xl md:text-9xl font-display font-black text-white mb-8 uppercase tracking-tighter text-center">
                        Market <span className="text-industrial-orange">Trust</span>
                    </h2>
                    <p className="text-white/50 text-xl font-light tracking-wide uppercase text-center">
                        Voices of our long-term partners
                    </p>
                </motion.div>

                {/* Testimonials Grid */}
                <div className="grid md:grid-cols-3 gap-10 w-full">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.name}
                            initial={{ opacity: 0, y: 60 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
                            transition={{
                                delay: index * 0.2,
                                duration: 1,
                                ease: [0.16, 1, 0.3, 1] as [number, number, number, number]
                            }}
                            className="relative border border-white/5 p-16 bg-charcoal/40 backdrop-blur-xl text-center flex flex-col items-center justify-center group hover:border-industrial-orange/30 transition-all duration-700"
                        >
                            {/* Quote Icon */}
                            <Quote className="w-16 h-16 text-industrial-orange/10 mb-10 group-hover:text-industrial-orange/20 transition-colors" />

                            {/* Rating */}
                            <div className="flex gap-2 mb-8 items-center justify-center">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-6 h-6 fill-industrial-orange text-industrial-orange" />
                                ))}
                            </div>

                            {/* Testimonial Text */}
                            <p className="text-white/70 text-lg leading-relaxed mb-10 italic font-light text-center">
                                &ldquo;{testimonial.text}&rdquo;
                            </p>

                            {/* Author */}
                            <div className="border-t border-white/5 pt-10 w-full flex flex-col items-center">
                                <div className="font-black text-white text-2xl uppercase tracking-tighter text-center">{testimonial.name}</div>
                                <div className="text-industrial-orange/60 text-[10px] tracking-[0.3em] font-black mt-2 uppercase text-center">{testimonial.role}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Trust Indicators */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 0.8, duration: 1 }}
                    className="mt-40 text-center flex flex-col items-center w-full"
                >
                    <div className="inline-grid grid-cols-1 md:grid-cols-3 gap-20 px-20 py-12 border border-industrial-orange/10 bg-industrial-orange/[0.03]">
                        <div className="flex flex-col items-center justify-center">
                            <div className="text-6xl font-display font-black text-industrial-orange text-center">1k+</div>
                            <div className="text-white/30 text-[10px] tracking-[0.4em] font-black uppercase mt-4 text-center">Happy Clients</div>
                        </div>
                        <div className="flex flex-col items-center justify-center md:border-x border-white/5 px-20">
                            <div className="text-6xl font-display font-black text-industrial-orange text-center">15+</div>
                            <div className="text-white/30 text-[10px] tracking-[0.4em] font-black uppercase mt-4 text-center">Years Legacy</div>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <div className="text-6xl font-display font-black text-industrial-orange text-center">100%</div>
                            <div className="text-white/30 text-[10px] tracking-[0.4em] font-black uppercase mt-4 text-center">OEM Quality</div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}


