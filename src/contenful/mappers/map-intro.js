import { SECTION_NAMES } from '../../const/index'
import { HeadingEntry } from '../types'
import { OrbOptions } from '../../const/orb-options'
import mapImage from './map-image'
import mapLink from './map-link'

export default function mapIntro ({
  fields: {
    title,
    subtitle,
    hasLargeSubtitle,
    image,
    callToAction,
    showOrb,
  } = {}
}) {
  return title && {
    sectionType: SECTION_NAMES.INTRO_BLOCK,
    title,
    subtitle,
    hasLargeSubtitle,
    image: image && mapImage(image),
    callToAction: callToAction && mapLink(callToAction),
    hasOrb: showOrb === OrbOptions.RIGHT,
    hasSecondaryOrb: showOrb === OrbOptions.LEFT
  }
}
