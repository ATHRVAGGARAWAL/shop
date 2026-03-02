"use client"

import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { Truck, RotateCcw, ShieldCheck, Headset } from "lucide-react"
import { motion } from "framer-motion"

const features = [
    {
        title: "Free Shipping",
        description: "On orders over ₹999",
        icon: Truck
    },
    {
        title: "Money Back",
        description: "30 days money back guarantee",
        icon: RotateCcw
    },
    {
        title: "Authenticity",
        description: "100% Genuine Products",
        icon: ShieldCheck
    },
    {
        title: "24/7 Support",
        description: "Dedicated customer support",
        icon: Headset
    }
]

export function WhyChooseUs() {
    return (
        <Section className="bg-slate-50 py-24">
            <Container>
                <div className="text-center mb-16">
                    <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                        Why Shop With Us?
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="text-center group"
                        >
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#0055eb] transition-all duration-500 group-hover:scale-110">
                                <feature.icon className="h-8 w-8 text-[#0055eb] group-hover:text-white transition-colors duration-500" />
                            </div>
                            <h3 className="text-lg font-black text-slate-900 mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-sm font-medium text-slate-500">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </Section>
    )
}
