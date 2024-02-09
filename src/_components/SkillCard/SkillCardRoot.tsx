import { ReactNode } from 'react'

interface SkillCardRootProps {
  children: ReactNode
}

export function SkillCardRoot({ children }: SkillCardRootProps) {
  return (
    <li className="flex flex-col items-center justify-center gap-6">
      {children}
    </li>
  )
}
