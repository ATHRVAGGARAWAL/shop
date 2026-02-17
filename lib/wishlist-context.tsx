"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { Product } from '@/lib/types'

interface WishlistContextType {
    wishlist: Product[]
    addToWishlist: (product: Product) => void
    removeFromWishlist: (productId: string) => void
    isInWishlist: (productId: string) => boolean
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined)

export function WishlistProvider({ children }: { children: ReactNode }) {
    const [wishlist, setWishlist] = useState<Product[]>(() => {
        if (typeof window === 'undefined') return []
        const saved = window.localStorage.getItem('wishlist')
        if (!saved) return []
        try {
            return JSON.parse(saved) as Product[]
        } catch (e) {
            console.error('Failed to parse wishlist', e)
            return []
        }
    })

    // Save to localStorage whenever wishlist changes
    useEffect(() => {
        if (wishlist.length > 0) {
            localStorage.setItem('wishlist', JSON.stringify(wishlist))
        }
    }, [wishlist])

    const addToWishlist = (product: Product) => {
        setWishlist(prev => {
            if (prev.find(p => p.id === product.id)) {
                return prev
            }
            return [...prev, product]
        })
    }

    const removeFromWishlist = (productId: string) => {
        setWishlist(prev => prev.filter(p => p.id !== productId))
    }

    const isInWishlist = (productId: string) => {
        return wishlist.some(p => p.id === productId)
    }

    return (
        <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist, isInWishlist }}>
            {children}
        </WishlistContext.Provider>
    )
}

export function useWishlist() {
    const context = useContext(WishlistContext)
    if (!context) {
        throw new Error('useWishlist must be used within WishlistProvider')
    }
    return context
}
