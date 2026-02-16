'use server';

import { db } from '@/lib/db';
import { orders, orderItems } from '@/lib/schema';
import { eq } from 'drizzle-orm';
import { revalidatePath } from 'next/cache';
import { nanoid } from 'nanoid';
import { z } from 'zod';

const OrderSchema = z.object({
    customerName: z.string().min(2, "Name must be at least 2 characters"),
    customerEmail: z.string().email("Invalid email address"),
    customerPhone: z.string().min(10, "Phone must be at least 10 characters"),
    address: z.string().min(10, "Address must be at least 10 characters"),
    totalAmount: z.number().positive(),
    items: z.array(z.object({
        productId: z.string(),
        quantity: z.number().positive(),
        price: z.number().positive(),
    })),
});

export async function placeOrder(data: z.infer<typeof OrderSchema>) {
    const validated = OrderSchema.parse(data);
    const orderId = `ORD-${nanoid(10)}`;

    // Use a transaction to ensure both order and items are created
    db.transaction((tx) => {
        tx.insert(orders).values({
            id: orderId,
            customerName: validated.customerName,
            customerEmail: validated.customerEmail,
            customerPhone: validated.customerPhone,
            address: validated.address,
            totalAmount: validated.totalAmount,
            status: 'PENDING',
        }).run();

        for (const item of validated.items) {
            tx.insert(orderItems).values({
                id: nanoid(),
                orderId: orderId,
                productId: item.productId,
                quantity: item.quantity,
                price: item.price,
            }).run();
        }
    });

    revalidatePath('/admin/orders');
    return { success: true, orderId };
}

export async function updateOrderStatus(orderId: string, status: string) {
    await db.update(orders)
        .set({ status, updatedAt: new Date() })
        .where(eq(orders.id, orderId));

    revalidatePath('/admin/orders');
}

export async function deleteOrder(orderId: string) {
    await db.delete(orders).where(eq(orders.id, orderId));
    revalidatePath('/admin/orders');
}
