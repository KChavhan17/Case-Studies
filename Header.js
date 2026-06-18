import Link from 'next/link'
import { useRouter } from 'next/router'
import siteConfig from '../../lib/siteConfig'
import styles from './Header.module.css'

export default function Header() {
  const { pathname } = useRouter()

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo}>
          {siteConfig.author}
        </Link>

        <nav aria-label="Main navigation">
          <ul className={styles.nav}>
            {siteConfig.nav.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`${styles.link} ${pathname === href ? styles.active : ''}`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

