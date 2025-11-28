"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './ProductCard.module.css';

interface ProductCardProps {
    name: string;
    price: string;
    images: string[];
}

const ProductCard = ({ name, price, images }: ProductCardProps) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const nextImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    // When hovered, if we are on the first image, show the second one automatically
    // This mimics the "hover shows another image" behavior, while arrows allow full navigation
    const displayIndex = isHovered && currentImageIndex === 0 && images.length > 1
        ? 1
        : currentImageIndex;

    return (
        <div
            className={styles.card}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => {
                setIsHovered(false);
                setCurrentImageIndex(0); // Reset on leave
            }}
        >
            <div className={styles.imageContainer}>
                <Image
                    src={images[displayIndex]}
                    alt={name}
                    fill
                    className={styles.image}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {isHovered && images.length > 1 && (
                    <>
                        <button className={`${styles.navButton} ${styles.prevButton}`} onClick={prevImage}>
                            <ChevronLeft size={20} />
                        </button>
                        <button className={`${styles.navButton} ${styles.nextButton}`} onClick={nextImage}>
                            <ChevronRight size={20} />
                        </button>
                    </>
                )}
            </div>

            <div className={styles.info}>
                <span>{name}</span>
                {isHovered ? (
                    <span className={styles.colorIndicator}>One Color</span>
                ) : (
                    <span>{price}</span>
                )}
            </div>
        </div>
    );
};

export default ProductCard;
