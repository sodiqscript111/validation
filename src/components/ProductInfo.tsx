"use client";

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import styles from './ProductInfo.module.css';

interface ProductInfoProps {
    name: string;
    price: string;
    description: string;
    faqs: { question: string; answer: string }[];
}

const SIZES = ['XS', 'S', 'M', 'L', 'XL'];

const ProductInfo = ({ name, price, description, faqs }: ProductInfoProps) => {
    const [selectedSize, setSelectedSize] = useState<string | null>(null);
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
    const [notification, setNotification] = useState<string | null>(null);

    const toggleFaq = (index: number) => {
        setOpenFaqIndex(openFaqIndex === index ? null : index);
    };

    const showNotification = (message: string) => {
        setNotification(message);
        setTimeout(() => setNotification(null), 3000);
    };

    const handleBuy = () => {
        showNotification("Purchase Successful!");
    };

    const handleAddToCart = () => {
        showNotification("Added to Cart");
    };

    return (
        <div className={styles.container}>
            {notification && (
                <div className={styles.notification}>
                    {notification}
                </div>
            )}

            <div className={styles.header}>
                <h1 className={styles.name}>{name}</h1>
                <p className={styles.price}>{price}</p>
            </div>

            <div className={styles.description}>
                <p>{description}</p>
            </div>

            <div className={styles.section}>
                <h3 className={styles.sectionTitle}>Select Size</h3>
                <div className={styles.sizeGrid}>
                    {SIZES.map((size) => (
                        <button
                            key={size}
                            className={`${styles.sizeButton} ${selectedSize === size ? styles.selected : ''}`}
                            onClick={() => setSelectedSize(size)}
                        >
                            {size}
                        </button>
                    ))}
                </div>
            </div>

            <div className={styles.actions}>
                <button
                    className={`${styles.button} ${styles.buyButton}`}
                    onClick={handleBuy}
                >
                    Buy Now
                </button>
                <button
                    className={`${styles.button} ${styles.cartButton}`}
                    onClick={handleAddToCart}
                >
                    Add to Cart
                </button>
            </div>

            <div className={styles.section}>
                <h3 className={styles.sectionTitle}>Product Details</h3>
                <div className={styles.faqList}>
                    {faqs.map((faq, index) => (
                        <div key={index} className={styles.faqItem}>
                            <button
                                className={styles.faqQuestion}
                                onClick={() => toggleFaq(index)}
                            >
                                {faq.question}
                                {openFaqIndex === index ? <Minus size={16} /> : <Plus size={16} />}
                            </button>
                            {openFaqIndex === index && (
                                <div className={styles.faqAnswer}>
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductInfo;
