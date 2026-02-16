'use client';

import { updateOrderStatus } from '@/lib/actions/orders';
import { useState } from 'react';

export function OrderStatusSelector({ orderId, initialStatus }: { orderId: string, initialStatus: string }) {
    const [status, setStatus] = useState(initialStatus);
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = async (newStatus: string) => {
        setIsLoading(true);
        try {
            await updateOrderStatus(orderId, newStatus);
            setStatus(newStatus);
        } catch (error) {
            console.error(error);
            alert('Failed to update status');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <select
            value={status}
            disabled={isLoading}
            onChange={(e) => handleChange(e.target.value)}
            className="rounded border border-gray-300 bg-gray-50 p-1 text-xs disabled:opacity-50"
        >
            <option value="PENDING">Pending</option>
            <option value="SHIPPED">Shipped</option>
            <option value="DELIVERED">Delivered</option>
            <option value="CANCELLED">Cancelled</option>
        </select>
    );
}
