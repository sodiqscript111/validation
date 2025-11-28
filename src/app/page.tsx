"use client";

import React, { useState } from 'react';
import StoreNavigation from '@/components/StoreNavigation';
import ProductCard from '@/components/ProductCard';
import { Menu, X } from 'lucide-react';
import styles from './page.module.css';

// Dummy data for products
const products = [
  {
    id: 1,
    name: "Leather Jacket",
    price: "$250",
    images: [
      "/leather_jacket1.png",
      "/leather_jacket2.png",
      "/leather.png"
    ]
  },
  {
    id: 2,
    name: "Denim Jeans",
    price: "$180",
    images: [
      "/nike_jeans.png",
      "/nike_jeans_hover.png"
    ]
  },
  {
    id: 3,
    name: "Winter Coat",
    price: "$320",
    images: [
      "/coat.png",
      "/coat_hover.png"
    ]
  },
  {
    id: 4,
    name: "Cowhide Bag",
    price: "$450",
    images: [
      "/cowbag.png",
      "/cowbaghover.png",
      "/cowbagcloseup.png"
    ]
  },
  {
    id: 5,
    name: "Leather Belt",
    price: "$90",
    images: [
      "/chillbelt.png",
      "/chillbeltfront.png"
    ]
  },
  {
    id: 6,
    name: "Designer Skirt",
    price: "$280",
    images: [
      "/skirt.png",
      "/skirt_front.png"
    ]
  },
  {
    id: 7,
    name: "Snake Pattern",
    price: "$120",
    images: [
      "/snake.png",
      "/snake_hover.png"
    ]
  },
  {
    id: 8,
    name: "Stitched Gown",
    price: "$550",
    images: [
      "/stichgown.png",
      "/stichgown_closeup.png"
    ]
  },
  {
    id: 9,
    name: "Accessories",
    price: "$80",
    images: [
      "/braceletonhand.png",
      "/braceletcloseup.png"
    ]
  }
];

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className={styles.container}>
      <aside className={styles.sidebar}>
        <StoreNavigation />
      </aside>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className={styles.mobileMenuOverlay}>
          <StoreNavigation />
        </div>
      )}

      {/* Mobile Menu Button */}
      <button
        className={styles.mobileMenuButton}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle Menu"
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      <main className={styles.mainContent}>
        <video
          autoPlay
          loop
          muted
          playsInline
          className={styles.videoBackground}
        >
          <source src="/Model_Clothes_Flaunting.mp4" type="video/mp4" />
        </video>
        <div className={styles.productGrid}>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              price={product.price}
              images={product.images}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
