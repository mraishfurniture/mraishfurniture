import type { SvgIconComponent } from '@mui/icons-material'
import CarpenterOutlined from '@mui/icons-material/CarpenterOutlined'
import ChairOutlined from '@mui/icons-material/ChairOutlined'
import CurtainsOutlined from '@mui/icons-material/CurtainsOutlined'
import DesignServicesOutlined from '@mui/icons-material/DesignServicesOutlined'
import DoorSlidingOutlined from '@mui/icons-material/DoorSlidingOutlined'
import ImagesearchRollerOutlined from '@mui/icons-material/ImagesearchRollerOutlined'
import LightOutlined from '@mui/icons-material/LightOutlined'
import WindowOutlined from '@mui/icons-material/WindowOutlined'

export interface Service {
  title: string
  blurb: string
  Icon: SvgIconComponent
}

export const SERVICES: Service[] = [
  {
    title: 'Carpentry',
    Icon: CarpenterOutlined,
    blurb:
      'Bespoke joinery, doors, wardrobes, kitchens and one-off furniture — cut, assembled and finished in our own workshop.',
  },
  {
    title: 'Upholstery',
    Icon: ChairOutlined,
    blurb:
      'Sofas and chairs built or rebuilt from the frame up, dressed in fabrics chosen to look beautiful and live long.',
  },
  {
    title: 'Interior & Exterior Design',
    Icon: DesignServicesOutlined,
    blurb:
      'Complete design and decoration for interiors and facades — concept, materials and execution by one accountable team.',
  },
  {
    title: 'Glass Works',
    Icon: WindowOutlined,
    blurb:
      'Mirrors, partitions, balustrades, shopfronts and tabletops — measured to the millimetre, cut and installed cleanly.',
  },
  {
    title: 'Aluminum Works',
    Icon: DoorSlidingOutlined,
    blurb:
      'Doors, windows, frames and cladding with clean lines and tight seals, made for Jordan’s climate.',
  },
  {
    title: 'Drapery',
    Icon: CurtainsOutlined,
    blurb:
      'Curtains, sheers and blinds tailored to fall exactly right — hardware, pleating and hanging included.',
  },
  {
    title: 'Painting',
    Icon: ImagesearchRollerOutlined,
    blurb:
      'Furniture refinishing and full residential painting — stains, lacquers and wall finishes with a flawless final coat.',
  },
  {
    title: 'Lighting Works',
    Icon: LightOutlined,
    blurb:
      'Lighting planned, supplied and installed to flatter the room — ambient, task and accent, wired safely.',
  },
]
