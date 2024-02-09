interface SkillNameProps {
  name: string
}

export function SkillCardName({ name }: SkillNameProps) {
  return <span className="text-[28px] font-medium mobile:text-xl">{name}</span>
}
