"use client"

import { Star } from 'lucide-react'
import { motion } from 'framer-motion'

interface Review {
    id: number
    author: string
    rating: number
    date: string
    comment: string
    verified: boolean
}

const mockReviews: Review[] = [
    {
        id: 1,
        author: "Rajesh Kumar",
        rating: 5,
        date: "2 weeks ago",
        comment: "Excellent quality product. Using it for my commercial project. Very reliable and long-lasting.",
        verified: true
    },
    {
        id: 2,
        author: "Amit Sharma",
        rating: 4,
        date: "1 month ago",
        comment: "Good product at a reasonable price. Delivery was quick and packaging was secure.",
        verified: true
    },
    {
        id: 3,
        author: "Priya Singh",
        rating: 5,
        date: "2 months ago",
        comment: "Best quality in the market. Have been purchasing from Devki Nandan for years. Highly recommended!",
        verified: true
    }
]

export function ProductReviews() {
    const averageRating = mockReviews.reduce((sum, review) => sum + review.rating, 0) / mockReviews.length
    const totalReviews = mockReviews.length

    return (
        <div className="border-t border-slate-100 pt-12 mt-12">
            <div className="mb-8">
                <h3 className="text-2xl font-black text-industrial-blue uppercase tracking-tight mb-4">
                    Customer Reviews
                </h3>
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                                key={star}
                                className={`h-5 w-5 ${star <= Math.round(averageRating)
                                        ? 'fill-amber-400 text-amber-400'
                                        : 'text-slate-300'
                                    }`}
                            />
                        ))}
                    </div>
                    <span className="text-sm font-bold text-slate-900">
                        {averageRating.toFixed(1)} out of 5
                    </span>
                    <span className="text-sm text-slate-500">
                        ({totalReviews} reviews)
                    </span>
                </div>
            </div>

            <div className="space-y-6">
                {mockReviews.map((review, index) => (
                    <motion.div
                        key={review.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="border-b border-slate-100 pb-6 last:border-0"
                    >
                        <div className="flex items-start justify-between mb-2">
                            <div>
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="font-bold text-slate-900">{review.author}</span>
                                    {review.verified && (
                                        <span className="text-[10px] font-bold uppercase tracking-wider text-green-600 bg-green-50 px-2 py-0.5 rounded">
                                            Verified Purchase
                                        </span>
                                    )}
                                </div>
                                <div className="flex items-center gap-1">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <Star
                                            key={star}
                                            className={`h-4 w-4 ${star <= review.rating
                                                    ? 'fill-amber-400 text-amber-400'
                                                    : 'text-slate-300'
                                                }`}
                                        />
                                    ))}
                                </div>
                            </div>
                            <span className="text-xs text-slate-500">{review.date}</span>
                        </div>
                        <p className="text-sm text-slate-600 leading-relaxed">{review.comment}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}
