import { SECTION_NAMES } from '../../const/index'
import { CareersSectionEntry } from '../types'
import mapCareer from './map-career'
// import removeDraftEntries from './ut/remove-draft-entries'
import removeDraftEntries from '../../utils/remove-draft-entries';

export default function mapCareersSection ({
  title,
  description,
  items
}) {
  return title && {
    sectionType: SECTION_NAMES.CAREERS_SECTION,
    title,
    description,
    items: items && removeDraftEntries(items).map(item => mapCareer(item))
  }
}
