import { useState } from 'react';
import styles from '../styles/ProductCard.module.css';

export default function ProductCard({ product }) {
  const [wishlisted, setWishlisted] = useState(false);
  const altText = `${product.title} - ${product.category} | Buy Online`;

  return (
    <article className={styles.card}>
      <div className={styles.imageWrap}>
        <img src={product.image} alt={altText} loading="lazy" width="300" height="300" />
        <button
          className={styles.wishlistBtn}
          aria-label={wishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
          onClick={() => setWishlisted((v) => !v)}
          type="button"
        >
          {wishlisted ? '♥' : '♡'}
        </button>
      </div>
      <p className={styles.category}>{product.category}</p>
      <h3 className={styles.title}>{product.title}</h3>
      <p className={styles.price}>${product.price.toFixed(2)}</p>
    </article>
  );
}