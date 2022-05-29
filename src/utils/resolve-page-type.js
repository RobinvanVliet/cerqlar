import { PAGE_TYPES } from '../const'

export const resolvePageType = (query) => {
  return Object.entries(PAGE_TYPES).find(([ key, value ]) => value === query)
}

