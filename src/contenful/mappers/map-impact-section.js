import { SECTION_NAMES } from '../../const/index'
import { ImpactSectionEntry } from '../types'
import mapImpact from './map-impact'
import removeDraftEntries from '../../utils/remove-draft-entries'

export default function mapImpactSection ({
  title,
  description,
  items
}) {
  return {
    sectionType: SECTION_NAMES.IMPACT_SECTION,
    title,
    description,
    items: items && removeDraftEntries(items).map(item => mapImpact(item))
  }
}
