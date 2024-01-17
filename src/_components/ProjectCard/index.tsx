import { ProjectTech } from "./ProjectTech";
import Image from "next/image";
import { Github, Globe } from "lucide-react"
import KenzieHubPrint from "@/_assets/KenzieHub.png"

export function ProjectCard() {
  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-4xl font-medium">E-commerce</h2>
      <div className="flex gap-3">
        <ProjectTech techName="React" techColor="bg-sky-400" />
        <ProjectTech techName="Rest API" techColor="bg-rose-500" />
      </div>
      <div className="w-fit bg-eerie-black rounded-[18px]">
        <Image src={KenzieHubPrint} alt="Kenzie Hub" className="w-[353px] h-[213px] my-6 mx-5" />
      </div>
      <div className="flex gap-5">
        <span className="flex gap-1 text-base">Github <Github color="#000000" /> </span>
        <span className="flex gap-1 text-base">Deploy <Globe color="#000000" /></span>
      </div>
    </div>)
}