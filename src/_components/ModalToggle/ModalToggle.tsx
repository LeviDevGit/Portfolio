'use client'

import { AlignRight } from 'lucide-react'
import { useState } from 'react'
import { IndexModal } from './IndexModal'

interface ModalToggleProps {
  projectAboutMeButton: () => void
  projectActionButton: () => void
  projectContactButton: () => void
}

export function ModalToggle({
  projectAboutMeButton,
  projectActionButton,
  projectContactButton,
}: ModalToggleProps) {
  const [modalToggle, SetModalToggle] = useState(false)

  return (
    <div className="relative">
      <button
        onClick={() => {
          SetModalToggle(!modalToggle)
        }}
      >
        <AlignRight color="#111827" size={50} absoluteStrokeWidth={true} />
      </button>
      <IndexModal
        toggle={modalToggle}
        projectAboutMeButton={projectAboutMeButton}
        projectActionButton={projectActionButton}
        projectContactButton={projectContactButton}
      />
    </div>
  )
}
