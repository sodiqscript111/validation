import React from 'react';
import { ShoppingBag } from 'lucide-react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <h1 className={styles.logo}>Validation</h1>
      </div>
      <div className={styles.rightSection}>
        <button className={styles.iconButton} aria-label="Cart">
          <ShoppingBag size={24} strokeWidth={1.5} />
        </button>
      </div>
    </header>
  );
};

export default Header;
