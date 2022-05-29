import { SocialMediaItemEntry } from '../types'
import mapImage from './map-image'

export default function mapSocialMediaItem ({
  fields: {
    name,
    logo,
    link
  }
}) {
  return name && {
    name,
    logo: mapImage(logo),
    link: {
      href: link,
      isExternal: true,
      openInNewWindow: true
    }
  }
}
