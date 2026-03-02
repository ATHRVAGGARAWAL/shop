"use client"

import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { Cable, Lightbulb, Zap, Settings, ShieldCheck, Box, ArrowUpRight, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import Link from "next/link"

const categories = [
    {
        title: "Switches",
        subtitle: "Modular & Stylish Designs",
        icon: Zap,
        href: "/shop?category=Switches"
    },
    {
        title: "LED Bulbs",
        subtitle: "Energy Efficient Lighting",
        icon: Lightbulb,
        href: "/shop?category=Lighting"
    },
    {
        title: "Wires",
        subtitle: "FR & High Conductivity",
        icon: Cable,
        href: "/shop?category=Wires"
    },
    {
        title: "Smart Home",
        subtitle: "Connected Automation",
        icon: Box,
        href: "/shop?category=Smart Home"
    }
]

export function ProductCategories() {
    return (
        <Section id="categories" className="bg-[#fcfdfe] py-24">
            <Container>
                {/* Header */}
                <div className="flex items-center justify-between mb-12">
                    <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                        Shop by Category
                    </h2>
                    <Link
                        href="/shop"
                        className="text-sm font-bold text-[#0055eb] hover:underline flex items-center gap-2 transition-all"
                    >
                        Browse all categories <ChevronRight className="h-4 w-4" />
                    </Link>
                </div>

                {/* Categories Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {categories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Link
                                href={category.href}
                                className="group block bg-white border border-slate-100 rounded-[2rem] p-8 text-center hover:shadow-xl hover:shadow-blue-600/5 hover:-translate-y-1 transition-all duration-500"
                            >
                                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#0055eb] transition-colors duration-500">
                                    <category.icon className="h-7 w-7 text-[#0055eb] group-hover:text-white transition-colors duration-500" />
                                </div>
                                <h3 className="text-lg font-black text-slate-900 mb-2">
                                    {category.title}
                                </h3>
                                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest px-2">
                                    {category.subtitle}
                                </p>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </Section>
    )
}
