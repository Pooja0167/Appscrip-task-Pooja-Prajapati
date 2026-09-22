import styles from '../styles/Sidebar.module.css';

const STATIC_FILTER_GROUPS = [
  { title: 'Ideal For', options: ['Men', 'Women', 'Boy', 'Girl'] },
  { title: 'Occasion', options: ['Casual', 'Formal', 'Party', 'Sports'] },
  { title: 'Work', options: ['Office', 'Outdoor', 'Travel'] },
  { title: 'Fabric', options: ['Cotton', 'Leather', 'Denim', 'Synthetic'] },
  { title: 'Segment', options: ['Premium', 'Regular'] },
  { title: 'Suitable For', options: ['All Season', 'Summer', 'Winter'] },
  { title: 'Raw Materials', options: ['Canvas', 'Polyester'] },
  { title: 'Pattern', options: ['Solid', 'Printed', 'Striped'] },
];

export default function Sidebar({ categories, selectedCategories, onToggleCategory, isOpen }) {
  return (
    <aside
      className={`${styles.sidebar} ${isOpen ? styles.sidebarOpen : ''}`}
      aria-label="Product filters"
    >
      <div className={styles.filterHeader}>
        <h2>Filters</h2>
        <button className={styles.clearBtn} type="button">
          Clear all
        </button>
      </div>

      <div className={styles.filterGroup}>
        <h3>Category</h3>
        {categories.map((category) => (
          <label className={styles.checkboxRow} key={category}>
            <input
              type="checkbox"
              checked={selectedCategories.includes(category)}
              onChange={() => onToggleCategory(category)}
            />
            {category}
          </label>
        ))}
      </div>

      {STATIC_FILTER_GROUPS.map((group) => (
        <details className={styles.filterGroup} key={group.title}>
          <summary>{group.title}</summary>
          {group.options.map((option) => (
            <label className={styles.checkboxRow} key={option}>
              <input type="checkbox" disabled />
              {option}
            </label>
          ))}
        </details>
      ))}
    </aside>
  );
}