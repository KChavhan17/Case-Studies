import Meta from '../../components/seo/Meta'
import { getAllSlugs, getCaseStudyBySlug } from '../../lib/caseStudies'
import styles from '../../styles/CaseStudy.module.css'

export default function CaseStudy({ study }) {
  const { title, summary, client, role, duration, tags, sections } = study

  return (
    <>
      <Meta title={title} description={summary} path={`/work/${study.slug}`} />

      <article className={styles.article}>
        <header className={styles.header}>
          <div className={styles.tags}>
            {tags.map(t => <span key={t} className={styles.tag}>{t}</span>)}
          </div>
          <h1>{title}</h1>
          <p className={styles.summary}>{summary}</p>

          <dl className={styles.meta}>
            <div><dt>Client</dt> <dd>{client}</dd></div>
            <div><dt>Role</dt> <dd>{role}</dd></div>
            <div><dt>Duration</dt> <dd>{duration}</dd></div>
          </dl>
        </header>

        {sections.map(({ heading, body }) => (
          <section key={heading} className={styles.section}>
            <h2>{heading}</h2>
            <p>{body}</p>
          </section>
        ))}
      </article>
    </>
  )
}

export async function getStaticPaths() {
  return { paths: getAllSlugs(), fallback: false }
}

export async function getStaticProps({ params }) {
  const study = getCaseStudyBySlug(params.slug)
  return { props: { study } }
    }
    
