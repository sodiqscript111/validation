import React from 'react';
import Image from 'next/image';
import styles from './ProductImageGallery.module.css';

interface ProductImageGalleryProps {
    images: string[];
    name: string;
}

const ProductImageGallery = ({ images, name }: ProductImageGalleryProps) => {
    return (
        <div className={styles.galleryContainer}>
            {images.map((src, index) => (
                <div key={index} className={styles.imageWrapper}>
                    <Image
                        src={src}
                        alt={`${name} - View ${index + 1}`}
                        fill
                        className={styles.image}
                        priority={index === 0}
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                </div>
            ))}
        </div>
    );
};

export default ProductImageGallery;
