'use client'

import { motion, useScroll, useTransform } from 'framer-motion'

export function LampHero() {
    const { scrollY } = useScroll()

    // Smooth transforms for a premium feel
    const lampOpacity = useTransform(scrollY, [0, 400], [1, 0])
    const textY = useTransform(scrollY, [0, 400], [0, -50])
    const beamScale = useTransform(scrollY, [0, 300], [1, 1.2])

    return (
        <section className="relative h-screen w-full bg-void-black overflow-hidden flex items-center justify-center">
            {/* Industrial Texture Overlay */}
            <div className="industrial-texture absolute inset-0 z-0" />

            {/* Dark Gradient Overlay for Depth */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-void-black/40 to-void-black z-1" />

            {/* Hanging Lamp - Modern Right Alignment */}
            <motion.div
                className="absolute top-0 right-[5%] md:right-[15%] z-20 h-full pointer-events-none"
                style={{ opacity: lampOpacity }}
            >
                {/* Lamp Cord - Shortened to prevent overlapping text */}
                <div className="w-[1px] h-32 bg-gradient-to-b from-dark-grey via-industrial-orange/20 to-industrial-orange/40 mx-auto" />

                {/* Lamp Head */}
                <div className="relative">
                    <div className="w-20 h-24 mx-auto relative">
                        {/* Industrial Housing */}
                        <svg
                            viewBox="0 0 100 120"
                            className="w-full h-full drop-shadow-[0_0_15px_rgba(255,106,0,0.3)]"
                        >
                            <path
                                d="M 35 10 L 15 80 L 85 80 L 65 10 Z"
                                fill="#0a0a0a"
                                stroke="#222"
                                strokeWidth="2"
                            />
                            {/* Orange Glow Source */}
                            <ellipse
                                cx="50"
                                cy="75"
                                rx="30"
                                ry="6"
                                fill="#ff6a00"
                                className="animate-pulse"
                            />
                            <circle cx="50" cy="55" r="10" fill="#ff6a00" opacity="0.9" />
                        </svg>
                    </div>

                    {/* Spotlight Beam - Angled perfectly at the center logo */}
                    <motion.div
                        style={{ scaleY: beamScale }}
                        className="absolute top-[80%] left-1/2 -translate-x-full origin-top -rotate-[30deg]"
                    >
                        <div
                            className="w-[1200px] h-[1400px] opacity-30 md:opacity-45"
                            style={{
                                background: 'radial-gradient(ellipse at top, rgba(255, 106, 0, 0.5) 0%, transparent 70%)',
                                clipPath: 'polygon(48% 0%, 52% 0%, 100% 100%, 0% 100%)',
                            }}
                        />
                    </motion.div>
                </div>
            </motion.div>

            {/* Business Name - Centered & Bold */}
            <motion.div
                className="relative z-10 w-full flex flex-col items-center justify-center text-center px-6"
                style={{ y: textY, opacity: lampOpacity }}
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full flex flex-col items-center"
                >
                    <h1 className="text-7xl md:text-9xl font-display font-black text-white tracking-tighter leading-[0.85] text-center w-full">
                        DEVKI <span className="text-industrial-orange">NANDAN</span>
                        <br />
                        <span className="text-white/90">& SONS</span>
                    </h1>

                    <div className="mt-12 flex items-center justify-center gap-6">
                        <div className="h-[2px] w-12 bg-industrial-orange/40" />
                        <p className="text-lg md:text-xl text-industrial-orange font-black tracking-[0.5em] uppercase">
                            Premium Electricals
                        </p>
                        <div className="h-[2px] w-12 bg-industrial-orange/40" />
                    </div>
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 text-center"
            >
                <div className="w-[1px] h-24 bg-gradient-to-b from-industrial-orange to-transparent mx-auto" />
                <p className="mt-4 text-[10px] text-industrial-orange font-bold tracking-[0.5em] uppercase">
                    Scroll
                </p>
            </motion.div>
        </section>
    )
}
