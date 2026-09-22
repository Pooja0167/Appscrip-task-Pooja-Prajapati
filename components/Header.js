import styles from '../styles/Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.topBar}`}>
        <button className={styles.menuIcon} aria-label="Open menu">
          &#9776;
        </button>
        <p className={styles.logo}>LOGO</p>
        <div className={styles.iconGroup}>
          <button aria-label="Search">&#128269;</button>
          <button aria-label="Wishlist">&#9825;</button>
          <button aria-label="Cart">&#128722;</button>
        </div>
      </div>
      <nav className={`container ${styles.nav}`} aria-label="Primary navigation">
        <a href="#shop">Shop</a>
        <a href="#skills">Skills</a>
        <a href="#stories">Stories</a>
        <a href="#about">About Us</a>
        <a href="#contact">Contact Us</a>
      </nav>
    </header>
  );
}