"use client"

import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Package, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { motion } from "framer-motion"
import { Suspense } from "react"

function SuccessContent() {
    const searchParams = useSearchParams()
    const orderId = searchParams.get('id')

    return (
        <div className="min-h-[80vh] flex flex-col items-center justify-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="max-w-md w-full bg-white p-10 rounded-2xl shadow-xl border border-slate-100 text-center"
            >
                <div className="flex justify-center mb-6">
                    <div className="bg-green-100 p-4 rounded-full">
                        <CheckCircle2 className="h-12 w-12 text-green-600" />
                    </div>
                </div>

                <h1 className="text-3xl font-black text-industrial-blue uppercase tracking-tight mb-4">Order Confirmed!</h1>
                <p className="text-slate-500 mb-8 font-medium">
                    Thank you for your purchase. We have received your order and will contact you shortly for dispatch details.
                </p>

                <div className="bg-slate-50 p-4 rounded-lg mb-8 text-left border border-slate-100">
                    <div className="flex items-center gap-2 mb-1">
                        <Package className="h-4 w-4 text-slate-400" />
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Order Reference</span>
                    </div>
                    <p className="text-lg font-mono font-bold text-industrial-blue">{orderId || 'ORD-UNKNOWN'}</p>
                </div>

                <div className="space-y-3">
                    <Link href="/shop">
                        <Button className="w-full h-12 bg-industrial-blue font-bold">
                            Continue Shopping <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </Link>
                    <Link href="/">
                        <Button variant="ghost" className="w-full h-12 text-slate-500 font-bold">
                            Back to Home
                        </Button>
                    </Link>
                </div>
            </motion.div>
        </div>
    )
}

export default function SuccessPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Container>
                <SuccessContent />
            </Container>
        </Suspense>
    )
}
