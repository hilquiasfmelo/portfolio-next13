import { RichTextContent } from '@graphcms/rich-text-types'

import { KnownTech, Project } from './projects'
import { WorkExperience } from './work-experience'

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
  highlightProjects: Project[]
}

export type HomePageData = {
  page: HomePageInfo
  workExperiences: WorkExperience[]
}
