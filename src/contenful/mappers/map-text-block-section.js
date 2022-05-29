import { TextBlockSectionEntry } from '../types'
import mapImage from './map-image'
import mapLink from './map-link'
import { SECTION_NAMES } from '../../const/index'

const mapTextBlockSection = ({
  title,
  description,
  blocksHaveBackground,
  blocks
}) => {
  return {
    sectionType: SECTION_NAMES.TEXT_BLOCK_SECTION,
    title,
    description,
    blocksHaveBackground,
    blocks: blocks?.map(({
      fields: {
        image,
        title,
        description,
        callToAction
      }
    }) => {
      return {
        title,
        description,
        image: image && mapImage(image),
        callToAction: callToAction && mapLink(callToAction)
      }
    })
  }
}

export default mapTextBlockSection
