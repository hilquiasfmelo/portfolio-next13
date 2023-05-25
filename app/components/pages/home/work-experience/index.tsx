import { SectionTitle } from '@/app/components/section-title'
import { ExperienceItem } from './experience-item'
import { WorkExperience as IWorkExperience } from '@/app/types/work-experience'

type WorkExperienceProps = {
  experiences: IWorkExperience[]
}

export function WorkExperience({ experiences }: WorkExperienceProps) {
  return (
    <section className="container py-16 flex gap-10 md:gap-4 lg:gap-16 flex-col md:flex-row">
      <div className="max-w-[420px]">
        <SectionTitle
          subtitle="experiências"
          title="Experiência Profissional"
        />
        <p className="text-gray-400 mt-6">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita
          eveniet, reprehenderit ipsa sit praesentium enim voluptatem? Veniam
          ratione ab, cupiditate voluptates nam reprehenderit neque aut vero
          eveniet animi hic placeat!
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {experiences?.map((experience, i) => (
          <ExperienceItem key={i} experience={experience} />
        ))}
      </div>
    </section>
  )
}
