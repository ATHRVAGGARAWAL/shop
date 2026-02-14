"use client"

import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { Award, Clock, IndianRupee, Truck } from "lucide-react"

export function TrustIndicators() {
    return (
        <Section className="bg-industrial-blue text-white overflow-hidden relative">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-safety-yellow/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-electric-blue/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

            <Container className="relative">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        {
                            icon: Award,
                            title: "Certified Quality",
                            description: "100% authentic products from authorized brands.",
                        },
                        {
                            icon: IndianRupee,
                            title: "Best Pricing",
                            description: "Competitive factory rates for bulk orders.",
                        },
                        {
                            icon: Truck,
                            title: "Fast Delivery",
                            description: "Robust logistics network across the region.",
                        },
                        {
                            icon: Clock,
                            title: "24/7 Support",
                            description: "Dedicated production support and service.",
                        },
                    ].map((item, index) => (
                        <div key={index} className="flex flex-col items-center text-center p-6 border border-white/10 rounded-xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors">
                            <div className="mb-4 p-3 bg-safety-yellow rounded-full text-industrial-blue">
                                <item.icon className="h-6 w-6" />
                            </div>
                            <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                            <p className="text-sm text-slate-300">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </Container>
        </Section>
    )
}
