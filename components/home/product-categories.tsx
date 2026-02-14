"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { Cable, Lightbulb, Zap, Settings, ShieldCheck, Box, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

const categories = [
    {
        title: "Wires & Cables",
        icon: Cable,
        description: "High-grade copper/aluminum wires for domestic & industrial use.",
        color: "bg-blue-100 text-blue-600",
    },
    {
        title: "Switchgears",
        icon: Zap,
        description: "MCBs, RCCBs, and distribution boards for complete safety.",
        color: "bg-yellow-100 text-yellow-600",
    },
    {
        title: "Lighting Solutions",
        icon: Lightbulb,
        description: "Energy-efficient LED panels, floodlights, and street lights.",
        color: "bg-amber-100 text-amber-600",
    },
    {
        title: "Conduits & Pipes",
        icon: Box,
        description: "PVC & steel conduits ensuring long-lasting protection.",
        color: "bg-slate-100 text-slate-600",
    },
    {
        title: "Industrial Fittings",
        icon: Settings,
        description: "Heavy-duty plugs, sockets, and cable glands.",
        color: "bg-indigo-100 text-indigo-600",
    },
    {
        title: "Safety Accessories",
        icon: ShieldCheck,
        description: "Earthing materials, tapes, and protective gear.",
        color: "bg-green-100 text-green-600",
    },
]

export function ProductCategories() {
    return (
        <Section id="products" className="bg-slate-50 relative overflow-hidden">
            {/* Decorative background element */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-industrial-blue/5 rounded-full blur-3xl pointer-events-none" />

            <Container>
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-extrabold text-industrial-blue tracking-tight uppercase sm:text-4xl mb-3">
                        Shop by Category
                    </h2>
                    <p className="text-slate-500 max-w-2xl mx-auto font-medium">
                        Comprehensive electrical solutions for residential, commercial, and industrial requirements.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Link href={`/shop?category=${encodeURIComponent(category.title)}`}>
                                <Card className="h-full border-none shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-500 group cursor-pointer bg-white overflow-hidden relative">
                                    <div className="absolute top-0 right-0 p-6 opacity-[0.03] group-hover:scale-110 group-hover:opacity-[0.08] transition-all duration-700">
                                        <category.icon className="h-24 w-24" />
                                    </div>

                                    <CardHeader className="relative z-10 pb-2">
                                        <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${category.color} group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-sm shadow-black/5`}>
                                            <category.icon className="h-7 w-7" />
                                        </div>
                                        <CardTitle className="text-xl font-black text-industrial-blue uppercase tracking-tight group-hover:text-amber-600 transition-colors">
                                            {category.title}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="relative z-10 pt-0">
                                        <p className="text-slate-500 text-sm leading-relaxed font-semibold mb-6">
                                            {category.description}
                                        </p>
                                        <div className="flex items-center gap-2 text-industrial-blue font-bold text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-500">
                                            View Collection <ArrowRight className="h-3 w-3" />
                                        </div>
                                    </CardContent>
                                </Card>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </Section>
    )
}
