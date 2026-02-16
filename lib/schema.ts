import { sqliteTable, text, integer, real } from 'drizzle-orm/sqlite-core';

export const products = sqliteTable('products', {
    id: text('id').primaryKey(),
    name: text('name').notNull(),
    description: text('description').notNull(),
    price: real('price').notNull(),
    category: text('category').notNull(),
    image: text('image').notNull(),
    brand: text('brand').notNull(),
    specifications: text('specifications').notNull(), // JSON string
    stock: integer('stock').notNull().default(0),
    isNew: integer('is_new', { mode: 'boolean' }).default(false),
    isBestseller: integer('is_bestseller', { mode: 'boolean' }).default(false),
    createdAt: integer('created_at', { mode: 'timestamp' }).$defaultFn(() => new Date()),
    updatedAt: integer('updated_at', { mode: 'timestamp' }).$defaultFn(() => new Date()), // Simplified for SQLite
});

export const orders = sqliteTable('orders', {
    id: text('id').primaryKey(), // CUID or UUID
    customerName: text('customer_name').notNull(),
    customerEmail: text('customer_email').notNull(),
    customerPhone: text('customer_phone'),
    address: text('address').notNull(),
    totalAmount: real('total_amount').notNull(),
    status: text('status').notNull().default('PENDING'), // PENDING, SHIPPED, DELIVERED, CANCELLED
    createdAt: integer('created_at', { mode: 'timestamp' }).$defaultFn(() => new Date()),
    updatedAt: integer('updated_at', { mode: 'timestamp' }).$defaultFn(() => new Date()),
});

export const orderItems = sqliteTable('order_items', {
    id: text('id').primaryKey(),
    orderId: text('order_id').notNull().references(() => orders.id),
    productId: text('product_id').notNull().references(() => products.id),
    quantity: integer('quantity').notNull(),
    price: real('price').notNull(), // Price at purchase
});
