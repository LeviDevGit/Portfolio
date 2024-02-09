import { ModalToggle } from '@/_components/ModalToggle/ModalToggle'
import {
  scrollToAboutMe,
  scrollToContact,
  scrollToProjects,
} from '@/_helpers/scrolls'
import { spaceGrotesk } from '@/_styles/fonts'
import { Terminal } from 'lucide-react'

export function Header() {
  return (
    <header className="start flex w-full items-center justify-between">
      <div className="flex items-center gap-2">
        <Terminal color="#FFC36A" size={32} strokeWidth={2} />
        <span className={`${spaceGrotesk.className} text-xl`}>
          Levi Portfolio
        </span>
      </div>
      <nav>
        <ModalToggle
          projectContactButton={scrollToContact}
          projectAboutMeButton={scrollToAboutMe}
          projectActionButton={scrollToProjects}
        />
      </nav>
    </header>
  )
}
