import Meta from '../components/seo/Meta'
import styles from '../styles/Legal.module.css'

export default function TermsConditions() {
  return (
    <>
      <Meta title="Terms & Conditions" path="/terms-conditions" />

      <article className={styles.legal}>
        <h1>Terms & Conditions</h1>
        <p className={styles.date}>Last updated: June 2025</p>

        <section>
          <h2>Use of This Site</h2>
          <p>
            This website is provided for informational and portfolio purposes only.
            You may browse freely but may not reproduce, redistribute, or use any
            content without prior written permission.
          </p>
        </section>

        <section>
          <h2>Intellectual Property</h2>
          <p>
            All case studies, writing, and design work displayed on this site remain
            the property of the respective author or client, as noted. Client work is
            shared with permission.
          </p>
        </section>

        <section>
          <h2>Disclaimer</h2>
          <p>
            This site is provided "as is." We make no warranties regarding uptime,
            accuracy, or fitness for any particular purpose.
          </p>
        </section>

        <section>
          <h2>Changes</h2>
          <p>
            We may update these terms at any time. Continued use of the site after
            changes constitutes acceptance of the revised terms.
          </p>
        </section>
      </article>
    </>
  )
    }
    
