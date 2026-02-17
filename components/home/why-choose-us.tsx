"use client"

import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { Award, Truck, ShieldCheck, Users, CornerRightDown } from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

const features = [
    {
        title: "Legacy Infrastructure",
        description: "Established in 1984, our distribution network is the backbone of regional electrical supply.",
        icon: Award,
        metric: "40+ Years",
        size: "lg:col-span-2"
    },
    {
        title: "Supply Chain",
        description: "Robust inventory management and fulfillment for massive industrial requirements.",
        icon: Truck,
        metric: "Next Day",
        size: "lg:col-span-1"
    },
    {
        title: "Certified Trust",
        description: "Authorized multi-brand dealer for Havells, Polycab, and Schneider Electric.",
        icon: ShieldCheck,
        metric: "Brand Auth.",
        size: "lg:col-span-1"
    },
    {
        title: "B2B Expert Desk",
        description: "Dedicated procurement specialists for project-based contractors.",
        icon: Users,
        metric: "Expert Led",
        size: "lg:col-span-2"
    }
]

export function WhyChooseUs() {
    return (
        <Section className="bg-[#f8fafc] relative overflow-hidden py-32">
            {/* Blueprint Grid Pattern */}
            <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none"
                style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

            <Container className="relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
                    <div className="lg:col-span-6">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="text-accent-blue font-black uppercase text-xs tracking-widest">Operational Standards</span>
                        </div>
                        <h2 className="text-5xl md:text-7xl font-black text-industrial-blue tracking-tighter uppercase leading-[0.9]">
                            Reliable by <br /> <span className="text-transparent" style={{ WebkitTextStroke: '2px #0f172a' }}>Architecture.</span>
                        </h2>
                    </div>
                    <div className="lg:col-span-6 flex flex-col justify-end">
                        <p className="text-slate-500 text-lg font-medium leading-relaxed border-l-4 border-accent-blue pl-8">
                            We don't just sell components; we provide the foundational stability required for modern electrical infrastructure.
                            <span className="block mt-4 text-industrial-blue font-black uppercase text-[10px] tracking-widest flex items-center gap-2">
                                <CornerRightDown className="h-4 w-4" /> Operational Pillars
                            </span>
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.8 }}
                            className={cn(
                                "group bg-white p-10 rounded-[2.5rem] border border-slate-100 hover:border-accent-blue/20 hover:modern-shadow transition-all duration-500",
                                feature.size
                            )}
                        >
                            <div className="flex flex-col h-full">
                                <div className="flex items-center justify-between mb-12">
                                    <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center group-hover:bg-accent-blue-soft transition-colors duration-500">
                                        <feature.icon className="h-8 w-8 text-industrial-blue group-hover:text-accent-blue transition-colors" />
                                    </div>
                                    <div className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-300">
                                        {feature.metric}
                                    </div>
                                </div>
                                <h3 className="text-3xl font-black text-industrial-blue uppercase tracking-tight mb-6 group-hover:text-accent-blue transition-colors">
                                    {feature.title}
                                </h3>
                                <p className="text-slate-500 leading-relaxed font-medium">
                                    {feature.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </Section>
    )
}
