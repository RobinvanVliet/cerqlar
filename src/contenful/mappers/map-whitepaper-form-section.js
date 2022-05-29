import { WhitepaperFormSectionEntry } from '../types'
import mapImage from './map-image'
import { SECTION_NAMES } from '../../const/index'

const mapWhitepaperFormSection = ({
  title,
  description,
  image,
  buttonLabel,
  isReversed,
  form
}) => {
  return {
    sectionType: SECTION_NAMES.WHITEPAPER_FORM_SECTION,
    title,
    description,
    isReversed,
    buttonLabel,
    formId: form?.fields?.formId,
    image: image && mapImage(image)
  }
}

export default mapWhitepaperFormSection
