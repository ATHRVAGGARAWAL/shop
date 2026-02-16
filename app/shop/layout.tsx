import { Metadata } from 'next'

export const metadata: Metadata = {
    title: "Shop Electrical Goods | Wires, Cables, Switches & More",
    description: "Browse our extensive catalog of high-quality electrical supplies. Filter by price, brand, and category. Best prices on Philips, Polycab, and more.",
}

export default function ShopLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
