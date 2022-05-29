import { ChecklistCarouselSectionEntry } from '../types'
import mapChecklistSection from './map-checklist-section'
import { SECTION_NAMES } from '../../const/index'
import removeDraftEntries from '../../utils/remove-draft-entries'

const mapChecklistCarouselSection = ({ items }) => {
  return {
    sectionType: SECTION_NAMES.CHECKLIST_CAROUSEL_SECTION,
    items: items && removeDraftEntries(items).map(item => mapChecklistSection(item.fields))
  }
}

export default mapChecklistCarouselSection
