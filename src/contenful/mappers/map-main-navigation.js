import mapLinkList from './map-link-list'
import mapLink from './map-link'
import removeDraftEntries from '@utils/remove-draft-entries'

export default function mapMainNavigation ({
  fields: {
    name,
    items: NavigationItems,
    callToAction,
    login,
  }
} = {}) {
  return {
    name,
    items: NavigationItems && removeDraftEntries(NavigationItems).map((NavigationItem) => NavigationItem?.sys?.contentType?.sys?.id === 'linkListElement'
      ? mapLinkList(NavigationItem)
      : mapLink(NavigationItem)
    ),
    callToAction: callToAction && mapLink(callToAction),
    login: login && mapLink(login)
  }
}
