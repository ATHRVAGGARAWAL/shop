import { db } from '../lib/db';
import { products } from '../lib/schema';
import { products as initialProducts } from '../lib/products';
import { eq } from 'drizzle-orm';

async function main() {
    console.log('Seeding database...');

    for (const product of initialProducts) {
        const existing = await db.select().from(products).where(eq(products.id, product.id)).get();

        if (!existing) {
            await db.insert(products).values({
                id: product.id,
                name: product.name,
                description: product.description,
                price: product.price,
                category: product.category,
                image: product.image,
                brand: product.brand,
                specifications: JSON.stringify(product.specifications),
                stock: product.stock,
                isNew: product.isNew,
                isBestseller: product.isBestseller,
            });
            console.log(`Created product: ${product.name}`);
        } else {
            console.log(`Skipping existing product: ${product.name}`);
        }
    }

    console.log('Seeding finished.');
}

main().catch((e) => {
    console.error(e);
    process.exit(1);
});
