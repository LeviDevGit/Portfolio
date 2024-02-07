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
    <li className="w-1/3 flex-shrink-0 flex-col gap-5 mobile:w-full">
      <h2 className="text-4xl font-medium">{techName}</h2>
      <div className="mt-3 flex gap-3">
        {techProps &&
          techProps.map((e, index) => (
            <ProjectTech
              key={index}
              techName={e.techName}
              techColor={e.techColor}
            />
          ))}
      </div>
      <div
        className={`mt-5 h-[213px] w-[353px] w-fit rounded-[18px] px-3.5 py-8 ${techBackground} mobile:h-full mobile:w-full`}
      >
        {techName === 'Kenzie Hub' ? (
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
    </li>
  )
}
