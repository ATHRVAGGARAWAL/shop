"use client"

import { useState } from 'react'
import { useSearchParams, useRouter, usePathname } from 'next/navigation'
import Link from 'next/link'
import { Container } from '../../components/ui/container'
import { ProductCard } from '../../components/products/product-card'
import { ProductFilters } from '../../components/products/product-filters'
import { Product } from '../../lib/types'
import { ChevronDown, Search } from 'lucide-react'

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
        <main className="flex-grow py-12 bg-[#f8fafc]">
            <Container>
                {/* Breadcrumbs */}
                <div className="flex items-center gap-3 text-xs font-semibold text-slate-500 mb-12">
                    <Link href="/" className="text-slate-400 hover:text-[#0055eb] transition-colors">Home</Link>
                    <div className="w-1 h-1 bg-slate-300 rounded-full" />
                    <span className="text-slate-900 font-semibold">Shop</span>
                    <div className="w-1 h-1 bg-slate-300 rounded-full" />
                    <span className="text-[#0055eb] font-semibold">{activeCategoryFromUrl}</span>
                </div>

                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Sidebar Filters */}
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

                    {/* Product Grid Area */}
                    <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
                            <div>
                                <div className="flex items-center gap-2 mb-3">
                                    <div className="h-1 w-6 bg-[#0055eb] rounded-full" />
                                    <span className="text-[#0055eb] text-xs font-semibold uppercase tracking-[0.2em]">
                                        Authorized supplies
                                    </span>
                                </div>
                                <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                                    Inventory <br /> <span className="text-transparent uppercase" style={{ WebkitTextStroke: '2px #0055eb' }}>Showcase.</span>
                                </h1>
                            </div>

                            <div className="flex items-center gap-4">
                                <p className="text-xs font-medium text-slate-500 hidden sm:block">
                                    Results: <span className="text-slate-900 font-semibold">{filteredProducts.length}</span>
                                </p>
                                <div className="relative">
                                    <select
                                        className="appearance-none bg-white border border-slate-100 px-6 py-3 rounded-2xl text-[11px] font-black uppercase tracking-widest text-slate-600 shadow-sm outline-none cursor-pointer pr-12 min-w-[220px] hover:border-[#0055eb]/30 transition-all"
                                        value={sortBy}
                                        onChange={(e) => setSortBy(e.target.value)}
                                    >
                                        <option value="default">Sort: Default</option>
                                        <option value="price-low">Price: Low to High</option>
                                        <option value="price-high">Price: High to Low</option>
                                        <option value="name">Name: A to Z</option>
                                    </select>
                                    <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#0055eb] pointer-events-none" />
                                </div>
                            </div>
                        </div>

                        {filteredProducts.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-16">
                                {filteredProducts.map((product) => (
                                    <ProductCard key={product.id} product={product} />
                                ))}
                            </div>
                        ) : (
                            <div className="bg-white rounded-[2rem] border border-slate-100 p-24 text-center">
                                <div className="h-20 w-20 bg-blue-50 rounded-3xl flex items-center justify-center mb-8 mx-auto">
                                    <Search className="h-8 w-8 text-[#0055eb]" />
                                </div>
                                <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-2">No findings</h3>
                                <p className="text-slate-400 font-medium max-w-xs mx-auto text-sm italic">Adjust your parameters to explore our authorized inventory.</p>
                            </div>
                        )}

                        {/* Pagination */}
                        <div className="flex items-center justify-center gap-3 mt-8 pb-12">
                            <button className="h-12 w-12 rounded-2xl border border-slate-100 flex items-center justify-center text-slate-400 hover:bg-white hover:text-[#0055eb] transition-all cursor-not-allowed opacity-50">
                                <ChevronDown className="h-4 w-4 rotate-90" />
                            </button>
                            <button className="h-12 w-12 rounded-2xl bg-slate-900 text-white font-black text-xs shadow-lg shadow-black/10">1</button>
                            <button className="h-12 w-12 rounded-2xl bg-white border border-slate-100 text-slate-600 font-black text-xs hover:border-[#0055eb] hover:text-[#0055eb] transition-all">2</button>
                            <button className="h-12 w-12 rounded-2xl bg-white border border-slate-100 text-slate-600 font-black text-xs hover:border-[#0055eb] hover:text-[#0055eb] transition-all">3</button>
                            <span className="px-2 text-slate-300 font-black">...</span>
                            <button className="h-12 w-12 rounded-2xl bg-white border border-slate-100 text-slate-600 font-black text-xs hover:border-[#0055eb] hover:text-[#0055eb] transition-all">12</button>
                            <button className="h-12 w-12 rounded-2xl border border-slate-100 flex items-center justify-center text-slate-900 hover:bg-white hover:text-[#0055eb] transition-all active:scale-95 shadow-sm">
                                <ChevronDown className="h-4 w-4 -rotate-90" />
                            </button>
                        </div>
                    </div>
                </div>
            </Container>
        </main>
    )
}
