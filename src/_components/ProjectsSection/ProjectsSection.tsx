'use client'

import { ProjectCard } from '@/_components/ProjectCard/ProjectCard'
import { MoveLeft, MoveRight } from 'lucide-react'
import { Element } from 'react-scroll'
import projects from '@/_services/projects.json'
import { useState } from 'react'

export function ProjectsSection() {
  const [effect, setEffect] = useState(false)

  return (
    <Element name="myScrollToProjects">
      <h1 className="mb-16 mt-20 text-left text-8xl font-medium leading-[82px] mobile:text-5xl">
        <span className="block">Ultimos </span>
        <span className="block">Projetos</span>
      </h1>
      <ul
        className={`mb-14 flex max-w-full gap-5 overflow-hidden mobile:flex-col ${
          effect && 'animate-shake'
        }`}
        onAnimationEnd={() => {
          setEffect(false)
        }}
      >
        {projects.projects.map((element, index) => (
          <ProjectCard key={index} project={element} />
        ))}
      </ul>
      <div className="mb-16 flex items-center justify-end gap-4">
        <button
          className="rounded-full bg-amber-500 p-3 hover:bg-amber-400 mobile:hidden"
          onClick={() => setEffect(true)}
        >
          <MoveLeft color="#FFFFFF" size={40} />
        </button>
        <span className="hidden mobile:block">Ver mais</span>
        <button
          className="rounded-full bg-amber-500 p-3 hover:bg-amber-400"
          onClick={() => setEffect(true)}
        >
          <MoveRight color="#FFFFFF" size={40} />
        </button>
      </div>
    </Element>
  )
}
