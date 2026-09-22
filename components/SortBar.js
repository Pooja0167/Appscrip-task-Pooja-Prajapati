import styles from '../styles/Home.module.css';

export default function SortBar({ count, sortBy, onSortChange, onToggleFilters }) {
  return (
    <div className={styles.toolbar}>
      <button className={styles.filterToggle} onClick={onToggleFilters}>
        Filters
      </button>
      <p className={styles.resultCount}>{count} products</p>
      <select
        className={styles.sortSelect}
        value={sortBy}
        onChange={(e) => onSortChange(e.target.value)}
        aria-label="Sort products"
      >
        <option value="recommended">Recommended</option>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
        <option value="name-asc">Name: A to Z</option>
      </select>
    </div>
  );
}