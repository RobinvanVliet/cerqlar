import mapLink from './map-link'
import removeDraftEntries from '@utils/remove-draft-entries'

export default function mapLinkList ({
  fields: {
    title,
    items,
  } = {},
} = {}) {
  return {
    title,
    items: items && removeDraftEntries(items).map((LinkListItem) => {
      return LinkListItem.fields?.title ? mapLinkList(LinkListItem) : mapLink(LinkListItem)
    }),
  }
}
