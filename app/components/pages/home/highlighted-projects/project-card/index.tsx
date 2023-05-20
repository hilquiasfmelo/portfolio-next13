import Image from 'next/image'
import { HiArrowNarrowRight } from 'react-icons/hi'

import { Link } from '@/app/components/link'
import { TechBadge } from '@/app/components/tech-badge'

type ProjectCardProps = {
  image: string
}

export function ProjectCard({ image }: ProjectCardProps) {
  return (
    <div className="flex gap-6 lg:gap-12 flex-col lg:flex-row">
      <div className="w-full h-full">
        <Image
          width={420}
          height={304}
          src={image}
          alt=""
          className="w-full h-[200px] sm:h-[300px] lg:w-[420px] lg:min-h-full object-cover rounded-lg"
        />
      </div>

      <div>
        <h3 className="flex items-center gap-3 font-medium text-lg text-gray-50">
          <Image
            width={20}
            height={20}
            alt=""
            src="/images/icons/project-title-icon.svg"
          />
          BookWise
        </h3>

        <p className="text-gray-400 my-6">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
          libero maiores in voluptatum, ipsum nostrum optio iusto molestiae
          itaque eaque vel sapiente ex architecto. Facere iure unde earum
          asperiores cum!
        </p>

        <div className="flex gap-x-2 gap-y-3 flex-wrap mb-8 lg:max-w-[350px]">
          <TechBadge name="Next.js" />
          <TechBadge name="Node.js" />
          <TechBadge name="React" />
          <TechBadge name="Typescript" />
          <TechBadge name="CSS" />
          <TechBadge name="HTML" />
        </div>

        <Link href="/projetcs/book-wise">
          Ver projeto
          <HiArrowNarrowRight />
        </Link>
      </div>
    </div>
  )
}
