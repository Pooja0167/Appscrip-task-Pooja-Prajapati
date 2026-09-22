// components/SortBar.js
// Toolbar - filter toggle (mobile), result count, aur custom "Recommended" dropdown.
import { useState, useRef, useEffect } from 'react';
import styles from '../styles/Home.module.css';

const SORT_OPTIONS = [
  { value: 'recommended', label: 'Recommended' },
  { value: 'newest', label: 'Newest First' },
  { value: 'popular', label: 'Popular' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'price-asc', label: 'Price: Low to High' },
];

export default function SortBar({ count, sortBy, onSortChange, onToggleFilters }) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Dropdown ke bahar click karne par usse band kar dein
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const currentLabel = SORT_OPTIONS.find((o) => o.value === sortBy)?.label || 'Recommended';

  return (
    <div className={styles.toolbar}>
      <button className={styles.filterToggle} onClick={onToggleFilters} type="button">
        Filters
      </button>
      <p className={styles.resultCount}>{count} products</p>

      <div className={styles.sortDropdown} ref={dropdownRef}>
        <button
          className={styles.sortTrigger}
          onClick={() => setOpen((v) => !v)}
          aria-haspopup="listbox"
          aria-expanded={open}
          type="button"
        >
          {currentLabel} <span className={styles.chevron}>{open ? '▲' : '▼'}</span>
        </button>

        {open && (
          <ul className={styles.sortMenu} role="listbox">
            {SORT_OPTIONS.map((option) => (
              <li key={option.value}>
                <button
                  className={styles.sortMenuItem}
                  onClick={() => {
                    onSortChange(option.value);
                    setOpen(false);
                  }}
                  type="button"
                  role="option"
                  aria-selected={sortBy === option.value}
                >
                  <span className={styles.checkmark}>
                    {sortBy === option.value ? '✓' : ''}
                  </span>
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