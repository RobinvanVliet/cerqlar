import { SECTION_NAMES } from '../../const/index'
import { CtaSectionEntry } from '../types'
import mapLink from './map-link'
import mapImage from './map-image'

export default function mapCtaSection ({
  title,
  description,
  callToAction: ctaItems,
  image
}) {
  return title && {
    sectionType: SECTION_NAMES.CTA_SECTION,
    title,
    description,
    ctaItems: ctaItems?.map(item => mapLink(item)),
    image: image && mapImage(image)
  }
}
