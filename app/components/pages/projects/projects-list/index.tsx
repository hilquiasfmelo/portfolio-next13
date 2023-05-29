import Link from 'next/link'

import { ProjectCard } from './project-card'
import { Project } from '@/app/types/projects'

type ProjectsListProps = {
  projects: Project[]
}

export function ProjectsList({ projects }: ProjectsListProps) {
  return (
    <section className="container py-32 grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-x-4 gap-y-6">
      {projects.map((project, i) => (
        <Link key={i} href={`/projects/${project.slug}`}>
          <ProjectCard project={project} />
        </Link>
      ))}
    </section>
  )
}
