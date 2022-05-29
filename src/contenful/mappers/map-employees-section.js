import { SECTION_NAMES } from '../../const/index'
import { EmployeesSectionEntry } from '../types'
import mapEmployee from './map-employee'
import removeDraftEntries from '../../utils/remove-draft-entries'

export default function mapEmployeesSection ({
  title,
  description,
  items
}) {
  return {
    sectionType: SECTION_NAMES.EMPLOYEES_SECTION,
    title,
    description,
    items: items && removeDraftEntries(items).map(item => mapEmployee(item))
  }
}
