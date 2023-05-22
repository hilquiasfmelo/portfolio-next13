import { RichTextContent } from '@graphcms/rich-text-types'

import { KnownTech } from './projects'

export type ISocial = {
  url: string
  iconSvg: string
}

export type HomePageInfo = {
  introduction: {
    raw: RichTextContent
  }
  technologies: KnownTech[]
  profilePicture: {
    url: string
  }
  socials: ISocial[]
  knownTechs: KnownTech[]
}

export type HomePageData = {
  page: HomePageInfo
}
