import { ProjectTech } from './ProjectTech'
import Image from 'next/image'
import { Github, Globe } from 'lucide-react'
import KenzieHubPrint from '@/_assets/KenzieHub.png'

type tech = {
  techName: string
  techColor: string
}

interface ProjectCardProps {
  techName: string
  techProps: tech[]
  techLink: string
  techGithub?: boolean
  techDeploy?: boolean
  techBackground?: string
}

export function ProjectCard({
  techName,
  techProps,
  techLink,
  techGithub = false,
  techDeploy = false,
  techBackground = 'bg-eerie-black',
}: ProjectCardProps) {
  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-4xl font-medium">{techName}</h2>
      <div className="flex gap-3">
        {techProps &&
          techProps.map((e, index) => (
            <ProjectTech
              key={index}
              techName={e.techName}
              techColor={e.techColor}
            />
          ))}
      </div>
      <div className={`w-fit rounded-[18px] ${techBackground}`}>
        {techName === 'Kenzie Hub' ? (
          <Image
            src={KenzieHubPrint}
            alt="ProjectPrint"
            className="mx-4 my-7 h-[213px] w-[353px]"
          />
        ) : (
          <img
            src="https://gizmodo.uol.com.br/wp-content/blogs.dir/8/files/2020/06/github.jpg"
            alt=" ProjectPrint"
            className="mx-5 my-6 h-[213px] w-[353px]"
          />
        )}
      </div>
      <div className="flex gap-5">
        {techGithub && (
          <a href={techLink} target="_blank" className="flex gap-1 text-base">
            Github <Github color="#000000" />{' '}
          </a>
        )}
        {techDeploy && (
          <a href={techLink} target="_blank" className="flex gap-1 text-base">
            Deploy <Globe color="#000000" />
          </a>
        )}
      </div>
    </div>
  )
}
