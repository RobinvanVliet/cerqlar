import stringify from 'json-stringify-safe'

export default function removeCircularity (obj, serializer, indent, decycler) {
  return JSON.parse(stringify(obj, serializer, indent, decycler))
}
