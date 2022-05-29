import { SECTION_NAMES } from '../../const/index'
import { IFrameSectionEntry } from '../types'

const mapIframeSection = ({
  iframeCode
}) => {
  return {
    sectionType: SECTION_NAMES.IFRAME_SECTION,
    iframeCode
  }
}

export default mapIframeSection
