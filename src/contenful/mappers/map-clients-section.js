import { SECTION_NAMES } from '@const/index'
import { ClientsSectionEntry } from '@domains/contentful/types'
import mapImage from '@domains/contentful/mappers/map-image'

export default function mapClientsSection ({
  title,
  logos
}) {
  return title && {
    sectionType: SECTION_NAMES.CLIENTS_SECTION,
    title,
    logos: logos && logos.map(logo => mapImage(logo))
  }
}
