import { EmployeeEntry } from '../types'
import mapImage from './map-image'

export default function mapEmployee ({
  fields: {
    employeeName,
    role,
    image
  } = {}
}) {
  return employeeName && {
    employeeName,
    role,
    image: image && mapImage(image)
  }
}
