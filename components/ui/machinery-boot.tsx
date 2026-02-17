"use client"

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

export function MachineryBoot() {
    const [status, setStatus] = useState("Initializing")
    const [progress, setProgress] = useState(0)
    const [isVisible, setIsVisible] = useState(true)

    useEffect(() => {
        const statusUpdates = [
            "Core_Systems_Check...",
            "Hydraulics_Ready",
            "Power_Grid_Synced",
            "Safety_Protocols_Active",
            "Environment_Rendered"
        ]

        let i = 0
        const interval = setInterval(() => {
            if (i < statusUpdates.length) {
                setStatus(statusUpdates[i])
                setProgress(prev => Math.min(prev + 20, 100))
                i++
            } else {
                setTimeout(() => setIsVisible(false), 800)
                clearInterval(interval)
            }
        }, 400)
        return () => clearInterval(interval)
    }, [])

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[10000] bg-architectural-white flex flex-col items-center justify-center p-10"
                >
                    <div className="max-w-xs w-full text-deep-graphite">
                        <div className="flex justify-between items-end mb-4">
                            <div className="flex flex-col">
                                <span className="font-industrial text-xl font-bold tracking-widest uppercase">System Boot</span>
                                <span className="font-technical text-[8px] text-industrial-amber font-bold uppercase tracking-[0.5em] mt-1">{status}</span>
                            </div>
                            <span className="font-industrial text-xl font-bold">{progress}%</span>
                        </div>

                        <div className="h-[2px] w-full bg-black/5 relative overflow-hidden">
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${progress}%` }}
                                className="h-full bg-industrial-amber shadow-[0_0_15px_rgba(245,158,11,0.3)]"
                            />
                        </div>

                        <div className="mt-8 grid grid-cols-4 gap-2">
                            {[...Array(4)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    animate={{ opacity: [0.1, 0.4, 0.1] }}
                                    transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                                    className="h-[1px] bg-black/20"
                                />
                            ))}
                        </div>
                    </div>

                    <div className="absolute bottom-10 left-10 font-technical text-[6px] text-black/20 uppercase tracking-[0.5em] leading-loose">
                        <span>D_N_S LOGISTICS NETWORK</span> <br />
                        <span>AUTH_TOKEN: B2B_PRO_X19</span> <br />
                        <span>LOCATION: NODE_072</span>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
