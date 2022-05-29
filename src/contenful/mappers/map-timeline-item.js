import { TimelineItemEntry } from '../types'

export default function mapTimelineItem ({
  fields: {
    title,
    subtitle,
    description
  } = {}
}) {
  return title && {
    title,
    subtitle,
    description
  }
}
