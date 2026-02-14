"use client"

import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { CheckCircle2 } from "lucide-react"
import { motion } from "framer-motion"

export function AboutPreview() {
    const stats = [
        { label: "Years Experience", value: "20+" },
        { label: "Products Available", value: "5000+" },
        { label: "Projects Served", value: "1500+" },
        { label: "Happy Clients", value: "98%" },
    ]

    return (
        <Section className="bg-white">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-industrial-blue">
                            Reliable Electrical Solutions For Every Scale
                        </h2>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            At Devki Nandan And Sons, we believe that quality is the current that powers success. For over two decades, we have been the trusted bridge between top-tier manufacturers and the engineers, builders, and contractors who build our world.
                        </p>
                        <ul className="space-y-4">
                            {[
                                "Authorized distributors for leading brands",
                                "Wide range of industrial and domestic products",
                                "Committed to timely delivery and authentic quality",
                            ].map((item, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-center gap-3 text-slate-700 font-medium"
                                >
                                    <CheckCircle2 className="h-5 w-5 text-safety-yellow shrink-0" />
                                    {item}
                                </motion.li>
                            ))}
                        </ul>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-slate-50 p-6 rounded-lg border border-slate-100 text-center hover:border-safety-yellow/50 transition-colors"
                            >
                                <div className="text-4xl font-bold text-industrial-blue mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-sm font-medium text-slate-500 uppercase tracking-wide">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Container>
        </Section>
    )
}
