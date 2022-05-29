import { ImpactEntry } from '../types'

export default function mapImpact ({
  fields: {
    number,
    valueBefore,
    valueAfter,
    title,
    description
  } = {}
}) {
  return number && {
    number,
    valueBefore,
    valueAfter,
    title,
    description
  }
}
