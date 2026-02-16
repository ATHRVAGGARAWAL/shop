"use client"

import { Button } from "@/components/ui/button"
import { Search, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

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
        <div className="flex flex-col gap-8 mb-16 animate-flowy-up">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 pb-8 border-b border-slate-100">
                <div className="flex-1">
                    <h1 className="text-5xl md:text-6xl font-black text-industrial-blue uppercase tracking-tighter mb-4">
                        The <span className="text-accent-blue">Collection</span>
                    </h1>
                    <div className="flex gap-3 overflow-x-auto pb-4 no-scrollbar -mx-4 px-4 md:mx-0 md:px-0">
                        {categories.map((cat) => (
                            <Button
                                key={cat}
                                variant={activeCategory === cat ? 'default' : 'secondary'}
                                size="sm"
                                onClick={() => setActiveCategory(cat)}
                                className={cn(
                                    "rounded-full px-6 py-2 h-auto text-[10px] font-black uppercase tracking-widest shrink-0 shadow-sm transition-all",
                                    activeCategory === cat
                                        ? "bg-industrial-blue text-white scale-105"
                                        : "bg-white border border-slate-100 text-slate-400 hover:text-industrial-blue"
                                )}
                            >
                                {cat}
                            </Button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-0 bg-white p-6 rounded-[2rem] border border-slate-100 modern-shadow">
                {/* Search */}
                <div className="flex flex-col gap-3">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Live Search</span>
                    <div className="relative group">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-300 group-focus-within:text-accent-blue transition-colors" />
                        <input
                            type="text"
                            placeholder="Type to find..."
                            className="w-full pl-11 pr-4 py-3 bg-slate-50 rounded-2xl border border-transparent focus:bg-white focus:border-accent-blue/20 transition-all text-sm font-bold shadow-inner"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>

                {/* Sort By */}
                <div className="flex flex-col gap-3">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Organize</span>
                    <div className="relative">
                        <select
                            className="w-full pl-4 pr-10 py-3 bg-slate-50 rounded-2xl border border-transparent focus:bg-white focus:border-accent-blue/20 transition-all text-sm font-bold appearance-none shadow-inner cursor-pointer"
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                        >
                            <option value="default">Quick Sorting</option>
                            <option value="price-low">Price: Low to High</option>
                            <option value="price-high">Price: High to Low</option>
                            <option value="name">Name: A-Z</option>
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none opacity-40">
                            <ChevronDown className="h-4 w-4" />
                        </div>
                    </div>
                </div>

                {/* Price Range */}
                <div className="flex flex-col gap-3">
                    <div className="flex justify-between items-center ml-1">
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Budget: ₹{priceRange}</span>
                    </div>
                    <div className="h-12 flex items-center px-2">
                        <input
                            type="range"
                            min="0"
                            max="5000"
                            step="100"
                            value={priceRange}
                            onChange={(e) => setPriceRange(Number(e.target.value))}
                            className="w-full h-1 bg-slate-100 rounded-full appearance-none cursor-pointer accent-accent-blue"
                        />
                    </div>
                </div>

                {/* In Stock Toggle */}
                <div className="flex flex-col gap-3">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Status</span>
                    <label className="flex items-center gap-3 cursor-pointer group p-3 bg-slate-50 hover:bg-accent-blue-soft rounded-2xl transition-all h-full">
                        <div className={cn(
                            "w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all",
                            showInStock ? "bg-accent-blue border-accent-blue" : "border-slate-200"
                        )}>
                            {showInStock && <div className="w-2 h-2 bg-white rounded-full" />}
                        </div>
                        <input
                            type="checkbox"
                            checked={showInStock}
                            onChange={(e) => setShowInStock(e.target.checked)}
                            className="hidden"
                        />
                        <span className="text-sm font-black text-industrial-blue uppercase tracking-widest">In Stock</span>
                    </label>
                </div>
            </div>
        </div>
    );
}
