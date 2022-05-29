import { ChecklistSectionFields } from '../types'
import mapLink from './map-link'
import mapImage from './map-image'
import removeDraftEntries from '../../utils/remove-draft-entries'

const mapChecklistSection = ({
  label,
  title,
  callToActions,
  items
}) => {
  return {
    label,
    title,
    callToActions: callToActions?.map(mapLink),
    items: items && removeDraftEntries(items).map(item => {
      return {
        label: item.fields.label,
        image: mapImage(item.fields.image)
      }
    })
  }
}

export default mapChecklistSection
