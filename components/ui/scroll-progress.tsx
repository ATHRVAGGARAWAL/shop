'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export function ScrollProgress() {
    const [scrollProgress, setScrollProgress] = useState(0)

    useEffect(() => {
        const updateScrollProgress = () => {
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
            const scrolled = (window.scrollY / scrollHeight) * 100
            setScrollProgress(scrolled)
        }

        window.addEventListener('scroll', updateScrollProgress)
        return () => window.removeEventListener('scroll', updateScrollProgress)
    }, [])

    return (
        <motion.div
            className="scroll-progress"
            style={{ scaleX: scrollProgress / 100 }}
        />
    )
}
