import { PrismaClient } from '@prisma/client';
import { products } from '../lib/products';

const prisma = new PrismaClient();

async function main() {
    console.log('Seeding database...');

    for (const product of products) {
        // Check if product already exists to avoid duplicates if re-run
        const existing = await prisma.product.findUnique({
            where: { id: product.id },
        });

        if (!existing) {
            await prisma.product.create({
                data: {
                    id: product.id,
                    name: product.name,
                    description: product.description,
                    price: product.price,
                    category: product.category,
                    image: product.image,
                    brand: product.brand,
                    specifications: product.specifications,
                    stock: product.stock,
                    isNew: product.isNew || false,
                    isBestseller: product.isBestseller || false,
                },
            });
            console.log(`Created product: ${product.name}`);
        } else {
            console.log(`Skipping existing product: ${product.name}`);
        }
    }

    console.log('Seeding finished.');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
