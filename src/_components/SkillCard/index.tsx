interface SkillCardProps {
  imageSource: string
  skillName: string
}

export function SkillCard({ imageSource, skillName }: SkillCardProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <div className="flex h-36 w-36 items-center justify-center rounded-[41px] shadow-skill">
        <img src={imageSource} className="w-[90px]" />
      </div>
      <span className="text-[28px] font-medium">{skillName}</span>
    </div>
  )
}
