import { SECTION_NAMES } from '../../const/index'
import { BasicContentSectionEntry } from '../types';
import mapImage from './map-image';

export default function mapBasicContentSection({
  name,
  title,
  subtitle,
  description,
  images
}) {
  return name && {
    sectionType: SECTION_NAMES.BASIC_CONTENT_SECTION,
    title,
    subtitle,
    description,
    images: images && images.map(image => mapImage(image))
  }
}
