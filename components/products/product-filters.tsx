"use client"

import { Button } from "@/components/ui/button"
import { Category } from "@/lib/products"
import { Search } from "lucide-react"

interface ProductFiltersProps {
    activeCategory: string;
    setActiveCategory: (category: string) => void;
    searchQuery: string;
    setSearchQuery: (query: string) => void;
}

const categories: (Category | 'All')[] = ['All', 'MCBs', 'LED Bulbs', 'Tube Lights', 'Wires', 'Industrial Fittings', 'Switches', 'Whole Sale'];

export function ProductFilters({ activeCategory, setActiveCategory, searchQuery, setSearchQuery }: ProductFiltersProps) {
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

                    <div className="flex flex-col gap-2">
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Brand</span>
                        <div className="relative">
                            <select className="w-full md:w-48 pl-4 pr-10 py-2 bg-slate-50 border border-slate-200 focus:outline-none focus:border-industrial-blue transition-all text-sm font-medium appearance-none">
                                <option>all</option>
                                <option>Havells</option>
                                <option>Siemens</option>
                                <option>Finolex</option>
                            </select>
                            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none opacity-40">
                                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2 min-w-[200px]">
                        <div className="flex justify-between items-center">
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Max Price: $200</span>
                        </div>
                        <div className="h-10 flex items-center">
                            <div className="w-full h-0.5 bg-slate-200 relative">
                                <div className="absolute right-0 top-1/2 -translate-y-1/2 h-4 w-4 bg-white border-2 border-industrial-blue rounded-full shadow-sm cursor-pointer" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
