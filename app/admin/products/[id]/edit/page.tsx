import { db } from '@/lib/db';
import { products } from '@/lib/schema';
import { eq } from 'drizzle-orm';
import { notFound } from 'next/navigation';
import ProductForm from '@/components/admin/ProductForm';

export default async function EditProductPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const product = await db.select().from(products).where(eq(products.id, id)).get();

    if (!product) {
        notFound();
    }

    // Parse specifications from string to object logic handle inside form defaultValues
    const formattedProduct = {
        ...product,
        specifications: JSON.parse(product.specifications),
    };

    return (
        <div className="mx-auto max-w-4xl">
            <ProductForm product={formattedProduct} isEdit />
        </div>
    );
}
