import styles from '../styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.newsletter}`}>
        <div>
          <h3>Be the first to know</h3>
          <p>Sign up for updates, new products and offers.</p>
          <form className={styles.newsletterForm} onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="newsletter-email" className="visually-hidden">
              Email address
            </label>
            <input id="newsletter-email" type="email" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
        <div>
          <h3>Contact Us</h3>
          <p>+91 123 456 7890</p>
          <p>support@example.com</p>
        </div>
      </div>

      <div className={`container ${styles.linksGrid}`}>
        <div>
          <h3>Find It Fast</h3>
          <ul>
            <li>Order Status</li>
            <li>Gift Card Balance</li>
            <li>Product Recall</li>
          </ul>
        </div>
        <div>
          <h3>Quick Links</h3>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Store Locator</li>
          </ul>
        </div>
        <div>
          <h3>Follow Us</h3>
          <ul>
            <li>Instagram</li>
            <li>Facebook</li>
            <li>Twitter</li>
          </ul>
        </div>
        <div>
          <h3>We Accept</h3>
          <ul>
            <li>Visa &bull; Mastercard &bull; PayPal</li>
          </ul>
        </div>
      </div>

      <p className={`container ${styles.bottomBar}`}>
        &copy; {new Date().getFullYear()} LOGO. All rights reserved.
      </p>
    </footer>
  );
}