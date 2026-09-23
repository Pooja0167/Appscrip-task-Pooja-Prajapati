// components/Footer.js
import { useEffect, useState } from 'react';
import styles from '../styles/Footer.module.css';

// Tablet/Desktop (>=641px) par sections hamesha khule (static) dikhne chahiye,
// Mobile par collapsible (accordion) hone chahiye. Isko reliably control karne ke
// liye hum JS se screen width check karte hain - yeh CSS trick se zyada bharosemand hai.
function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 641px)');
    function update() {
      setIsDesktop(mq.matches);
    }
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  return isDesktop;
}

function FooterBlock({ title, children, className = '' }) {
  const isDesktop = useIsDesktop();

  if (isDesktop) {
    return (
      <div className={`${styles.footerBlock} ${className}`}>
        <h3 className={styles.blockTitle}>{title}</h3>
        <div className={styles.blockBody}>{children}</div>
      </div>
    );
  }

  return (
    <details className={`${styles.footerBlock} ${className}`}>
      <summary>{title}</summary>
      <div className={styles.blockBody}>{children}</div>
    </details>
  );
}

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.topRow}`}>
        <div className={`${styles.footerBlock} ${styles.newsletterBlock}`}>
          <h3 className={styles.blockTitle}>Be the first to know</h3>
          <div className={styles.blockBody}>
            <p>Lorem ipsum is simply dummy text of the printing and typesetting industry, this is simply dummy text.</p>
            <form className={styles.newsletterForm} onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="newsletter-email" className="visually-hidden">
                Email address
              </label>
              <input id="newsletter-email" type="email" placeholder="Enter your e-mail..." required />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>

        <div className={styles.rightCol}>
          <div className={styles.footerBlock}>
            <h3 className={styles.blockTitle}>Call Us</h3>
            <div className={styles.blockBody}>
              <p>+44 221 133 5360 &nbsp;&bull;&nbsp; customercare@example.com</p>
            </div>
          </div>

          <FooterBlock title="Currency">
            <p className={styles.currencyRow}>
              <span className={styles.flag}>&#127482;&#127480;</span> USD
            </p>
            <p className={styles.currencyNote}>
              Transactions will be completed in Euros and a currency reference is available on hover.
            </p>
          </FooterBlock>
        </div>
      </div>

      <div className="container">
        <div className={styles.divider} />
      </div>

      <div className={`container ${styles.bottomRow}`}>
        <FooterBlock title="LOGO">
          <ul>
            <li>About Us</li>
            <li>Stories</li>
            <li>Artisans</li>
            <li>Boutiques</li>
            <li>Contact Us</li>
            <li>EU Compliances Docs</li>
          </ul>
        </FooterBlock>

        <FooterBlock title="Quick Links">
          <ul>
            <li>Orders &amp; Shipping</li>
            <li>Join/Login as a Seller</li>
            <li>Payment &amp; Pricing</li>
            <li>Return &amp; Refunds</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms &amp; Conditions</li>
          </ul>
        </FooterBlock>

        <div className={styles.followCol}>
          <FooterBlock title="Follow Us">
            <div className={styles.socialIcons}>
              <button aria-label="Instagram">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </button>
              <button aria-label="LinkedIn">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <rect x="3" y="3" width="18" height="18" rx="3" />
                  <line x1="7" y1="10" x2="7" y2="17" />
                  <circle cx="7" cy="7" r="0.8" fill="currentColor" stroke="none" />
                  <path d="M11 17v-4.5a2 2 0 0 1 4 0V17" />
                  <line x1="11" y1="10" x2="11" y2="17" />
                </svg>
              </button>
            </div>
          </FooterBlock>

          <div className={`${styles.footerBlock} ${styles.paymentBlockWrap}`}>
            <h3 className={styles.blockTitle}>We Accept</h3>
            <div className={styles.blockBody}>
              <div className={styles.paymentRow}>
                <span className={`${styles.paymentBadge} ${styles.gpay}`}>
                  <span style={{ color: '#4285F4' }}>G</span>
                  <span style={{ color: '#EA4335' }}>o</span>
                  <span style={{ color: '#FBBC05' }}>o</span>
                  <span style={{ color: '#4285F4' }}>g</span>
                  <span style={{ color: '#34A853' }}>l</span>
                  <span style={{ color: '#EA4335' }}>e</span>
                  &nbsp;Pay
                </span>
                <span className={`${styles.paymentBadge} ${styles.mastercard}`}>
                  <span className={styles.mcCircleRed} />
                  <span className={styles.mcCircleYellow} />
                </span>
                <span className={`${styles.paymentBadge} ${styles.paypal}`}>PayPal</span>
                <span className={`${styles.paymentBadge} ${styles.amex}`}>AMEX</span>
                <span className={`${styles.paymentBadge} ${styles.applepay}`}>&#63743; Pay</span>
                <span className={`${styles.paymentBadge} ${styles.dpay}`}>D Pay</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className={`container ${styles.bottomBar}`}>
        &copy; {new Date().getFullYear()} LOGO. All rights reserved.
      </p>
    </footer>
  );
}