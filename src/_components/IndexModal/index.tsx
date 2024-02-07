import { Triangle } from 'lucide-react'

interface IndexModalProps {
  toggle: boolean
  projectAboutMeButton: () => void
  projectActionButton: () => void
  projectContactButton: () => void
}

export function IndexModal({
  toggle,
  projectAboutMeButton,
  projectActionButton,
  projectContactButton,
}: IndexModalProps) {
  return (
    <dialog
      open={toggle}
      className="absolute -left-32 top-20 z-10 overflow-visible rounded-2xl bg-white p-11 drop-shadow-modal"
    >
      <Triangle
        fill="#FFFFFF"
        color="#FFFFFF"
        className="absolute -top-5 right-5 drop-shadow-modal"
      />
      <ul className="flex flex-col items-center gap-2 whitespace-nowrap text-base font-medium">
        <li className="text-amber-500">
          <button onClick={projectActionButton}>Projetos</button>
        </li>
        <li className="text-sky-400">
          <button onClick={projectAboutMeButton}>Sobre mim</button>
        </li>
        <li className="text-emerald-400">
          <button onClick={projectContactButton}>Contatos</button>
        </li>
      </ul>
    </dialog>
  )
}
