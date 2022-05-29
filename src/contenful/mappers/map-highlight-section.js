import { SECTION_NAMES } from '../../const/index'
import { HighlightSectionEntry } from '../types'
import mapImage from './map-image'
import mapLink from './map-link'

export default function mapHighlightSection ({
  title,
  description,
  callToAction,
  image
}) {
  return title && {
    sectionType: SECTION_NAMES.HIGHLIGHT_SECTION,
    title,
    description,
    callToAction: callToAction && mapLink(callToAction),
    image: image && mapImage(image)
  }
}
