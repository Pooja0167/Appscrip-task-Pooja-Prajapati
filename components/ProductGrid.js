import styles from '../styles/Home.module.css';
import ProductCard from './ProductCard';

export default function ProductGrid({ products }) {
  if (!products.length) {
    return <p className={styles.emptyState}>No products match the selected filters.</p>;
  }

  return (
    <div className={styles.grid}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}