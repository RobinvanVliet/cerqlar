import { SECTION_NAMES } from '../../const/index'
import { CarouselSectionEntry } from '../types'
import mapCarouselItem from './map-carousel-item.js'

export default function mapCarouselSection ({
  title,
  description,
  items
}) {
  return title && {
    sectionType: SECTION_NAMES.CAROUSEL_SECTION,
    title,
    description,
    items: items?.map(item => mapCarouselItem(item))
  }
}
