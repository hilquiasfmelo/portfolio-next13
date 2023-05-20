import { SectionTitle } from '@/app/components/section-title'
import { ExperienceItem } from './experience-item'

export function WorkExperience() {
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
        <ExperienceItem />
        <ExperienceItem />
      </div>
    </section>
  )
}
