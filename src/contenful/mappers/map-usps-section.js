import { SECTION_NAMES, USP_LAYOUT } from '../../const/index'
import { UspSectionEntry } from '../types'
import mapUsp from './map-usp'

export default function mapUspsSection ({
  title,
  description,
  layout,
  items: usps
}) {
  return {
    sectionType: SECTION_NAMES.USPS_SECTION,
    title,
    description,
    layout: layout ? USP_LAYOUT.REGULAR : USP_LAYOUT.ALTERNATIVE,
    usps: usps?.map(usp => mapUsp(usp))
  }
}
