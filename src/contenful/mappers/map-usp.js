import { UspEntry } from '../types'

export default function mapUsp ({
  fields: {
    icon,
    title,
    description
  } = {}
}) {
  return title && {
    icon,
    title,
    description
  }
}
