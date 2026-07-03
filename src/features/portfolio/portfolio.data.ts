export interface Project {
  id: string
  /** Key into `portfolio.categories` in the translation dictionaries. */
  categoryKey: string
  img: string
  /** Spans two rows in the desktop grid. */
  tall?: boolean
}

const unsplash = (id: string, w = 1100) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`

/**
 * Placeholder imagery — swap each `img` for real project photography
 * before sharing widely. Titles live in translations.ts under
 * `portfolio.projects`, keyed by `id`.
 */
export const PROJECTS: Project[] = [
  { id: 'kitchen', categoryKey: 'joinery', img: unsplash('photo-1600489000022-c2086d79f9d4'), tall: true },
  { id: 'living', categoryKey: 'upholstery', img: unsplash('photo-1555041469-a586c61ea9bc') },
  { id: 'dining', categoryKey: 'joinery', img: unsplash('photo-1617806118233-18e1de247200') },
  { id: 'drapery', categoryKey: 'drapery', img: unsplash('photo-1616594039964-ae9021a400a0'), tall: true },
  { id: 'lighting', categoryKey: 'lighting', img: unsplash('photo-1513506003901-1e6a229e2d15') },
  { id: 'stair', categoryKey: 'glass', img: unsplash('photo-1600607687939-ce8a6c25118c') },
  { id: 'facade', categoryKey: 'design', img: unsplash('photo-1600585154340-be6161a56a0c') },
  { id: 'suite', categoryKey: 'design', img: unsplash('photo-1505693416388-ac5ce068fe85') },
  { id: 'workshop', categoryKey: 'workshop', img: unsplash('photo-1601058268499-e52658b8bb88'), tall: true },
]

export const CATEGORY_KEYS = [...new Set(PROJECTS.map((p) => p.categoryKey))]
