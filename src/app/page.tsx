"use client";

import React, { useState } from 'react';
import StoreNavigation from '@/components/StoreNavigation';
import ProductCard from '@/components/ProductCard';
import { Menu, X } from 'lucide-react';
import styles from './page.module.css';

import { products } from '@/data/products';

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
        <div className={styles.productGrid}>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
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
