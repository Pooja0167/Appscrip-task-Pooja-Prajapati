// components/Footer.js
import styles from '../styles/Footer.module.css';

const LOGO_LINKS = ['About Us', 'Stories', 'Artisans', 'Boutiques', 'Contact Us', 'EU Compliances Docs'];
const QUICK_LINKS = [
  'Orders & Shipping',
  'Join/Login as a Seller',
  'Payment & Pricing',
  'Return & Refunds',
  'FAQs',
  'Privacy Policy',
  'Terms & Conditions',
];

function SocialIcons() {
  return (
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
  );
}

function PaymentBadges() {
  return (
    <div className={styles.paymentRow}>
      <span className={`${styles.paymentBadge} ${styles.gpay}`}>
        <span style={{ color: '#4285F4' }}>G</span>
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
  );
}

function NewsletterForm() {
  return (
    <form className={styles.newsletterForm} onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="newsletter-email" className="visually-hidden">
        Email address
      </label>
      <input id="newsletter-email" type="email" placeholder="Enter your e-mail..." required />
      <button type="submit">Subscribe</button>
    </form>
  );
}

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* ============ MOBILE VERSION (visible only below 641px) ============ */}
      <div className={`container ${styles.mobileOnly}`}>
        <div className={styles.mBlock}>
          <h3 className={styles.mTitle}>Be the first to know</h3>
          <p className={styles.mText}>
            Lorem ipsum is simply dummy text of the printing and typesetting industry, this is simply dummy text.
          </p>
          <NewsletterForm />
        </div>

        <div className={styles.mBlock}>
          <h3 className={styles.mTitle}>Call Us</h3>
          <p className={styles.mText}>+44 221 133 5360 &nbsp;&bull;&nbsp; customercare@example.com</p>
        </div>

        <details className={styles.mBlock}>
          <summary className={styles.mSummary}>Currency</summary>
                   <p className={styles.currencyRow}>
            <span className={styles.flagCircle}>
              <svg width="20" height="20" viewBox="0 0 20 20">
                <circle cx="10" cy="10" r="10" fill="#fff" />
                <rect y="0" width="20" height="1.8" fill="#B22234" />
                <rect y="3.6" width="20" height="1.8" fill="#B22234" />
                <rect y="7.2" width="20" height="1.8" fill="#B22234" />
                <rect y="10.8" width="20" height="1.8" fill="#B22234" />
                <rect y="14.4" width="20" height="1.8" fill="#B22234" />
                <rect y="18" width="20" height="1.8" fill="#B22234" />
                <rect x="0" y="0" width="9" height="10" fill="#3C3B6E" />
              </svg>
            </span>
            USD
          </p>
          <p className={styles.currencyNote}>
            Transactions will be completed in Euros and a currency reference is available on hover.
          </p>
        </details>

        <details className={styles.mBlock}>
          <summary className={styles.mSummary}>LOGO</summary>
          <ul className={styles.mList}>
            {LOGO_LINKS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </details>

        <details className={styles.mBlock}>
          <summary className={styles.mSummary}>Quick Links</summary>
          <ul className={styles.mList}>
            {QUICK_LINKS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </details>

        <details className={styles.mBlock}>
          <summary className={styles.mSummary}>Follow Us</summary>
          <SocialIcons />
        </details>

        <div className={styles.mBlock}>
          <h3 className={styles.mTitle}>We Accept</h3>
          <PaymentBadges />
        </div>
      </div>

      {/* ============ TABLET / DESKTOP VERSION (visible only at 641px and above) ============ */}
      <div className={`container ${styles.desktopOnly}`}>
        <div className={styles.dTopRow}>
          <div className={styles.dNewsletter}>
            <h3 className={styles.dTitle}>Be the first to know</h3>
            <p className={styles.dText}>
              Lorem ipsum is simply dummy text of the printing and typesetting industry, this is simply dummy text.
            </p>
            <NewsletterForm />
          </div>

          <div className={styles.dRightCol}>
            <div>
              <h3 className={styles.dTitle}>Call Us</h3>
              <p className={styles.dText}>+44 221 133 5360 &nbsp;&bull;&nbsp; customercare@example.com</p>
            </div>
            <div>
              <h3 className={styles.dTitle}>Currency</h3>
              <p className={styles.currencyRow}>
                <span className={styles.flagCircle}>
                  <svg width="20" height="20" viewBox="0 0 20 20">
                    <circle cx="10" cy="10" r="10" fill="#fff" />
                    <rect y="0" width="20" height="1.8" fill="#B22234" />
                    <rect y="3.6" width="20" height="1.8" fill="#B22234" />
                    <rect y="7.2" width="20" height="1.8" fill="#B22234" />
                    <rect y="10.8" width="20" height="1.8" fill="#B22234" />
                    <rect y="14.4" width="20" height="1.8" fill="#B22234" />
                    <rect y="18" width="20" height="1.8" fill="#B22234" />
                    <rect x="0" y="0" width="9" height="10" fill="#3C3B6E" />
                  </svg>
                </span>
                USD
              </p>
              <p className={styles.currencyNote}>
                Transactions will be completed in Euros and a currency reference is available on hover.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.divider} />

        <div className={styles.dBottomRow}>
          <div>
            <h3 className={styles.dTitle}>LOGO</h3>
            <ul className={styles.dList}>
              {LOGO_LINKS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className={styles.dTitle}>Quick Links</h3>
            <ul className={styles.dList}>
              {QUICK_LINKS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className={styles.dTitle}>Follow Us</h3>
            <SocialIcons />
            <h3 className={`${styles.dTitle} ${styles.acceptTitle}`}>We Accept</h3>
            <PaymentBadges />
          </div>
        </div>
      </div>

      <p className={`container ${styles.bottomBar}`}>
        &copy; {new Date().getFullYear()} LOGO. All rights reserved.
      </p>
    </footer>
  );
}