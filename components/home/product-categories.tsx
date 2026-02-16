"use client"

import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { Cable, Lightbulb, Zap, Settings, ShieldCheck, Box, ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import Link from "next/link"

const categories = [
    {
        title: "Wires & Cables",
        icon: Cable,
        count: "1,200+ Products",
        color: "from-blue-500 to-cyan-500",
        size: "md:col-span-2 md:row-span-2",
        image: "https://images.unsplash.com/photo-1558444479-5c742c3d10a3?auto=format&fit=crop&q=80&w=600"
    },
    {
        title: "Switchgears",
        icon: Zap,
        count: "800+ Products",
        color: "from-yellow-400 to-orange-500",
        size: "md:col-span-2 md:row-span-1",
        image: "https://images.unsplash.com/photo-1498084393753-b411b2d26b34?auto=format&fit=crop&q=80&w=600"
    },
    {
        title: "Lighting",
        icon: Lightbulb,
        count: "2,500+ Products",
        color: "from-amber-300 to-yellow-500",
        size: "md:col-span-1 md:row-span-1",
        image: "https://images.unsplash.com/photo-1517076731070-13c65bcb2e8a?auto=format&fit=crop&q=80&w=600"
    },
    {
        title: "Industrial",
        icon: Settings,
        count: "450+ Products",
        color: "from-indigo-500 to-purple-600",
        size: "md:col-span-1 md:row-span-2",
        image: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=600"
    },
    {
        title: "Conduits",
        icon: Box,
        count: "300+ Products",
        color: "from-slate-400 to-slate-600",
        size: "md:col-span-2 md:row-span-1",
        image: "https://images.unsplash.com/photo-1544724569-5f546fa662b5?auto=format&fit=crop&q=80&w=600"
    },
    {
        title: "Safety",
        icon: ShieldCheck,
        count: "150+ Products",
        color: "from-green-400 to-emerald-600",
        size: "md:col-span-1 md:row-span-1",
        image: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&q=80&w=600"
    },
]

export function ProductCategories() {
    return (
        <Section id="categories" className="bg-white overflow-hidden py-32">
            <Container>
                <div className="flex flex-col md:flex-row items-center md:items-end justify-between mb-20 gap-8 text-center md:text-left">
                    <div className="max-w-2xl mx-auto md:mx-0">
                        <div className="flex items-center gap-3 mb-6 justify-center md:justify-start">
                            <div className="w-12 h-1 bg-industrial-blue rounded-full" />
                            <span className="text-industrial-blue text-xs font-black uppercase tracking-[0.3em]">Master Collections</span>
                        </div>
                        <h2 className="text-5xl md:text-7xl font-black text-industrial-blue tracking-tighter uppercase leading-[0.9]">
                            Advanced <br /> <span className="text-accent-blue italic">Categories.</span>
                        </h2>
                    </div>
                    <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px] max-w-[200px] border-l border-slate-200 pl-6 leading-relaxed mx-auto md:mx-0 hidden md:block">
                        Precision-engineered solutions for high-voltage infrastructure and retail excellence.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
                    {categories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className={cn(
                                "group relative rounded-[2.5rem] overflow-hidden border border-slate-100 hover:modern-shadow transition-all duration-700",
                                category.size
                            )}
                        >
                            <Link href={`/shop?category=${encodeURIComponent(category.title)}`} className="block h-full w-full relative">
                                {/* Background Image/Gradient */}
                                <div className="absolute inset-0">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
                                    <img src={category.image} alt={category.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                                </div>

                                <div className="absolute inset-0 z-20 p-8 flex flex-col justify-between">
                                    <div className="flex justify-between items-start">
                                        <div className={cn(
                                            "w-14 h-14 rounded-2xl flex items-center justify-center text-white modern-shadow transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-12",
                                            "bg-gradient-to-br " + category.color
                                        )}>
                                            <category.icon className="h-7 w-7" />
                                        </div>
                                        <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all backdrop-blur-sm bg-white/10">
                                            <ArrowUpRight className="h-4 w-4 text-white" />
                                        </div>
                                    </div>

                                    <div>
                                        <div className="text-[9px] font-black uppercase tracking-[0.2em] text-white/60 group-hover:text-white transition-colors mb-2">
                                            {category.count}
                                        </div>
                                        <h3 className="text-2xl font-black uppercase tracking-tight leading-none text-white">
                                            {category.title}
                                        </h3>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </Section>
    )
}
