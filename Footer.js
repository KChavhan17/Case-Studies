import Link from 'next/link';
import siteConfig from '../../lib/siteConfig';
import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.copy}>
          &copy; {year} {siteConfig.author}. All rights reserved.
        </p>

        <nav aria-label="Footer navigation">
          <ul className={styles.links}>
            {Object.entries(siteConfig.social).map(([platform, href]) => (
              <li key={platform}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  {platform.charAt(0).toUpperCase() + platform.slice(1)}
                </a>
              </li>
            ))}
            <li>
              <Link href="/privacy-policy" className={styles.link}>
                Privacy
              </Link>
            </li>
            <li>
              <Link href="/terms-conditions" className={styles.link}>
                Terms
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

