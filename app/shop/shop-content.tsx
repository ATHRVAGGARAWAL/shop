"use client"

import { useState } from 'react'
import { useSearchParams, useRouter, usePathname } from 'next/navigation'
import { Container } from '@/components/ui/container'
import { ProductCard } from '@/components/products/product-card'
import { ProductFilters } from '@/components/products/product-filters'
import { Product } from '@/lib/types'

interface ShopContentProps {
    initialProducts: Product[]
}

export default function ShopContent({ initialProducts }: ShopContentProps) {
    const searchParams = useSearchParams()
    const router = useRouter()
    const pathname = usePathname()

    const activeCategoryFromUrl = searchParams.get('category') || 'All'
    const [searchQuery, setSearchQuery] = useState('')
    const [sortBy, setSortBy] = useState('default')
    const [priceRange, setPriceRange] = useState(5000)
    const [showInStock, setShowInStock] = useState(false)

    const setActiveCategory = (category: string) => {
        const params = new URLSearchParams(searchParams.toString())

        if (category === 'All') {
            params.delete('category')
        } else {
            params.set('category', category)
        }

        const queryString = params.toString()
        router.replace(queryString ? `${pathname}?${queryString}` : pathname, { scroll: false })
    }

    let filteredProducts = initialProducts.filter(product => {
        const matchesCategory = activeCategoryFromUrl === 'All' ||
            product.category === activeCategoryFromUrl

        const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.brand.toLowerCase().includes(searchQuery.toLowerCase())

        const matchesPrice = product.price <= priceRange

        const matchesStock = !showInStock || product.stock > 0

        return matchesCategory && matchesSearch && matchesPrice && matchesStock
    })

    // Apply sorting
    if (sortBy === 'price-low') {
        filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price)
    } else if (sortBy === 'price-high') {
        filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price)
    } else if (sortBy === 'name') {
        filteredProducts = [...filteredProducts].sort((a, b) => a.name.localeCompare(b.name))
    }

    return (
        <main className="flex-grow py-16">
            <Container>
                <ProductFilters
                    activeCategory={activeCategoryFromUrl}
                    setActiveCategory={setActiveCategory}
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                    sortBy={sortBy}
                    setSortBy={setSortBy}
                    priceRange={priceRange}
                    setPriceRange={setPriceRange}
                    showInStock={showInStock}
                    setShowInStock={setShowInStock}
                />

                {filteredProducts.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {filteredProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center py-24 text-center">
                        <div className="h-16 w-16 bg-slate-100 rounded-full flex items-center justify-center mb-4">
                            <span className="text-2xl">🔍</span>
                        </div>
                        <h3 className="text-lg font-semibold text-slate-900">No products found</h3>
                        <p className="text-slate-500">Try adjusting your search or filters to find what you&apos;re looking for.</p>
                    </div>
                )}
            </Container>
        </main>
    )
}
