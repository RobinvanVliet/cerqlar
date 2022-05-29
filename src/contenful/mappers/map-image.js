export default function mapImage ({
  fields: {
    title: alt,
    file: {
      url: src
    } = {}
  } = {}
} = {}) {
  return {
    src,
    alt,
  }
}

