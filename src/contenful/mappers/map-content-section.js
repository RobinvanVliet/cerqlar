import { SECTION_NAMES } from '../../const/index'
import { ContentSectionEntry } from '../types'
import mapImage from './map-image'
import mapLink from './map-link'

export default function mapContentSection ({
  title,
  content,
  callToAction,
  image,
  isReversed
}) {
  return {
    sectionType: SECTION_NAMES.CONTENT_SECTION,
    title,
    content,
    callToAction: callToAction?.fields && mapLink(callToAction),
    image: image && mapImage(image),
    isReversed
  }
}
