import {
  TbBrandHtml5,
  TbBrandCss3,
  TbBrandJavascript,
  TbBrandTypescript,
  TbBrandReact,
  TbBrandReactNative,
  TbBrandNextjs,
} from 'react-icons/tb'
import { SiNodedotjs } from 'react-icons/si'

import { SectionTitle } from '@/app/components/section-title'
import { KnownTech } from './known-tech'
import { KnownTech as IKnownTech } from '@/app/types/projects'

type KnownTechsProps = {
  techs: IKnownTech[]
}

export function KnownTechs({ techs }: KnownTechsProps) {
  return (
    <section className="container py-16">
      <SectionTitle subtitle="competências" title="Conhecimentos" />

      <div className="grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3 mt-[60px]">
        {techs?.map((tech, index) => (
          <KnownTech tech={tech} key={index} />
        ))}
      </div>
    </section>
  )
}
