'use client'

import { HiArrowNarrowRight } from 'react-icons/hi'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { Button } from '../button'
import { SectionTitle } from '../section-title'

const contactFormSchema = z.object({
  name: z.string().min(3).max(100),
  email: z.string().email(),
  message: z.string().min(1).max(500),
})

type ContactFormData = z.infer<typeof contactFormSchema>

export function ContactForm() {
  const { register, handleSubmit } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    reValidateMode: 'onSubmit',
  })

  function hanldeFormSend(data: ContactFormData) {
    console.log(data)
  }

  return (
    <section className="py-16 px-6 md:py-32 flex items-center justify-center bg-gray-950">
      <div className="w-full max-w-[420px] mx-auto">
        <SectionTitle
          subtitle="contato"
          title="Vamos trabalhar juntos? Entre em contato"
          className="items-center text-center"
        />

        <form
          className="mt-12 w-full flex flex-col gap-4"
          onSubmit={handleSubmit(hanldeFormSend)}
        >
          <input
            type="text"
            placeholder="Seu nome"
            required
            {...register('name')}
            className="w-full h-14 bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 ring-emerald-600"
          />

          <input
            type="email"
            placeholder="Seu melhor e-mail"
            required
            {...register('email')}
            className="w-full h-14 bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 ring-emerald-600"
          />

          <textarea
            placeholder="Deixe uma mensagem"
            maxLength={500}
            required
            {...register('message')}
            className=" resize-none w-full h-[138px] bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 ring-emerald-600"
          />

          <Button type="submit" className="w-max mx-auto mt-6 shadow-button">
            Enviar mensagem
            <HiArrowNarrowRight size={18} />
          </Button>
        </form>
      </div>
    </section>
  )
}
