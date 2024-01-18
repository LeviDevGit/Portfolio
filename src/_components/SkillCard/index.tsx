interface SkillCardProps {
  imageSource: string
  skillName: string
}

export function SkillCard({ imageSource, skillName }: SkillCardProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <div className="w-36 h-36 rounded-[41px] flex items-center justify-center bg-neutral-400/5">
        <img src={imageSource} className="w-[90px]" />
      </div>
      <span className="text-[28px] font-medium">{skillName}</span>
    </div>)
}