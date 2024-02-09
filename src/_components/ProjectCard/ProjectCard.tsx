import { ProjectTech } from './ProjectTech'
import Image from 'next/image'
import { Github, Globe } from 'lucide-react'
import KenzieHubPrint from '@/_assets/KenzieHub.png'

interface ProjectProps {
  project: {
    name: string
    techs: {
      name: string
      color: string
    }[]
    link: {
      host: string
      deploy: string
    }
    background: string
  }
}

export function ProjectCard({ project }: ProjectProps) {
  return (
    <li className="w-1/3 flex-shrink-0 flex-col gap-5 mobile:w-full">
      <h2 className="text-4xl font-medium">{project.name}</h2>
      <div className="mt-3 flex gap-3">
        {project.techs.map((e, index) => (
          <ProjectTech key={index} techName={e.name} techColor={e.color} />
        ))}
      </div>
      <div
        className={`mt-5 h-[253px] w-[353px] rounded-[18px] px-3.5 py-8 ${project.background}  mobile:h-full mobile:w-full`}
      >
        {project.name === 'Kenzie Hub' ? (
          <Image
            src={KenzieHubPrint}
            alt="ProjectPrint"
            className="h-full w-full"
          />
        ) : (
          <img
            src="https://gizmodo.uol.com.br/wp-content/blogs.dir/8/files/2020/06/github.jpg"
            alt=" ProjectPrint"
            className="h-full w-full"
          />
        )}
      </div>
      <div className="mt-5 flex gap-5">
        {project.link.host.length > 0 ? (
          <a
            href={project.link.host}
            target="_blank"
            className="flex gap-1 text-base"
          >
            Github <Github color="#000000" />{' '}
          </a>
        ) : (
          <a
            href={project.link.deploy}
            target="_blank"
            className="flex gap-1 text-base"
          >
            Deploy <Globe color="#000000" />
          </a>
        )}
      </div>
    </li>
  )
}
