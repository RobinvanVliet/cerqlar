import { CarouselItemEntry } from '../types';
import mapImage from './map-image'

export default function mapCarouselItem ({
  fields: {
    title,
    description,
    image,
    videoUrl
  } = {}
}) {
  return title && {
    title,
    description,
    image: image && mapImage(image),
    videoUrl
  }
}
