"use client"

import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { Award, Truck, ShieldCheck, Users } from "lucide-react"
import { motion } from "framer-motion"

const features = [
    {
        title: "40+ Years Experience",
        description: "Established in 1984, bringing decades of expertise to every electrical project.",
        icon: Award,
        color: "text-amber-600",
        bgColor: "bg-amber-50",
    },
    {
        title: "Bulk Supply Specialist",
        description: "Robust inventory management and fulfillment for large-scale industrial requirements.",
        icon: Truck,
        color: "text-blue-600",
        bgColor: "bg-blue-50",
    },
    {
        title: "Certified Quality",
        description: "Authorized dealer for leading brands including Havells, Polycab, and Schneider.",
        icon: ShieldCheck,
        color: "text-green-600",
        bgColor: "bg-green-50",
    },
    {
        title: "Expert Consultation",
        description: "Dedicated account managers providing technical guidance for complex installations.",
        icon: Users,
        color: "text-slate-600",
        bgColor: "bg-slate-100",
    }
]

export function WhyChooseUs() {
    return (
        <Section className="bg-slate-50">
            <Container>
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-extrabold text-industrial-blue tracking-tight uppercase sm:text-4xl mb-4">
                        Why Choose Devki Nandan & Sons
                    </h2>
                    <div className="w-20 h-1.5 bg-amber-600 mx-auto rounded-full mb-6"></div>
                    <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                        We don&apos;t just sell products; we provide reliability and stability for your electrical infrastructure.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow group h-full flex flex-col items-center text-center"
                        >
                            <div className={`w-16 h-16 ${feature.bgColor} ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                <feature.icon className="h-8 w-8" />
                            </div>
                            <h3 className="text-xl font-bold text-industrial-blue mb-3 group-hover:text-amber-600 transition-colors">
                                {feature.title}
                            </h3>
                            <p className="text-slate-500 leading-relaxed text-sm font-medium">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </Section>
    )
}
