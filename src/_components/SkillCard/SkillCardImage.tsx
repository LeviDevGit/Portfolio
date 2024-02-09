interface SkillImageProps {
  source: string
}

export function SkillCardImage({ source }: SkillImageProps) {
  return (
    <div className="flex h-36 w-36 items-center justify-center rounded-[41px] shadow-skill mobile:w-2/3">
      <img src={source} className="w-[90px]" />
    </div>
  )
}
