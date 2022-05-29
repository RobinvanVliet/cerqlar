import { ResponseFormSectionEntry } from '../types'
import { SECTION_NAMES } from '../../const/index'

const mapResponseFormSection = ({
  title,
  description,
  hasBackground,
  form
}) => {
  return {
    sectionType: SECTION_NAMES.RESPONSE_FORM_SECTION,
    title,
    description,
    hasBackground,
    formId: form?.fields?.formId
  }
}

export default mapResponseFormSection
