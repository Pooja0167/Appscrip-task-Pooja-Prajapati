// components/SortBar.js
import { useState } from 'react';
import styles from '../styles/Home.module.css';

const SORT_OPTIONS = [
  { value: 'recommended', label: 'Recommended' },
  { value: 'newest', label: 'Newest First' },
  { value: 'popular', label: 'Popular' },
  { value: 'price-desc', label: 'Price : High to Low' },
  { value: 'price-asc', label: 'Price : Low to High' },
];

export default function SortBar({ count, sortBy, onSortChange, onToggleFilters }) {
  const [open, setOpen] = useState(false);
  const activeLabel = SORT_OPTIONS.find((o) => o.value === sortBy)?.label || 'Recommended';

  function handleSelect(value) {
    onSortChange(value);
    setOpen(false);
  }

  return (
    <div className={styles.toolbar}>
      <button className={styles.filterToggle} onClick={onToggleFilters} type="button">
        Hide Filter
      </button>
      <p className={styles.resultCount}>{count} Items</p>

      <div className={styles.sortWrap}>
        <button
          className={styles.sortTrigger}
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          type="button"
        >
          {activeLabel} <span>&#9662;</span>
        </button>

        {open && (
          <ul className={styles.sortMenu} role="listbox">
            {SORT_OPTIONS.map((option) => (
              <li key={option.value}>
                <button
                  type="button"
                  className={styles.sortMenuItem}
                  onClick={() => handleSelect(option.value)}
                >
                  {option.value === sortBy && <span className={styles.checkMark}>&#10003;</span>}
                  {option.label}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}