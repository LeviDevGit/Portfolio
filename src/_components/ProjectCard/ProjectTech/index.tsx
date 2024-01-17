interface ProjectTechProps {
  techName: string
  techColor: string
}

export function ProjectTech({ techName, techColor }: ProjectTechProps) {
  return (
    <div className={`w-fit px-4 py-2 rounded-[32px] text-white ${techColor}`}>
      <span>
        {techName}
      </span >
    </div >
  )
}