import { SECTION_NAMES } from '../../const/index'
import { FaqSectionEntry } from '../types'
import mapCtaCard from './map-cta-card'
import mapFaq from './map-faq'
import removeDraftEntries from '../../utils/remove-draft-entries'

export default function mapFaqSection ({
  title,
  description,
  items,
  callToAction
}) {
  return title && {
    sectionType: SECTION_NAMES.FAQ_SECTION,
    title,
    description,
    items: items && removeDraftEntries(items)?.map(item => mapFaq(item)),
    callToAction: callToAction?.fields && mapCtaCard(callToAction),
  }
}
