"use client"

import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

interface BreadcrumbItem {
    label: string
    href?: string
}

interface BreadcrumbsProps {
    items: BreadcrumbItem[]
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
    return (
        <nav className="flex items-center gap-2 text-sm mb-8">
            <Link
                href="/"
                className="text-slate-500 hover:text-industrial-blue transition-colors font-medium"
            >
                Home
            </Link>
            {items.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-slate-300" />
                    {item.href ? (
                        <Link
                            href={item.href}
                            className="text-slate-500 hover:text-industrial-blue transition-colors font-medium"
                        >
                            {item.label}
                        </Link>
                    ) : (
                        <span className="text-slate-900 font-bold">
                            {item.label}
                        </span>
                    )}
                </div>
            ))}
        </nav>
    )
}
