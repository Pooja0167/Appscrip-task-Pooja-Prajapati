import { useState } from 'react';
import styles from '../styles/Header.module.css';

const ANNOUNCEMENTS = ['Lorem ipsum dolor', 'Lorem ipsum dolor', 'Lorem ipsum dolor'];

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.announcementBar}>
        {ANNOUNCEMENTS.map((text, index) => (
          <p className={styles.announcementItem} key={index}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="7" height="7" />
              <rect x="14" y="3" width="7" height="7" />
              <rect x="3" y="14" width="7" height="7" />
              <rect x="14" y="14" width="7" height="7" />
            </svg>
            {text}
          </p>
        ))}
      </div>

      <div className={`container ${styles.topBar}`}>
        <span className={styles.logoMark} aria-hidden="true">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
            <rect x="2" y="2" width="20" height="20" />
            <path d="M2 2l20 20M22 2L2 22" />
            <circle cx="12" cy="12" r="4.5" />
          </svg>
        </span>

        <button
          className={styles.menuIcon}
          aria-label="Open menu"
          aria-expanded={navOpen}
          onClick={() => setNavOpen((v) => !v)}
          type="button"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>

        <p className={styles.logoText}>LOGO</p>

        <div className={styles.iconGroup}>
          <button className={styles.iconBtn} aria-label="Search">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="11" cy="11" r="7" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>

          <button className={styles.iconBtn} aria-label="Wishlist">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z" />
            </svg>
          </button>

          <button className={`${styles.iconBtn} ${styles.hideOnSmall}`} aria-label="Bag">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M6 8h12l-1 12H7L6 8z" />
              <path d="M9 8V6a3 3 0 0 1 6 0v2" />
            </svg>
          </button>

          <button className={`${styles.iconBtn} ${styles.hideOnSmall}`} aria-label="Account">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="12" cy="8" r="4" />
              <path d="M4 21c0-4 3.5-7 8-7s8 3 8 7" />
            </svg>
          </button>

          <button className={`${styles.langBtn} ${styles.hideOnSmall}`} type="button">
            ENG
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
        </div>
      </div>

      <nav
        className={`container ${styles.nav} ${navOpen ? styles.navOpen : ''}`}
        aria-label="Primary navigation"
      >
        <a href="#shop">Shop</a>
        <a href="#skills">Skills</a>
        <a href="#stories">Stories</a>
        <a href="#about">About Us</a>
        <a href="#contact">Contact Us</a>
      </nav>
    </header>
  );
}