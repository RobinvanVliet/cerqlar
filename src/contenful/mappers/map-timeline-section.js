import { SECTION_NAMES } from '../../const/index'
import { TimelineSectionEntry } from '../types'
import mapTimelineItem from './map-timeline-item'

export default function mapTimelineSection ({
  title,
  description,
  items
}) {
  return title && {
    sectionType: SECTION_NAMES.TIMELINE_SECTION,
    title,
    description,
    items: items && items.map(item => mapTimelineItem(item))
  }
}
