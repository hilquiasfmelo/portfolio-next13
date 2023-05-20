import Image from 'next/image'

export function ProjectCard() {
  return (
    <div className="group rounded-lg h-[436px] flex flex-col bg-gray-800 overflow-hidden border-2 border-gray-800 hover:border-emerald-400 opacity-70 hover:opacity-100 transition-all">
      <div className="w-full h-48 overflow-hidden">
        <Image
          width={380}
          height={200}
          unoptimized
          alt=""
          className="group-hover:scale-110 w-full h-full object-cover duration-500 transition-all"
          src="https://portfolio-tutorial-2023.vercel.app/_next/image?url=https%3A%2F%2Fmedia.graphassets.com%2FqSXcz2JdTMOPKlteRZKY&w=640&q=75"
        />
      </div>

      <div className="flex-1 flex flex-col p-8">
        <strong className="font-medium text-gray-50/90 group-hover:text-emerald-500 transition-all">
          BookWise
        </strong>
        <p className="mt-2 text-gray-400 line-clamp-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          molestiae nemo vitae earum nam at corrupti quam maiores, tempora ullam
          delectus, ab, quisquam doloribus rem corporis expedita similique
          minima unde?
        </p>
        <span className="text-gray-300 text-sm font-medium block mt-auto truncate">
          Next, Node, React, TailwindCss, CSS, HTML, TypeScript
        </span>
      </div>
    </div>
  )
}
