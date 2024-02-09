'use client'

import { MoveRight } from 'lucide-react'

export function DownloadButton() {
  const onButtonClick = () => {
    fetch('resume.pdf').then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob)
        const alink = document.createElement('a')
        alink.href = fileURL
        alink.download = 'Levi Curriculo.pdf'
        alink.click()
      })
    })
  }

  return (
    <button
      onClick={onButtonClick}
      className="flex border-b-2 border-transparent hover:border-gray-900"
    >
      Download CV
      <MoveRight color="#111827" />
    </button>
  )
}
