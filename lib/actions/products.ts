'use server';

import { db } from '@/lib/db';
import { products } from '@/lib/schema';
import { eq } from 'drizzle-orm';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { writeFile, mkdir } from 'fs/promises';
import path from 'path';
import { nanoid } from 'nanoid';
import type { NewProduct } from '@/lib/types';

export async function createProduct(formData: FormData) {
    const name = formData.get('name') as string;
    const description = formData.get('description') as string;
    const price = parseFloat(formData.get('price') as string);
    const category = formData.get('category') as string;
    const brand = formData.get('brand') as string;
    const stock = parseInt(formData.get('stock') as string);
    const isNew = formData.get('isNew') === 'on';
    const isBestseller = formData.get('isBestseller') === 'on';
    const imageFile = formData.get('image') as File | null;

    // Handle specifications (expected as JSON string from form)
    // Or we can parse individual fields if the form is structured that way.
    // For simplicity, let's assume the form sends a JSON string for now, or we default it.
    const specifications = formData.get('specifications') as string || '{}';

    let imageUrl: string;
    if (imageFile && imageFile.size > 0) {
        const buffer = Buffer.from(await imageFile.arrayBuffer());
        const filename = `${nanoid()}-${imageFile.name.replace(/\s/g, '-')}`;
        const uploadDir = path.join(process.cwd(), 'public', 'uploads');

        // Ensure directory exists
        await mkdir(uploadDir, { recursive: true });

        await writeFile(path.join(uploadDir, filename), buffer);
        imageUrl = `/uploads/${filename}`;
    } else {
        // Auto-generate a placeholder image URL when no image is uploaded
        const label = encodeURIComponent(name.slice(0, 20));
        imageUrl = `https://via.placeholder.com/800x800.png?text=${label}`;
    }

    await db.insert(products).values({
        id: nanoid(),
        name,
        description,
        price,
        category,
        brand,
        image: imageUrl,
        specifications,
        stock,
        isNew,
        isBestseller,
    });

    revalidatePath('/admin/products');
    revalidatePath('/shop');
    redirect('/admin/products');
}

export async function updateProduct(id: string, formData: FormData) {
    const name = formData.get('name') as string;
    const description = formData.get('description') as string;
    const price = parseFloat(formData.get('price') as string);
    const category = formData.get('category') as string;
    const brand = formData.get('brand') as string;
    const stock = parseInt(formData.get('stock') as string);
    const isNew = formData.get('isNew') === 'on';
    const isBestseller = formData.get('isBestseller') === 'on';
    const imageFile = formData.get('image') as File;
    const specifications = formData.get('specifications') as string || '{}';

    const updateData: Partial<NewProduct> = {
        name,
        description,
        price,
        category,
        brand,
        specifications,
        stock,
        isNew,
        isBestseller,
        updatedAt: new Date(),
    };

    if (imageFile && imageFile.size > 0) {
        const buffer = Buffer.from(await imageFile.arrayBuffer());
        const filename = `${nanoid()}-${imageFile.name.replace(/\s/g, '-')}`;
        const uploadDir = path.join(process.cwd(), 'public', 'uploads');

        await mkdir(uploadDir, { recursive: true });
        await writeFile(path.join(uploadDir, filename), buffer);
        updateData.image = `/uploads/${filename}`;
    }

    await db.update(products).set(updateData).where(eq(products.id, id));

    revalidatePath('/admin/products');
    revalidatePath('/shop');
    redirect('/admin/products');
}

export async function deleteProduct(id: string) {
    await db.delete(products).where(eq(products.id, id));
    revalidatePath('/admin/products');
    revalidatePath('/shop');
}
