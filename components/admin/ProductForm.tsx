'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { createProduct, updateProduct } from '@/lib/actions/products';
import { Loader2, Upload, X } from 'lucide-react';
import Image from 'next/image';

type ProductFormData = {
    name: string;
    description: string;
    price: number;
    category: string;
    brand: string;
    stock: number;
    isNew: boolean;
    isBestseller: boolean;
    image: FileList;
    specifications: string; // JSON string for now
};

type ProductFormProps = {
    product?: any; // Replace with proper type from schema
    isEdit?: boolean;
};

export default function ProductForm({ product, isEdit = false }: ProductFormProps) {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [preview, setPreview] = useState<string | null>(product?.image || null);

    const { register, handleSubmit, formState: { errors } } = useForm<ProductFormData>({
        defaultValues: {
            name: product?.name || '',
            description: product?.description || '',
            price: product?.price || 0,
            category: product?.category || 'LED Bulbs',
            brand: product?.brand || '',
            stock: product?.stock || 0,
            isNew: product?.isNew || false,
            isBestseller: product?.isBestseller || false,
            specifications: product ? JSON.stringify(product.specifications, null, 2) : '{\n  "Wattage": "9W",\n  "Color": "Cool Day Light"\n}',
        },
    });

    const onSubmit = async (data: ProductFormData) => {
        setIsLoading(true);
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('description', data.description);
        formData.append('price', data.price.toString());
        formData.append('category', data.category);
        formData.append('brand', data.brand);
        formData.append('stock', data.stock.toString());
        if (data.isNew) formData.append('isNew', 'on');
        if (data.isBestseller) formData.append('isBestseller', 'on');
        formData.append('specifications', data.specifications);

        if (data.image && data.image.length > 0) {
            formData.append('image', data.image[0]);
        }

        try {
            if (isEdit && product) {
                await updateProduct(product.id, formData);
            } else {
                await createProduct(formData);
            }
            router.refresh(); // Ensure the cache is invalidated
        } catch (error) {
            console.error(error);
            alert('Something went wrong');
        } finally {
            setIsLoading(false);
        }
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const url = URL.createObjectURL(file);
            setPreview(url);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 rounded-lg bg-white p-6 shadow-md">
            <h1 className="text-2xl font-bold">{isEdit ? 'Edit Product' : 'Add New Product'}</h1>

            <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Product Name</label>
                        <input
                            {...register('name', { required: true })}
                            className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:ring-blue-500"
                        />
                        {errors.name && <span className="text-sm text-red-500">Required</span>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Category</label>
                        <select
                            {...register('category')}
                            className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:ring-blue-500"
                        >
                            <option>LED Bulbs</option>
                            <option>Smart Lighting</option>
                            <option>Tube Lights</option>
                            <option>Ceiling Lights</option>
                            <option>Spotlights</option>
                        </select>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Price (₹)</label>
                            <input
                                type="number"
                                step="0.01"
                                {...register('price', { required: true, min: 0 })}
                                className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Stock</label>
                            <input
                                type="number"
                                {...register('stock', { required: true, min: 0 })}
                                className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:ring-blue-500"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Brand</label>
                        <input
                            {...register('brand', { required: true })}
                            className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:ring-blue-500"
                        />
                    </div>

                    <div className="flex gap-6">
                        <label className="flex items-center gap-2">
                            <input type="checkbox" {...register('isNew')} className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                            <span className="text-sm font-medium text-gray-700">New Arrival</span>
                        </label>
                        <label className="flex items-center gap-2">
                            <input type="checkbox" {...register('isBestseller')} className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                            <span className="text-sm font-medium text-gray-700">Bestseller</span>
                        </label>
                    </div>
                </div>

                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Description</label>
                        <textarea
                            {...register('description', { required: true })}
                            rows={4}
                            className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Specifications (JSON)</label>
                        <textarea
                            {...register('specifications')}
                            rows={4}
                            className="mt-1 block w-full rounded-md border border-gray-300 p-2 font-mono text-sm focus:border-blue-500 focus:ring-blue-500"
                        />
                        <p className="mt-1 text-xs text-gray-500">Enter valid JSON format.</p>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Product Image</label>
                        <div className="mt-1 flex items-center gap-4">
                            {preview && (
                                <div className="relative h-24 w-24 overflow-hidden rounded-md border">
                                    <Image src={preview} alt="Preview" fill className="object-cover" />
                                </div>
                            )}
                            <div className="flex-1">
                                <input
                                    type="file"
                                    accept="image/*"
                                    {...register('image', { required: !isEdit })}
                                    onChange={handleImageChange}
                                    className="block w-full text-sm text-gray-500 file:mr-4 file:rounded-md file:border-0 file:bg-blue-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-blue-700 hover:file:bg-blue-100"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-end gap-3 pt-6 border-t">
                <button
                    type="button"
                    onClick={() => router.back()}
                    className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                    Cancel
                </button>
                <button
                    type="submit"
                    disabled={isLoading}
                    className="flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-50"
                >
                    {isLoading && <Loader2 className="h-4 w-4 animate-spin" />}
                    {isEdit ? 'Update Product' : 'Create Product'}
                </button>
            </div>
        </form>
    );
}
