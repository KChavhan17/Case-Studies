import Meta from '../components/seo/Meta'
import styles from '../styles/Contact.module.css'

export default function Contact() {
  return (
    <>
      <Meta title="Contact" path="/contact" />

      <article className={styles.contact}>
        <h1>Let's Connect</h1>
        <p className={styles.lead}>
          Interested in working together or just want to say hi? Feel free to
          reach out.
        </p>

        <section className={styles.methods}>
          <div>
            <h2>Email</h2>
            <p>
              <a href="mailto:hello@yourdomain.com">hello@yourdomain.com</a>
            </p>
          </div>
          <div>
            <h2>Social</h2>
            <ul className={styles.socialList}>
              <li>
                <a href="https://twitter.com/yourhandle">Twitter</a>
              </li>
              <li>
                <a href="https://linkedin.com/in/yourprofile">LinkedIn</a>
              </li>
              <li>
                <a href="https://github.com/yourusername">GitHub</a>
              </li>
            </ul>
          </div>
        </section>
      </article>
    </>
  )
    }
    
