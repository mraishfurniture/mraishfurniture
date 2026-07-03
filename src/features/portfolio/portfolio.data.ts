export interface Project {
  id: string
  title: string
  category: string
  img: string
  /** Spans two rows in the desktop grid. */
  tall?: boolean
}

const unsplash = (id: string, w = 1100) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`

/**
 * Placeholder imagery — swap each `img` for real project photography
 * before sharing widely. Keep roughly the same tall/wide mix.
 */
export const PROJECTS: Project[] = [
  {
    id: 'kitchen',
    title: 'Bespoke kitchen & cabinetry',
    category: 'Joinery',
    img: unsplash('photo-1600489000022-c2086d79f9d4'),
    tall: true,
  },
  {
    id: 'living',
    title: 'Living room reupholstery',
    category: 'Upholstery',
    img: unsplash('photo-1555041469-a586c61ea9bc'),
  },
  {
    id: 'dining',
    title: 'Dining suite in velvet & walnut',
    category: 'Joinery',
    img: unsplash('photo-1617806118233-18e1de247200'),
  },
  {
    id: 'drapery',
    title: 'Full-height drapery',
    category: 'Drapery',
    img: unsplash('photo-1616594039964-ae9021a400a0'),
    tall: true,
  },
  {
    id: 'lighting',
    title: 'Layered lighting design',
    category: 'Lighting',
    img: unsplash('photo-1513506003901-1e6a229e2d15'),
  },
  {
    id: 'stair',
    title: 'Glass & metal stairwell',
    category: 'Glass & Aluminum',
    img: unsplash('photo-1600607687939-ce8a6c25118c'),
  },
  {
    id: 'facade',
    title: 'Villa facade refresh',
    category: 'Design & Decoration',
    img: unsplash('photo-1600585154340-be6161a56a0c'),
  },
  {
    id: 'suite',
    title: 'Master suite interior',
    category: 'Design & Decoration',
    img: unsplash('photo-1505693416388-ac5ce068fe85'),
  },
  {
    id: 'workshop',
    title: 'Inside the Mraish workshop',
    category: 'Workshop',
    img: unsplash('photo-1601058268499-e52658b8bb88'),
    tall: true,
  },
]
