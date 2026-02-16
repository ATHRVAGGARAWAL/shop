import { Suspense } from 'react'
import { db } from '@/lib/db'
import { products } from '@/lib/schema'
import ShopContent from './shop-content'

export default async function ShopPage() {
    // Fetch all products on the server
    const allProducts = await db.select().from(products).all()

    return (
        <div className="flex flex-col min-h-screen bg-slate-50/30">
            <Suspense fallback={<div>Loading...</div>}>
                <ShopContent initialProducts={allProducts} />
            </Suspense>
        </div>
    )
}
