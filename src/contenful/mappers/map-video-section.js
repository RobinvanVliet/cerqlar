import { VideoSectionEntry } from '../types'
import mapLink from './map-link'
import SECTION_NAMES from '../../const/section-names'

const mapVideoSection = ({
  title,
  description,
  descriptionLocation,
  videoUrl,
  callToAction
}) => {
  return {
    sectionType: SECTION_NAMES.VIDEO_SECTION,
    title,
    description,
    descriptionLocation,
    videoUrl,
    callToAction: callToAction && mapLink(callToAction)
  }
}

export default mapVideoSection
