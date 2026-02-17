"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Container } from "@/components/ui/container"
import { X } from "lucide-react"

type Hotspot = {
    id: string
    x: string
    y: string
    name: string
    price: string
    specs: string
}

type Environment = {
    id: string
    name: string
    bg: string
    hotspots: Hotspot[]
}

const environments: Environment[] = [
    {
        id: "switches",
        name: "Switches & Sockets",
        bg: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80",
        hotspots: [
            { id: "s1", x: "30%", y: "45%", name: "Modular Switch", price: "₹249", specs: "10A, Flame Retardant" },
            { id: "s2", x: "65%", y: "52%", name: "Power Socket", price: "₹599", specs: "25A, With Shutter" },
        ]
    },
    {
        id: "lighting",
        name: "Luminaires",
        bg: "https://images.unsplash.com/photo-1553095066-5014bc7b7f2d?auto=format&fit=crop&q=80",
        hotspots: [
            { id: "l1", x: "40%", y: "20%", name: "Recessed Panel", price: "₹1,200", specs: "18W, 6500K" },
            { id: "l2", x: "20%", y: "40%", name: "Track Light", price: "₹3,400", specs: "COB, 30W" },
        ]
    },
    {
        id: "cables",
        name: "Industrial Systems",
        bg: "https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?auto=format&fit=crop&q=80",
        hotspots: [
            { id: "c1", x: "50%", y: "60%", name: "Armoured Cable", price: "₹850/m", specs: "4 Core, 16sqmm" },
        ]
    }
]

export function EnvironmentBrowser() {
    const [activeEnv, setActiveEnv] = useState<Environment>(environments[0])
    const [selectedHotspot, setSelectedHotspot] = useState<Hotspot | null>(null)

    return (
        <section className="bg-architectural-white min-h-screen relative overflow-hidden flex flex-col">
            {/* Header / Category Switcher */}
            <div className="z-20 pt-32 pb-12 border-b border-black/5 bg-white/50 backdrop-blur-md">
                <Container>
                    <div className="flex gap-12 overflow-x-auto no-scrollbar">
                        {environments.map((env) => (
                            <button
                                key={env.id}
                                onClick={() => {
                                    setActiveEnv(env)
                                    setSelectedHotspot(null)
                                }}
                                className={`flex flex-col gap-3 min-w-fit transition-all duration-500 border-b-2 pb-4 ${activeEnv.id === env.id ? 'border-industrial-amber' : 'border-transparent opacity-30 hover:opacity-100'}`}
                            >
                                <span className="font-technical text-[8px] uppercase tracking-[0.4em] text-industrial-amber font-bold">
                                    Sector {env.id.toUpperCase()}
                                </span>
                                <span className="font-industrial text-lg font-bold uppercase tracking-wider text-deep-graphite">
                                    {env.name}
                                </span>
                            </button>
                        ))}
                    </div>
                </Container>
            </div>

            {/* Main Viewport */}
            <div className="relative flex-grow h-[70vh] w-full overflow-hidden">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeEnv.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8 }}
                        className="absolute inset-0 w-full h-full"
                    >
                        <div className="absolute inset-0 bg-white/5 z-10" />
                        <img
                            src={activeEnv.bg}
                            alt={activeEnv.name}
                            className="w-full h-full object-cover grayscale-0 brightness-100"
                        />

                        {/* Hotspots */}
                        {activeEnv.hotspots.map((spot, index) => (
                            <motion.button
                                key={spot.id}
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.3 + index * 0.1 }}
                                onClick={() => setSelectedHotspot(spot)}
                                style={{ top: spot.y, left: spot.x }}
                                className="absolute z-20 group flex items-start gap-4"
                            >
                                <div className="relative">
                                    <div className="absolute -inset-4 rounded-full bg-industrial-amber/20 opacity-0 group-hover:opacity-100 animate-ping" />
                                    <div className="bg-industrial-amber w-4 h-4 rounded-full border-2 border-white group-hover:scale-125 transition-all duration-300 shadow-xl" />
                                </div>

                                <div className="hidden md:flex flex-col items-start translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 pointer-events-none">
                                    <div className="bg-white/95 backdrop-blur-md border border-black/10 px-4 py-2 shadow-2xl">
                                        <span className="font-industrial text-[10px] font-bold text-deep-graphite uppercase tracking-wider">{spot.name}</span>
                                    </div>
                                    <div className="bg-industrial-amber px-2 py-0.5 mt-1 shadow-lg">
                                        <span className="font-technical text-[8px] text-black font-bold uppercase tracking-widest">{spot.price}</span>
                                    </div>
                                    <div className="w-[1px] h-8 bg-black/20 ml-2 mt-1" />
                                </div>
                            </motion.button>
                        ))}
                    </motion.div>
                </AnimatePresence>

                {/* Selected Product Overlay */}
                <AnimatePresence>
                    {selectedHotspot && (
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 30, stiffness: 200 }}
                            className="absolute top-0 right-0 h-full w-full md:w-[450px] bg-white/95 backdrop-blur-xl border-l border-black/5 z-30 p-12 flex flex-col shadow-[-20px_0_50px_rgba(0,0,0,0.05)]"
                        >
                            <button
                                onClick={() => setSelectedHotspot(null)}
                                className="self-end p-3 hover:bg-black/5 rounded-full transition-colors mb-12"
                            >
                                <X className="w-8 h-8 text-deep-graphite" />
                            </button>

                            <div className="space-y-2">
                                <span className="font-technical text-industrial-amber text-[10px] font-bold tracking-[0.5em] uppercase">
                                    Component Identified
                                </span>
                                <h3 className="font-industrial text-4xl text-deep-graphite font-bold uppercase tracking-tighter leading-tight">
                                    {selectedHotspot.name}
                                </h3>
                                <p className="font-industrial text-2xl text-black/40">
                                    {selectedHotspot.price}
                                </p>
                            </div>

                            <div className="space-y-6 mt-12">
                                <div className="p-6 border border-black/5 bg-black/[0.02]">
                                    <span className="font-technical text-[8px] text-black/40 uppercase tracking-[0.4em] font-bold block mb-3">Technical Specifications</span>
                                    <p className="font-technical text-sm text-deep-graphite leading-relaxed">{selectedHotspot.specs}</p>
                                </div>

                                <div className="p-6 border border-black/5 bg-black/[0.02]">
                                    <span className="font-technical text-[8px] text-black/40 uppercase tracking-[0.4em] font-bold block mb-3">Inventory Status</span>
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-panel-green animate-pulse" />
                                        <p className="font-technical text-xs text-panel-green font-bold uppercase tracking-widest">In Stock • Ready for Batch Dispatch</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-auto pt-12 flex flex-col gap-4">
                                <button className="w-full h-16 bg-deep-graphite text-white font-industrial text-xs tracking-[0.3em] uppercase hover:bg-industrial-amber hover:text-black transition-all font-bold">
                                    View Detailed Datasheet
                                </button>
                                <button className="w-full h-16 border border-black/10 text-deep-graphite font-industrial text-[10px] tracking-[0.3em] uppercase hover:bg-black hover:text-white transition-all">
                                    Request CAD Schematic
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03] blueprint-grid z-0" />
        </section>
    )
}
