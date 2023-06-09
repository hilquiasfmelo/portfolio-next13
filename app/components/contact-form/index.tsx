'use client'

import { HiArrowNarrowRight } from 'react-icons/hi'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { motion } from 'framer-motion'

import { Button } from '../button'
import { SectionTitle } from '../section-title'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import { fadeUpAnimation } from '@/app/lib/animations'

const contactFormSchema = z.object({
  name: z.string().min(3).max(100),
  email: z.string().email(),
  message: z.string().min(1).max(500),
})

type ContactFormData = z.infer<typeof contactFormSchema>

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    reValidateMode: 'onSubmit',
  })

  async function hanldeFormSend(data: ContactFormData) {
    try {
      await axios.post('/api/contact', data)

      toast.success('Mensagem enviada com sucesso!')

      reset()
    } catch {
      toast.error('Houve um erro inesperado!')
    }
  }

  return (
    <section
      id="contact"
      className="py-16 px-6 md:py-32 flex items-center justify-center bg-gray-950"
    >
      <motion.div
        className="w-full max-w-[420px] mx-auto"
        {...fadeUpAnimation}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
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

          <Button
            type="submit"
            className="w-max mx-auto mt-6 shadow-button"
            disabled={isSubmitting}
          >
            Enviar mensagem
            <HiArrowNarrowRight size={18} />
          </Button>
        </form>
      </motion.div>
    </section>
  )
}
