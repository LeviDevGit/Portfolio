'use client'

import { ProjectCard } from '@/_components/ProjectCard'
import { MoveLeft, MoveRight } from 'lucide-react'
import { Element } from 'react-scroll'

export function ProjectsSection() {
  return (
    <Element name="myScrollToProjects">
      <h1 className="mb-16 mt-20 text-left text-8xl font-medium leading-[82px] mobile:text-5xl">
        <span className="block">Ultimos </span>
        <span className="block">Projetos</span>
      </h1>
      <ul className="mb-14 flex max-w-full gap-5 overflow-hidden mobile:flex-col">
        <ProjectCard
          techName="Kenzie Hub"
          techProps={[
            { techName: 'React', techColor: 'bg-sky-400' },
            { techName: 'Rest API', techColor: 'bg-rose-500' },
          ]}
          techLink="https://react-entrega-kenzie-hub-levi-git-h.vercel.app/"
          techDeploy={true}
          techBackground="bg-wild-watermelon"
        />
        <ProjectCard
          techName="KIm-veis"
          techProps={[
            { techName: 'Node.js', techColor: 'bg-emerald-400' },
            { techName: 'SQLite3', techColor: 'bg-orange-400' },
            { techName: 'Jest', techColor: 'bg-gray-900' },
          ]}
          techLink="https://github.com/Kenzie-Academy-Brasil-Developers/KIm-veis"
          techGithub={true}
        />
      </ul>
      <div className="mb-16 flex items-center justify-end gap-4">
        <button className="rounded-full bg-amber-500 p-3 hover:bg-amber-400 mobile:hidden">
          <MoveLeft color="#FFFFFF" size={40} />
        </button>
        <span className="hidden mobile:block">Ver mais</span>
        <button className="rounded-full bg-amber-500 p-3 hover:bg-amber-400">
          <MoveRight color="#FFFFFF" size={40} />
        </button>
      </div>
    </Element>
  )
}
