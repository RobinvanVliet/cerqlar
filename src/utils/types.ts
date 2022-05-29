import { IconNames } from '@components/icon/icon-names'

export type BreakPoints = {
  XXS?: number | undefined,
  XS?: number | undefined,
  SM?: number | undefined,
  MD?: number | undefined,
  LG?: number | undefined,
}

export type BreakPointEntries = [[keyof BreakPoints, number]]

export type SocialIcon = IconNames.LINKEDIN | IconNames.YOUTUBE | IconNames.TWITTER | IconNames.FACEBOOK

export interface ILink {
  isExternal?: boolean,
  href: string,
  openInNewWindow?: boolean
}
