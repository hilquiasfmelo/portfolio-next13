import { KnownTech as IKnownTech } from '@/app/types/projects'
import { getRelativeTimeString } from '@/app/utils/get-relative-time'
import { CMSIcon } from '@/app/components/cms-icon'

type KnownTechProps = {
  tech: IKnownTech
}

export function KnownTech({
  tech: { iconSvg, name, startDate },
}: KnownTechProps) {
  const relativeTime = getRelativeTimeString(
    new Date(startDate),
    'pt-BR',
  ).replace('há', '')

  return (
    <div className="p-6 rounded-lg bg-gray-600/20 text-gray-500 flex flex-col gap-2 hover:text-emerald-500 hover:bg-gray-600/30 transition-all ">
      <div className="flex items-center justify-between">
        <p className="font-medium">{name}</p>
        <CMSIcon icon={iconSvg} />
      </div>

      <span>{relativeTime} de experiência</span>
    </div>
  )
}
