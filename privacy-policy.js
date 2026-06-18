import Meta from '../components/seo/Meta'
import styles from '../styles/Legal.module.css'

export default function PrivacyPolicy() {
  return (
    <>
      <Meta title="Privacy Policy" path="/privacy-policy" />

      <article className={styles.legal}>
        <h1>Privacy Policy</h1>
        <p className={styles.date}>Last updated: June 2025</p>

        <section>
          <h2>Information We Collect</h2>
          <p>
            When you submit the contact form we store your name, email address, and
            message in our secure database (Supabase) solely to respond to your enquiry.
            We do not sell or share your information with third parties.
          </p>
        </section>

        <section>
          <h2>Analytics</h2>
          <p>
            This site may use Google Analytics to understand aggregate visitor behaviour.
            No personally identifiable information is collected through analytics.
          </p>
        </section>

        <section>
          <h2>Cookies</h2>
          <p>
            We use only essential cookies required for site functionality. No tracking
            or advertising cookies are set.
          </p>
        </section>

        <section>
          <h2>Your Rights</h2>
          <p>
            You may request access to, correction of, or deletion of any personal data
            you have submitted by emailing us at the address on the contact page.
          </p>
        </section>
      </article>
    </>
  )
}

