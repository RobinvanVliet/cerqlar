import mapLink from './map-link'
import mapLinkList from './map-link-list'
import mapSocialMediaItem from './map-social-media-item'
import removeDraftEntries from '@utils/remove-draft-entries'

export default function mapFooter ({
  fields: {
    copyright,
    items,
    socialMediaItems,
    bottomList: {
      fields: {
        items: bottomListItems
      } = {},
    } = {},
  } = {},
} = {}) {
  return {
    linkLists: items && removeDraftEntries(items).map((linkList) => mapLinkList(linkList)),
    bottomList: bottomListItems && removeDraftEntries(bottomListItems).map((bottomListItem) => mapLink(bottomListItem)),
    socialMediaItems: socialMediaItems?.some(item => item.fields) && removeDraftEntries(socialMediaItems).map((socialMediaItem) => mapSocialMediaItem(socialMediaItem)),
    copyright,
  }
}
