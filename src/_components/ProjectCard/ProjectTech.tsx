interface ProjectTechProps {
  techName: string
  techColor: string
}

export function ProjectTech({ techName, techColor }: ProjectTechProps) {
  return (
    <div className={`w-fit rounded-[32px] px-4 py-2 text-white ${techColor}`}>
      <span>{techName}</span>
    </div>
  )
}
