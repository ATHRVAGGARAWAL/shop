"use client"

import { motion } from "framer-motion"

const brands = [
    "Havells", "Polycab", "Schneider", "Philips", "Siemens", "Finolex", "Anchor", "L&T", "Legrand", "Wipro"
]

export function BrandMarquee() {
    return (
        <div className="bg-industrial-blue py-10 overflow-hidden border-y border-white/5">
            <div className="flex whitespace-nowrap">
                <motion.div
                    initial={{ x: 0 }}
                    animate={{ x: "-50%" }}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="flex gap-16 items-center px-8"
                >
                    {[...brands, ...brands].map((brand, index) => (
                        <span
                            key={index}
                            className="text-white/40 text-2xl md:text-3xl font-black uppercase tracking-[0.2em] italic hover:text-amber-500 transition-colors cursor-default"
                        >
                            {brand}
                        </span>
                    ))}
                </motion.div>
            </div>
        </div>
    )
}
