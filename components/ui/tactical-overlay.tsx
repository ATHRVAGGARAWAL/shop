"use client"

import { motion } from 'framer-motion'

export function TacticalOverlay() {
    return (
        <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
            {/* Scanlines Effect */}
            <div className="absolute inset-0 opacity-[0.03] scanlines pointer-events-none" />

            {/* Global Noise Texture */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150" />

            {/* Vignette */}
            <div className="absolute inset-0 bg-radial-vignette pointer-events-none" />

            {/* Tactical Corners */}
            <div className="absolute top-8 left-8 w-12 h-12 border-t border-l border-black/5" />
            <div className="absolute top-8 right-8 w-12 h-12 border-t border-r border-black/5" />
            <div className="absolute bottom-8 left-8 w-12 h-12 border-b border-l border-black/5" />
            <div className="absolute bottom-8 right-8 w-12 h-12 border-b border-r border-black/5" />

            {/* Floating Telemetry (Subtle) */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-12">
                <div className="flex flex-col gap-1 items-center">
                    <span className="font-technical text-[6px] text-black/20 uppercase tracking-[0.4em]">Auth_Protocol</span>
                    <div className="h-[2px] w-12 bg-black/5 overflow-hidden">
                        <motion.div
                            animate={{ x: [-48, 48] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            className="h-full w-full bg-industrial-amber/40"
                        />
                    </div>
                </div>
                <div className="flex flex-col gap-1 items-center">
                    <span className="font-technical text-[6px] text-black/20 uppercase tracking-[0.4em]">System_Integrity</span>
                    <span className="font-technical text-[6px] text-panel-green uppercase tracking-[0.2em] opacity-40">Operational</span>
                </div>
            </div>
        </div>
    )
}
