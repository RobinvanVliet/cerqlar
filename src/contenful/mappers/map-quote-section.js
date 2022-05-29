import { QuoteSectionEntry } from '../types'
import { SECTION_NAMES } from '../../const/index'

export default function mapQuoteSection ({
  quote,
  author
}) {
  return quote && {
    sectionType: SECTION_NAMES.QUOTE_SECTION,
    quote,
    author
  }
}
