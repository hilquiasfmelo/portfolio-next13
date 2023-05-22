'use client'

import Image from 'next/image'
import { HiArrowNarrowRight } from 'react-icons/hi'
import {
  TbBrandGithub,
  TbBrandLinkedin,
  TbBrandTwitter,
  TbBrandWhatsapp,
} from 'react-icons/tb'

import { Button } from '@/app/components/button'
import { TechBadge } from '@/app/components/tech-badge'

const MOCK_CONTACTS = [
  {
    url: 'https://github.com.br',
    icon: <TbBrandGithub />,
  },
  {
    url: 'https://github.com.br',
    icon: <TbBrandLinkedin />,
  },
  {
    url: 'https://github.com.br',
    icon: <TbBrandTwitter />,
  },
  {
    url: 'https://github.com.br',
    icon: <TbBrandWhatsapp />,
  },
]

export function HeroSection() {
  function handleContact() {
    const contactSession = document.querySelector('#contact')

    if (contactSession) {
      contactSession.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="w-full lg:h-[755px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col justify-end pb-10 sm:pb-32 py-32 lg:pb-[110px]">
      <div className="container flex items-start justify-between flex-col-reverse lg:flex-row">
        <div className="w-full lg:max-w-[530px]">
          <p className="font-mono text-emerald-400">Olá, meu nome é</p>
          <h2 className="text-4xl font-medium mt-2">Hilquias Melo</h2>

          <p className="text-gray-400 my-6 text-sm sm:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
            deserunt odit cum hic, voluptatum exercitationem blanditiis rem
            corrupti ut minus veniam nihil similique quod praesentium velit
            maiores in laboriosam eos!
          </p>

          <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px]">
            {Array.from({ length: 7 }).map((_, index) => (
              <TechBadge name="Next.js" key={index} />
            ))}
          </div>

          <div className="flex mt-6 sm:items-center sm:gap-5 lg:mt-10 flex-col sm:flex-row">
            <Button className="w-max shadow-button" onClick={handleContact}>
              Entre em contato
              <HiArrowNarrowRight size={18} />
            </Button>

            <div className="flex items-center justify-center h-20 gap-3 text-2xl text-gray-600">
              {MOCK_CONTACTS.map((contact, index) => (
                <a
                  href={contact.url}
                  key={`contact-${index}`}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-gray-100 transition-colors"
                >
                  {contact.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <Image
          width={420}
          height={404}
          src="/images/profile-pic.png"
          alt=""
          className="w-[360px] h-[300px] lg:w-[420px] lg:h-[404px] mb-6 lg:mb-0 shadow-2xl rounded-lg object-cover"
        />
      </div>
    </section>
  )
}
