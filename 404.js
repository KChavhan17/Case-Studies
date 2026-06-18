import Link from 'next/link'
import Meta from '../components/seo/Meta'

export default function NotFound() {
  return (
    <>
      <Meta title="404 — Page Not Found" />
      <div style={{ textAlign: 'center', paddingTop: '4rem' }}>
        <h1 style={{ fontSize: '4rem', margin: '0 0 0.5rem' }}>404</h1>
        <p style={{ color: '#6b7280', marginBottom: '2rem' }}>
          This page doesn't exist.
        </p>
        <Link href="/" style={{ color: '#2563eb', fontWeight: 500 }}>
          ← Back to work
        </Link>
      </div>
    </>
  )
}

