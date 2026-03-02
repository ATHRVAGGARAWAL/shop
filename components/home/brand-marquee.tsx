"use client"

import { motion } from "framer-motion"

const brands = [
    "Havells", "Polycab", "Schneider", "Philips", "Siemens", "Finolex", "Anchor", "L&T", "Legrand", "Wipro"
]

export function BrandMarquee() {
    return (
        <div className="bg-slate-50 py-12 overflow-hidden border-y border-slate-100">
            <div className="flex whitespace-nowrap">
                <motion.div
                    initial={{ x: 0 }}
                    animate={{ x: "-50%" }}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="flex gap-20 items-center px-8"
                >
                    {[...brands, ...brands].map((brand, index) => (
                        <span
                            key={index}
                            className="text-blue-600/20 text-3xl md:text-5xl font-black uppercase tracking-[0.3em] transition-colors cursor-default"
                        >
                            {brand}
                        </span>
                    ))}
                </motion.div>
            </div>
        </div>
    )
}
