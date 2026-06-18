import Meta from '../components/seo/Meta'
import styles from '../styles/About.module.css'

export default function About() {
  return (
    <>
      <Meta
        title="About"
        description="Product designer & developer with 7+ years crafting digital experiences."
        path="/about"
      />

      <article className={styles.about}>
        <h1>About Me</h1>
        <p className={styles.lead}>
          I'm a product designer & developer based in [City]. I help startups and
          scale-ups ship purposeful digital products — from early-stage concepts
          to polished production systems.
        </p>

        <section>
          <h2>Background</h2>
          <p>
            With 7+ years across design and engineering, I work across the full
            product lifecycle: discovery, system design, prototyping, and front-end
            implementation. I'm comfortable writing React, and I use code as a design
            tool, not just a handoff artefact.
          </p>
        </section>

        <section>
          <h2>Currently</h2>
          <p>
            Open to freelance projects and full-time roles. If you're building
            something meaningful, <a href="/contact">let's talk</a>.
          </p>
        </section>
      </article>
    </>
  )
          }
          
