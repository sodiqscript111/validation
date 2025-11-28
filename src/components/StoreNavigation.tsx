import React from 'react';
import styles from './StoreNavigation.module.css';

const StoreNavigation = () => {
    return (
        <nav className={styles.navContainer}>
            <ul className={styles.navList}>
                <li className={styles.navItem}>
                    <a href="#" className={styles.navLink}>All Products</a>
                </li>
                <li className={styles.navItem}>
                    <a href="#" className={styles.navLink}>New Arrivals</a>
                </li>
                <li className={styles.navItem}>
                    <a href="#" className={styles.navLink}>Best Sellers</a>
                </li>

                <li className={styles.categoryTitle}>Categories</li>

                <li className={styles.navItem}>
                    <a href="#" className={styles.navLink}>Clothing</a>
                </li>
                <li className={styles.navItem}>
                    <a href="#" className={styles.navLink}>Accessories</a>
                </li>
                <li className={styles.navItem}>
                    <a href="#" className={styles.navLink}>Objects</a>
                </li>

                <li className={styles.categoryTitle}>Collections</li>

                <li className={styles.navItem}>
                    <a href="#" className={styles.navLink}>Spring 2025</a>
                </li>
                <li className={styles.navItem}>
                    <a href="#" className={styles.navLink}>Validation Core</a>
                </li>
            </ul>
        </nav>
    );
};

export default StoreNavigation;
