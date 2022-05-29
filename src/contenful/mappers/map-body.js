import { Entry } from 'contentful'
import { mapIntro } from '.';


import { HeadingEntry } from '../types'
import mapImpactSection from './map-impact-section';
import mapUspsSection from './map-usps-section'
import mapCarouselSection from './map-carousel-section'
import mapCareersSection from './map-careers-section'
import mapClientsSection from './map-clients-section'
import mapContentSection from './map-content-section'
import mapBasicContentSection from './map-basic-content-section'
import mapHighlightSection from './map-highlight-section'
import mapCtaSection from './map-cta-section'
import mapEmployeesSection from './map-employees-section'
import mapFaqSection from './map-faq-section'
import mapTimelineSection from './map-timeline-section'
import mapRichTextSection from './map-rich-text-section'
import mapTextBlockSection from './map-text-block-section'
import mapAuthorSection from './map-author-section'
import mapQuoteSection from './map-quote-section'
import mapVideoSection from './map-video-section'
import mapIframeSection from './map-iframe-section'
import mapChecklistCarouselSection from './map-checklist-carousel-section'
import mapWhitepaperFormSection from './map-whitepaper-form-section'
import mapResponseFormSection from './map-response-form-section'

const bodyItemMapperLookupTable = {
  sectionImpact: mapImpactSection,
  basicContentSection: mapBasicContentSection,
  carouselSection: mapCarouselSection,
  careersSection: mapCareersSection,
  callToActionSection: mapCtaSection,
  clientsSection: mapClientsSection,
  contentSection: mapContentSection,
  employeesSection: mapEmployeesSection,
  faqSection: mapFaqSection,
  highlightSection: mapHighlightSection,
  timelineSection: mapTimelineSection,
  uspsSection: mapUspsSection,
  richTextSection: mapRichTextSection,
  textBlockSection: mapTextBlockSection,
  authorSection: mapAuthorSection,
  quoteSection: mapQuoteSection,
  videoSection: mapVideoSection,
  iframeSection: mapIframeSection,
  checklistCarouselSection: mapChecklistCarouselSection,
  whitepaperFormSection: mapWhitepaperFormSection,
  responseFormSection: mapResponseFormSection
} 

const mapBody = (
  pageHeading,
  body = []
) => {
  const bodySections = body.map(({
    sys: {
      contentType: {
        sys: {
          id: contentType
        } = {}
      } = {}
    } = {},
    fields = {}
  }) => {
    return contentType &&
      bodyItemMapperLookupTable[contentType] &&
      bodyItemMapperLookupTable[contentType](fields)
  }).filter(Boolean)
  return [
    pageHeading && mapIntro(pageHeading),
    ...bodySections,
  ].filter(Boolean)
}

export default mapBody
