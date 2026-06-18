const siteConfig = {
  name: process.env.NEXT_PUBLIC_SITE_NAME || 'Your Name · Portfolio',
  description: process.env.NEXT_PUBLIC_SITE_DESCRIPTION || 'Portfolio & Case Studies',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://yourportfolio.com',
  author: 'Your Name',
  social: {
    twitter: 'https://twitter.com/yourhandle',
    linkedin: 'https://linkedin.com/in/yourprofile',
    github: 'https://github.com/yourusername',
  },
  nav: [
    { label: 'Work', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
}

export default siteConfig

