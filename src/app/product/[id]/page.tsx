import React from 'react';
import { notFound } from 'next/navigation';
import { products } from '@/data/products';
import ProductImageGallery from '@/components/ProductImageGallery';
import ProductInfo from '@/components/ProductInfo';
import styles from './page.module.css';

interface PageProps {
    params: Promise<{ id: string }>;
}

export default async function ProductPage({ params }: PageProps) {
    const { id } = await params;
    const product = products.find((p) => p.id === parseInt(id));

    if (!product) {
        notFound();
    }

    return (
        <div className={styles.container}>
            <div className={styles.gallerySection}>
                <ProductImageGallery images={product.images} name={product.name} />
            </div>
            <div className={styles.infoSection}>
                <ProductInfo
                    name={product.name}
                    price={product.price}
                    description={product.description}
                    faqs={product.faqs}
                />
            </div>
        </div>
    );
}
