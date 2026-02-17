'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Phone, MapPin, Mail } from 'lucide-react'

export function ContactSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (
        <section ref={ref} id="contact" className="relative min-h-screen bg-void-black py-40 px-6 md:px-12 flex flex-col items-center justify-center overflow-hidden">
            <div className="industrial-texture absolute inset-0 opacity-20" />

            <div className="max-w-6xl mx-auto relative z-10 w-full flex flex-col items-center">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                    transition={{ duration: 1 }}
                    className="text-center mb-32 flex flex-col items-center w-full"
                >
                    <h2 className="text-6xl md:text-9xl font-display font-black text-white mb-8 uppercase tracking-tighter text-center">
                        Let&apos;s <span className="text-industrial-orange">Connect</span>
                    </h2>
                    <p className="text-white/50 text-xl font-light tracking-wide uppercase text-center">
                        Heavy-duty support for your next big project.
                    </p>
                </motion.div>

                {/* Contact Cards */}
                <div className="grid md:grid-cols-3 gap-10 mb-32 w-full">
                    <motion.a
                        href="tel:+919418406051"
                        initial={{ opacity: 0, y: 60 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
                        transition={{ delay: 0.2, duration: 1 }}
                        className="group border border-white/5 p-16 text-center bg-charcoal/40 backdrop-blur-xl hover:border-industrial-orange/30 transition-all duration-700 flex flex-col items-center justify-center"
                    >
                        <Phone className="w-16 h-16 text-industrial-orange mb-10 group-hover:scale-110 transition-transform duration-700" />
                        <div className="text-white/40 text-[10px] tracking-[0.4em] font-black uppercase mb-4 text-center">Voice</div>
                        <div className="text-white text-2xl font-black text-center">+91 94184 06051</div>
                    </motion.a>

                    <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
                        transition={{ delay: 0.4, duration: 1 }}
                        className="group border border-white/5 p-16 text-center bg-charcoal/40 backdrop-blur-xl hover:border-industrial-orange/30 transition-all duration-700 flex flex-col items-center justify-center"
                    >
                        <MapPin className="w-16 h-16 text-industrial-orange mb-10 group-hover:scale-110 transition-transform duration-700" />
                        <div className="text-white/40 text-[10px] tracking-[0.4em] font-black uppercase mb-4 text-center">Location</div>
                        <div className="text-white text-2xl font-black lowercase text-center">Rampur Bushahr</div>
                        <div className="text-industrial-orange/60 text-[10px] tracking-[0.3em] font-black mt-2 uppercase text-center">Himachal Pradesh</div>
                    </motion.div>

                    <motion.a
                        href="mailto:contact@devkinandan.com"
                        initial={{ opacity: 0, y: 60 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
                        transition={{ delay: 0.6, duration: 1 }}
                        className="group border border-white/5 p-16 text-center bg-charcoal/40 backdrop-blur-xl hover:border-industrial-orange/30 transition-all duration-700 flex flex-col items-center justify-center"
                    >
                        <Mail className="w-16 h-16 text-industrial-orange mb-10 group-hover:scale-110 transition-transform duration-700" />
                        <div className="text-white/40 text-[10px] tracking-[0.4em] font-black uppercase mb-4 text-center">Email</div>
                        <div className="text-white text-2xl font-black uppercase tracking-tighter text-center">Direct Inquiry</div>
                    </motion.a>
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 0.8, duration: 1 }}
                    className="text-center flex flex-col items-center w-full"
                >
                    <div className="inline-block border border-industrial-orange/10 p-20 bg-industrial-orange/[0.03] max-w-3xl backdrop-blur-sm text-center flex flex-col items-center">
                        <h3 className="text-5xl font-display text-white mb-8 uppercase tracking-tighter font-black text-center">
                            Request <span className="text-industrial-orange">B2B</span> Quote
                        </h3>
                        <p className="text-white/60 mb-12 text-xl leading-relaxed font-light text-center">
                            Our enterprise team provides personalized logistics and factory-direct
                            pricing for large-scale developments.
                        </p>
                        <a
                            href="tel:+919418406051"
                            className="inline-block px-16 py-6 bg-industrial-orange text-void-black hover:bg-white transition-all duration-500 text-xs tracking-[0.5em] font-black uppercase"
                        >
                            Connect To Sales
                        </a>
                    </div>
                </motion.div>

                {/* Footer */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="mt-40 pt-20 border-t border-white/5 text-center flex flex-col items-center w-full"
                >
                    <div className="text-4xl font-display text-industrial-orange mb-6 font-black tracking-widest text-center">
                        DEVKI NANDAN & SONS
                    </div>
                    <p className="text-white/20 text-[10px] tracking-[0.6em] uppercase font-black text-center">
                        Powering Progress. Since 2008.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}


