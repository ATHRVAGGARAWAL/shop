"use client"

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { Container } from '@/components/ui/container'
import { ProductCard } from '@/components/products/product-card'
import { ProductFilters } from '@/components/products/product-filters'
import { products } from '@/lib/products'

function ShopContent() {
    const searchParams = useSearchParams()
    const initialCategory = searchParams.get('category') || 'All'

    const [activeCategory, setActiveCategory] = useState(initialCategory)
    const [searchQuery, setSearchQuery] = useState('')
    const [sortBy, setSortBy] = useState('default')
    const [priceRange, setPriceRange] = useState(5000)
    const [showInStock, setShowInStock] = useState(false)

    useEffect(() => {
        const category = searchParams.get('category')
        if (category) {
            setActiveCategory(category)
        }
    }, [searchParams])

    let filteredProducts = products.filter(product => {
        const matchesCategory = activeCategory === 'All' ||
            product.category === activeCategory

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
                    activeCategory={activeCategory}
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
                        <p className="text-slate-500">Try adjusting your search or filters to find what you're looking for.</p>
                    </div>
                )}
            </Container>
        </main>
    )
}

export default function ShopPage() {
    return (
        <div className="flex flex-col min-h-screen bg-slate-50/30">
            <Suspense fallback={<div>Loading...</div>}>
                <ShopContent />
            </Suspense>
        </div>
    )
}
