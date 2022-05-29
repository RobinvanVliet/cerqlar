import mapImage from './map-image';
import { AuthorSectionEntry } from '../types';
import { SECTION_NAMES } from '../../const/index'

const mapAuthorSection = ({
  author,
  jobTitle,
  isCentered,
  image
}) => {
  return {
    sectionType: SECTION_NAMES.AUTHOR_SECTION,
    author,
    jobTitle,
    isCentered,
    image: image && mapImage(image)
  }
}

export default mapAuthorSection
