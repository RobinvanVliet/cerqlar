import { LinkEntry } from '../types'
import { CONTENT_TYPES, PAGE_TYPES } from '../../const/index'

const externalLinkRegex = new RegExp('^(?:[a-z]+:)?//', 'i')

export const createLocalLink = (
  slug,
  contentType // TODO: specify
) => {
  return contentType === CONTENT_TYPES.PAGE ? slug : `/${PAGE_TYPES[contentType]}${slug}`
}

const mapLink = ({
  fields: {
    label,
    sublabel: subLabel,
    url,
    openInNewWindow,
    item
  } = {}
}) => {
  const isExternal = !item?.fields?.slug && url && externalLinkRegex.test(url)

  return label && {
    label,
    subLabel,
    link: {
      isExternal,
      href: item ? createLocalLink(item?.fields?.slug || '', item?.sys?.contentType?.sys?.id) : url,
      openInNewWindow,
    },
  }
}

export default mapLink
