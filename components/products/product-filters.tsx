"use client"

import { Search, ChevronDown, CheckSquare, Square, SlidersHorizontal } from "lucide-react"
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

const brands = ['Anchor', 'Philips', 'Havells', 'Polycab', 'Pro-Tech', 'Microtek', 'Luminous'];
const categories = ['All', 'Lighting', 'Power & Sockets', 'Safety Systems', 'Industrial', 'Smart Home'];

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
        <aside className="w-full lg:w-64 flex-shrink-0">
            <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm sticky top-24">
                <div className="flex items-center justify-between mb-10">
                    <div className="flex flex-col">
                        <h2 className="text-xl font-black text-slate-900 tracking-tight">Filters</h2>
                        <div className="h-1 w-6 bg-[#0055eb] rounded-full mt-1" />
                    </div>
                    <button
                        onClick={() => {
                            setActiveCategory('All');
                            setPriceRange(5000);
                            setSearchQuery('');
                        }}
                        className="text-[10px] font-black uppercase tracking-widest text-[#0055eb] hover:opacity-70 transition-all"
                    >
                        Clear all
                    </button>
                </div>

                <div className="space-y-12">
                    {/* Brand Section */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-2 text-slate-900 font-black uppercase text-[10px] tracking-[0.2em]">
                            <SlidersHorizontal className="h-3 w-3 text-[#0055eb]" />
                            Brand
                        </div>
                        <div className="space-y-3">
                            {brands.map((brand) => (
                                <label key={brand} className="flex items-center gap-3 cursor-pointer group">
                                    <div className="relative flex items-center justify-center">
                                        <input type="checkbox" className="peer sr-only" />
                                        <div className="h-5 w-5 border-2 border-slate-100 rounded-lg group-hover:border-[#0055eb]/30 peer-checked:bg-[#0055eb] peer-checked:border-[#0055eb] transition-all duration-300" />
                                        <CheckSquare className="absolute h-3.5 w-3.5 text-white opacity-0 peer-checked:opacity-100 transition-opacity" />
                                    </div>
                                    <span className="text-[13px] font-bold text-slate-500 group-hover:text-slate-900 transition-colors">
                                        {brand}
                                    </span>
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Category Section */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-2 text-slate-900 font-black uppercase text-[10px] tracking-[0.2em]">
                            <div className="grid grid-cols-2 gap-0.5 w-3">
                                <div className="w-1 h-1 bg-[#0055eb] rounded-full" />
                                <div className="w-1 h-1 bg-[#0055eb]/40 rounded-full" />
                                <div className="w-1 h-1 bg-[#0055eb]/40 rounded-full" />
                                <div className="w-1 h-1 bg-[#0055eb] rounded-full" />
                            </div>
                            Category
                        </div>
                        <div className="space-y-2">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={cn(
                                        "w-full text-left px-4 py-2.5 rounded-xl text-[13px] font-bold transition-all duration-300",
                                        activeCategory === cat
                                            ? "bg-blue-50 text-[#0055eb] translate-x-1 shadow-sm"
                                            : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                                    )}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Price Range */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-2 text-slate-900 font-black uppercase text-[10px] tracking-[0.2em]">
                            <span className="text-[#0055eb] text-sm leading-none italic font-black">₹</span>
                            Price Range
                        </div>
                        <div className="space-y-6 px-1">
                            <div className="relative h-6 flex items-center group/slider">
                                <input
                                    type="range"
                                    min="0"
                                    max="5000"
                                    step="100"
                                    value={priceRange}
                                    onChange={(e) => setPriceRange(Number(e.target.value))}
                                    className="w-full h-1.5 bg-slate-100 rounded-full appearance-none cursor-pointer accent-[#0055eb] hover:bg-slate-200 transition-colors"
                                />
                                <div
                                    className="absolute h-1.5 bg-[#0055eb] rounded-full pointer-events-none transition-all duration-200"
                                    style={{ width: `${(priceRange / 5000) * 100}%` }}
                                />
                                {/* Current Value Tooltip (simplified) */}
                                <div
                                    className="absolute -top-6 px-2 py-1 bg-[#0055eb] text-white text-[9px] font-black rounded-lg opacity-0 group-hover/slider:opacity-100 transition-opacity duration-300 transform -translate-x-1/2"
                                    style={{ left: `${(priceRange / 5000) * 100}%` }}
                                >
                                    ₹{priceRange.toLocaleString('en-IN')}
                                </div>
                            </div>
                            <div className="flex justify-between items-center text-[10px] font-black text-slate-400 uppercase tracking-widest">
                                <span>₹0</span>
                                <span>₹5,000+</span>
                            </div>
                        </div>
                    </div>

                    <button className="w-full py-4 bg-slate-900 text-white text-[11px] font-black uppercase tracking-[0.2em] rounded-2xl hover:bg-[#0055eb] hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-600/20 transition-all active:scale-[0.98]">
                        Apply Selection
                    </button>
                </div>
            </div>
        </aside>
    );
}

