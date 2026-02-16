"use client"

import { Button } from "@/components/ui/button"
// import { Category } from "@/lib/products"
import { Search, ChevronDown } from "lucide-react"
import { useState } from "react"

interface ProductFiltersProps {
    activeCategory: string;
    setActiveCategory: (category: string) => void;
    searchQuery: string;
    setSearchQuery: (query: string) => void;
    sortBy: string;
    setSortBy: (sort: string) => void;
    priceRange: number;
    setPriceRange: (price: number) => void;
    showInStock: boolean;
    setShowInStock: (show: boolean) => void;
}

const categories = ['All', 'LED Bulbs', 'Smart Lighting', 'Tube Lights', 'Ceiling Lights', 'Spotlights'];

export function ProductFilters({
    activeCategory,
    setActiveCategory,
    searchQuery,
    setSearchQuery,
    sortBy,
    setSortBy,
    priceRange,
    setPriceRange,
    showInStock,
    setShowInStock
}: ProductFiltersProps) {
    return (
        <div className="flex flex-col gap-10 mb-16">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-10 border-b border-slate-100">
                <div className="flex-1">
                    <h1 className="text-4xl font-black text-industrial-blue uppercase tracking-tight mb-2">Electrical Supplies</h1>
                    <div className="flex flex-wrap gap-2 mt-6">
                        {categories.map((cat) => (
                            <Button
                                key={cat}
                                variant={activeCategory === cat ? 'default' : 'secondary'}
                                size="sm"
                                onClick={() => setActiveCategory(cat)}
                                className={`rounded-md px-4 py-1.5 h-auto text-[10px] font-bold uppercase tracking-widest transition-all ${activeCategory === cat ? 'bg-industrial-blue text-white' : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                                    }`}
                            >
                                {cat}
                            </Button>
                        ))}
                    </div>
                </div>

                <div className="flex flex-wrap items-end gap-6 lg:gap-10">
                    {/* Search */}
                    <div className="flex flex-col gap-2">
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Search</span>
                        <div className="relative w-full md:w-64">
                            <input
                                type="text"
                                placeholder="Search products..."
                                className="w-full pl-4 pr-4 py-2 bg-slate-50 border border-slate-200 focus:outline-none focus:border-industrial-blue transition-all text-sm font-medium"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Sort By */}
                    <div className="flex flex-col gap-2">
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Sort By</span>
                        <div className="relative">
                            <select
                                className="w-full md:w-48 pl-4 pr-10 py-2 bg-slate-50 border border-slate-200 focus:outline-none focus:border-industrial-blue transition-all text-sm font-medium appearance-none"
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                            >
                                <option value="default">Default</option>
                                <option value="price-low">Price: Low to High</option>
                                <option value="price-high">Price: High to Low</option>
                                <option value="name">Name: A-Z</option>
                            </select>
                            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none opacity-40">
                                <ChevronDown className="h-4 w-4" />
                            </div>
                        </div>
                    </div>

                    {/* Price Range */}
                    <div className="flex flex-col gap-2 min-w-[200px]">
                        <div className="flex justify-between items-center">
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Max Price: ₹{priceRange}</span>
                        </div>
                        <div className="h-10 flex items-center">
                            <input
                                type="range"
                                min="0"
                                max="5000"
                                step="100"
                                value={priceRange}
                                onChange={(e) => setPriceRange(Number(e.target.value))}
                                className="w-full h-0.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-industrial-blue"
                            />
                        </div>
                    </div>

                    {/* In Stock Toggle */}
                    <div className="flex flex-col gap-2">
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Availability</span>
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="checkbox"
                                checked={showInStock}
                                onChange={(e) => setShowInStock(e.target.checked)}
                                className="w-4 h-4 accent-industrial-blue cursor-pointer"
                            />
                            <span className="text-sm font-medium text-slate-600">In Stock Only</span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
}
