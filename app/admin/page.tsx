import { db } from '@/lib/db';
import { products, orders } from '@/lib/schema';
import { sql } from 'drizzle-orm';

export default async function AdminDashboard() {
    // Fetch some summary stats
    const productCount = await db.select({ count: sql<number>`count(*)` }).from(products).get();
    const orderCount = await db.select({ count: sql<number>`count(*)` }).from(orders).get();

    // Low stock is defined as stock < 10
    const lowStockCount = await db.select({ count: sql<number>`count(*)` })
        .from(products)
        .where(sql`${products.stock} < 10`)
        .get();

    return (
        <div>
            <h1 className="mb-8 text-3xl font-bold">Dashboard</h1>

            <div className="grid gap-6 md:grid-cols-3">
                <div className="rounded-lg bg-white p-6 shadow-md">
                    <h2 className="text-sm font-medium text-gray-500">Total Products</h2>
                    <p className="mt-2 text-3xl font-bold">{productCount?.count ?? 0}</p>
                </div>

                <div className="rounded-lg bg-white p-6 shadow-md">
                    <h2 className="text-sm font-medium text-gray-500">Total Orders</h2>
                    <p className="mt-2 text-3xl font-bold">{orderCount?.count ?? 0}</p>
                </div>

                <div className="rounded-lg bg-white p-6 shadow-md">
                    <h2 className="text-sm font-medium text-gray-500">Low Stock Alerts</h2>
                    <p className="mt-2 text-3xl font-bold text-orange-600">
                        {lowStockCount?.count ?? 0}
                    </p>
                </div>
            </div>
        </div>
    );
}
