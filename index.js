import Meta from '../components/seo/Meta'
import { getAllCaseStudies } from '../lib/caseStudies'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home({ caseStudies }) {
  return (
    <>
      <Meta path="/" />

      <section className={styles.hero}>
        <h1>Selected Work</h1>
        <p className={styles.subtitle}>
          Product design &amp; development case studies
        </p>
      </section>

      <section className={styles.grid}>
        {caseStudies.map(({ slug, title, summary, tags }) => (
          <Link key={slug} href={`/work/${slug}`}
            className={styles.card}>
            <div className={styles.cardMeta}>
              {tags.map(t => <span key={t} className={styles.tag}>{t}</span>)}
            </div>
            <h2 className={styles.cardTitle}>{title}</h2>
            <p className={styles.cardSummary}>{summary}</p>
            <span className={styles.readMore}>View case study</span>
          </Link>
        ))}
      </section>
    </>
  )
}

export async function getStaticProps() {
  const caseStudies = getAllCaseStudies()
  return { props: { caseStudies } }
}

