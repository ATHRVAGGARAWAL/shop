import { db } from '@/lib/db';
import { products, orders } from '@/lib/schema';
import { sql } from 'drizzle-orm';
import { Package, ShoppingCart, AlertTriangle, IndianRupee, TrendingUp } from 'lucide-react';
import { Container } from '@/components/ui/container';

export default async function AdminDashboard() {
    // Fetch summary stats
    const productCountResult = await db.select({ count: sql<number>`count(*)` }).from(products).get();
    const orderCountResult = await db.select({ count: sql<number>`count(*)` }).from(orders).get();

    // Gross Value = sum(price * stock)
    const grossValueResult = await db.select({
        total: sql<number>`sum(${products.price} * ${products.stock})`
    }).from(products).get();

    // Low stock is defined as stock < 10
    const lowStockCountResult = await db.select({ count: sql<number>`count(*)` })
        .from(products)
        .where(sql`${products.stock} < 10`)
        .get();

    const stats = [
        {
            label: "Total Products",
            value: productCountResult?.count ?? 0,
            icon: Package,
            color: "text-blue-600",
            bg: "bg-blue-50"
        },
        {
            label: "Total Orders",
            value: orderCountResult?.count ?? 0,
            icon: ShoppingCart,
            color: "text-purple-600",
            bg: "bg-purple-50"
        },
        {
            label: "Low Stock Alerts",
            value: lowStockCountResult?.count ?? 0,
            icon: AlertTriangle,
            color: "text-orange-600",
            bg: "bg-orange-50"
        },
        {
            label: "Gross Stock Value",
            value: `₹${(grossValueResult?.total ?? 0).toLocaleString('en-IN')}`,
            icon: IndianRupee,
            color: "text-green-600",
            bg: "bg-green-50"
        }
    ];

    return (
        <div className="min-h-screen bg-[#f8fafc] py-12">
            <Container>
                <div className="mb-10 flex items-center justify-between">
                    <div>
                        <h1 className="text-4xl font-black text-slate-900 tracking-tight">Admin Dashboard</h1>
                        <p className="text-slate-500 font-medium mt-1">Devki Nandan & Sons • Inventory Overview</p>
                    </div>
                    <div className="flex bg-white rounded-xl border border-slate-100 p-1.5 shadow-sm">
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-bold shadow-lg shadow-blue-600/20">Overview</button>
                        <button className="px-4 py-2 text-slate-400 hover:text-slate-600 text-sm font-bold">Analytics</button>
                    </div>
                </div>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {stats.map((stat, i) => (
                        <div key={i} className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
                            <div className="flex items-center justify-between mb-6">
                                <div className={`w-14 h-14 ${stat.bg} ${stat.color} rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 duration-300`}>
                                    <stat.icon className="h-7 w-7" />
                                </div>
                                <div className="flex items-center gap-1 text-green-500 bg-green-50 px-2 py-1 rounded-md">
                                    <TrendingUp className="h-3 w-3" />
                                    <span className="text-[10px] font-bold">+12%</span>
                                </div>
                            </div>
                            <h2 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">{stat.label}</h2>
                            <p className="text-3xl font-black text-slate-900 tracking-tighter">
                                {stat.value}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Placeholder for more dashboard content */}
                <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm">
                        <h2 className="text-xl font-bold text-slate-900 mb-6">Recent Inventory Activity</h2>
                        <div className="flex flex-col items-center justify-center py-20 text-slate-300">
                            <Package className="h-12 w-12 mb-4 opacity-20" />
                            <p className="font-medium">Inventory charts and logs will appear here</p>
                        </div>
                    </div>
                    <div className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm">
                        <h2 className="text-xl font-bold text-slate-900 mb-6">Stock Distribution</h2>
                        <div className="aspect-square rounded-full border-[16px] border-slate-50 flex items-center justify-center">
                            <div className="text-center">
                                <span className="block text-3xl font-black text-slate-900">84%</span>
                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Normal Stock</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}
