import { FaqEntry } from '../types'

export default function mapFaq ({
  fields: {
    title,
    description
  } = {}
}) {
  return title && {
    title,
    description
  }
}
