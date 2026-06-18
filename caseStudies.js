import fs from 'fs';
import path from 'path';

const CONTENT_DIR = path.join(process.cwd(), 'content', 'case-studies');

/**
 * Each case study is a folder under /content/case-studies/<slug>/
 * with an index.json metadata file.
 */
export function getAllCaseStudies() {
  const slugs = fs.readdirSync(CONTENT_DIR).filter(f => 
    fs.statSync(path.join(CONTENT_DIR, f)).isDirectory()
  );

  return slugs
    .map(slug => {
      const meta = JSON.parse(
        fs.readFileSync(path.join(CONTENT_DIR, slug, 'index.json'), 'utf8')
      );
      return { slug, ...meta };
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function getCaseStudyBySlug(slug) {
  const meta = JSON.parse(
    fs.readFileSync(path.join(CONTENT_DIR, slug, 'index.json'), 'utf8')
  );
  return { slug, ...meta };
}

export function getAllSlugs() {
  return fs.readdirSync(CONTENT_DIR)
    .filter(f => fs.statSync(path.join(CONTENT_DIR, f)).isDirectory())
    .map(slug => ({ params: { slug } }));
}

