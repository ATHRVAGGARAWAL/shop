import { db } from '@/lib/db';
import { orders } from '@/lib/schema';
import { desc } from 'drizzle-orm';
import { format } from 'date-fns';
import { OrderStatusSelector } from '@/components/admin/OrderStatusSelector';

export default async function OrderList() {
    const allOrders = await db.select().from(orders).orderBy(desc(orders.createdAt)).all();

    return (
        <div>
            <h1 className="mb-6 text-2xl font-bold">Orders</h1>

            <div className="overflow-hidden rounded-lg bg-white shadow-md">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Order ID</th>
                            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Customer</th>
                            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Date</th>
                            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Total</th>
                            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Status</th>
                            <th className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider text-gray-500">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                        {allOrders.length === 0 ? (
                            <tr>
                                <td colSpan={6} className="px-6 py-10 text-center text-gray-500">No orders found.</td>
                            </tr>
                        ) : (
                            allOrders.map((order) => (
                                <tr key={order.id}>
                                    <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">#{order.id.slice(-8)}</td>
                                    <td className="px-6 py-4">
                                        <div className="text-sm text-gray-900">{order.customerName}</div>
                                        <div className="text-xs text-gray-500">{order.customerEmail}</div>
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                                        {order.createdAt ? format(new Date(order.createdAt), 'dd MMM yyyy') : 'N/A'}
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900">₹{order.totalAmount}</td>
                                    <td className="whitespace-nowrap px-6 py-4">
                                        <span className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${order.status === 'DELIVERED' ? 'bg-green-100 text-green-800' :
                                                order.status === 'SHIPPED' ? 'bg-blue-100 text-blue-800' :
                                                    order.status === 'PENDING' ? 'bg-yellow-100 text-yellow-800' :
                                                        'bg-gray-100 text-gray-800'
                                            }`}>
                                            {order.status}
                                        </span>
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                                        <OrderStatusSelector orderId={order.id} initialStatus={order.status} />
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
