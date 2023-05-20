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

export function KnownTechs() {
  return (
    <section className="container py-16">
      <SectionTitle subtitle="competências" title="Conhecimentos" />

      <div className="grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3 mt-[60px]">
        {TECHS_EXPERIENCES.map(({ icon, name, startDate }, index) => (
          <KnownTech
            tech={{
              icon,
              name,
              startDate,
            }}
            key={index}
          />
        ))}
      </div>
    </section>
  )
}

const TECHS_EXPERIENCES = [
  {
    icon: <TbBrandHtml5 />,
    name: 'HTML5',
    startDate: '2020-01-01',
  },
  {
    icon: <TbBrandCss3 />,
    name: 'CSS3',
    startDate: '2020-01-01',
  },
  {
    icon: <TbBrandJavascript />,
    name: 'JavaScript',
    startDate: '2020-01-01',
  },
  {
    icon: <TbBrandTypescript />,
    name: 'TypeScript',
    startDate: '2021-01-01',
  },
  {
    icon: <TbBrandReact />,
    name: 'React',
    startDate: '2021-01-01',
  },
  {
    icon: <TbBrandReactNative />,
    name: 'React Native',
    startDate: '2021-01-01',
  },
  {
    icon: <TbBrandNextjs />,
    name: 'Next.js',
    startDate: '2022-01-01',
  },
  {
    icon: <SiNodedotjs />,
    name: 'Node.js',
    startDate: '2020-01-01',
  },
]
