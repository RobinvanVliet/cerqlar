import {
  DEFAULT_PAGE_TITLE, SECTION_NAMES, SITE_ROOT
} from '../../const'
import { PageEntry } from '../types'
import mapBody from './map-body'

const mapPage = ({
  sys: {
    id,
    contentType: {
      sys: {
        id: type,
      } = {},
    } = {},
  } = {},
  fields: {
    slug = '',
    seoTitle,
    seoDescription,
    pageHeading,
    body
  } = {},
}) => {
  return {
    id,
    type,
    slug,
    seoTitle,
    seoDescription,
    body: mapBody(pageHeading, body),
  }
}

export default mapPage
