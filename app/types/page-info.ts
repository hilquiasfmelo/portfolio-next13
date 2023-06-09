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

export type ProjectDetailsPageData = {
  project: Project
}

export type ProjectPageData = {
  projects: Project[]
}

export type ProjectsPageStaticData = {
  projects: {
    slug: string
  }[]
}

export type HomePageData = {
  page: HomePageInfo
  workExperiences: WorkExperience[]
}
