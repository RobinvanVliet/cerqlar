import { CtaCardEntry } from '../types'
import mapLink from './map-link'

export default function mapCtaCard ({
  fields: {
    title,
    description,
    callToAction
  }
}) {
  return title && {
    title,
    description,
    callToAction: callToAction?.fields && mapLink(callToAction)
  }
}
