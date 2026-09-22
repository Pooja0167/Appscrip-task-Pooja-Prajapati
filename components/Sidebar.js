import styles from '../styles/Sidebar.module.css';

const STATIC_FILTER_GROUPS = [
  { key: 'idealFor', title: 'Ideal For', options: ['Men', 'Women', 'Baby & Kids'], hasUnselect: true },
  { key: 'occasion', title: 'Occasion', options: ['Casual', 'Formal', 'Party', 'Sports'] },
  { key: 'work', title: 'Work', options: ['Office', 'Outdoor', 'Travel'] },
  { key: 'fabric', title: 'Fabric', options: ['Cotton', 'Leather', 'Denim', 'Synthetic'] },
  { key: 'segment', title: 'Segment', options: ['Premium', 'Regular'] },
  { key: 'suitableFor', title: 'Suitable For', options: ['All Season', 'Summer', 'Winter'] },
  { key: 'rawMaterials', title: 'Raw Materials', options: ['Canvas', 'Polyester'] },
  { key: 'pattern', title: 'Pattern', options: ['Solid', 'Printed', 'Striped'] },
];

export default function Sidebar({ categories, selectedCategories, onToggleCategory, isOpen }) {
  return (
    <aside
      className={`${styles.sidebar} ${isOpen ? styles.sidebarOpen : ''}`}
      aria-label="Product filters"
    >
      <label className={styles.customizableRow}>
        <input type="checkbox" />
        Customizable
      </label>

      <details className={styles.filterGroup} open>
        <summary>
          Ideal For
          <span className={styles.summaryValue}>All</span>
        </summary>
        <button type="button" className={styles.unselectAll}>
          Unselect all
        </button>
        {STATIC_FILTER_GROUPS[0].options.map((option) => (
          <label className={styles.checkboxRow} key={option}>
            <input type="checkbox" disabled />
            {option}
          </label>
        ))}
      </details>

      <details className={styles.filterGroup}>
        <summary>
          Category
          <span className={styles.summaryValue}>
            {selectedCategories.length ? selectedCategories.join(', ') : 'All'}
          </span>
        </summary>
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
      </details>

      {STATIC_FILTER_GROUPS.slice(1).map((group) => (
        <details className={styles.filterGroup} key={group.key}>
          <summary>
            {group.title}
            <span className={styles.summaryValue}>All</span>
          </summary>
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