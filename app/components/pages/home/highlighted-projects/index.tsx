import { DividerHorizontal } from '@/app/components/divider/horizontal'
import { SectionTitle } from '@/app/components/section-title'
import { ProjectCard } from './project-card'
import { Link } from '@/app/components/link'
import { HiArrowNarrowRight } from 'react-icons/hi'

export function HighlightedProjects() {
  return (
    <section className="container py-16">
      <SectionTitle subtitle="destaques" title="Projetos em destaque" />
      <DividerHorizontal className="mb-16" />

      <div>
        <ProjectCard image="https://portfolio-tutorial-2023.vercel.app/_next/image?url=https%3A%2F%2Fmedia.graphassets.com%2FqSXcz2JdTMOPKlteRZKY&w=640&q=75" />
        <DividerHorizontal className="my-16" />
        <ProjectCard image="https://portfolio-tutorial-2023.vercel.app/_next/image?url=https%3A%2F%2Fmedia.graphassets.com%2FtoUKTLaZT02dSeLft2pY&w=640&q=75" />
        <DividerHorizontal className="my-16" />

        <p className="flex items-center gap-1.5">
          <span className="text-gray-400">Se interessou?</span>
          <Link href="/projects" className="inline-flex">
            Ver todos
            <HiArrowNarrowRight />
          </Link>
        </p>
      </div>
    </section>
  )
}
