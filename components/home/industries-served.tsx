"use client"

import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { Building2, Factory, Home, Hammer } from "lucide-react"
import { motion } from "framer-motion"

export function IndustriesServed() {
    const industries = [
        {
            icon: Home,
            title: "Residential",
            description: "Homes, apartments, and housing societies",
        },
        {
            icon: Building2,
            title: "Commercial",
            description: "Offices, retail spaces, and shopping complexes",
        },
        {
            icon: Factory,
            title: "Industrial",
            description: "Manufacturing plants and production facilities",
        },
        {
            icon: Hammer,
            title: "Infrastructure",
            description: "Roads, bridges, and public works projects",
        },
    ]

    return (
        <Section id="industries" className="bg-white">
            <Container>
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-industrial-blue mb-4">
                        Industries We Serve
                    </h2>
                    <p className="text-slate-600">
                        Trusted by contractors, builders, and engineers across multiple sectors.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {industries.map((industry, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 p-8 hover:shadow-xl transition-all border border-slate-200 hover:border-safety-yellow/50"
                        >
                            <div className="relative z-10">
                                <div className="mb-4 inline-flex p-3 rounded-lg bg-white shadow-sm group-hover:bg-safety-yellow group-hover:text-industrial-blue transition-colors">
                                    <industry.icon className="h-8 w-8 text-industrial-blue group-hover:text-industrial-blue" />
                                </div>
                                <h3 className="text-xl font-bold text-industrial-blue mb-2">
                                    {industry.title}
                                </h3>
                                <p className="text-sm text-slate-600">
                                    {industry.description}
                                </p>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-br from-safety-yellow/0 to-safety-yellow/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </motion.div>
                    ))}
                </div>
            </Container>
        </Section>
    )
}
