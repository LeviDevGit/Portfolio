'use client'

import { useState } from 'react'
import { Element } from 'react-scroll'

interface ClipboardCopyProps {
  copyText: string
}

export function ClipboardCopy({ copyText }: ClipboardCopyProps) {
  const [isCopied, setIsCopied] = useState(false)

  // This is the function we wrote earlier
  async function copyTextToClipboard(text: string) {
    if ('clipboard' in navigator) {
      return await navigator.clipboard.writeText(text)
    } else {
      return document.execCommand('copy', true, text)
    }
  }

  // onClick handler function for the copy button
  const handleCopyClick = () => {
    // Asynchronously call copyTextToClipboard
    copyTextToClipboard(copyText)
      .then(() => {
        // If successful, update the isCopied state value
        setIsCopied(true)
        setTimeout(() => {
          setIsCopied(false)
        }, 1500)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <Element name="myScrollToElement">
      <div>
        <button
          onClick={handleCopyClick}
          className="mb-6 border-b-2 text-2xl font-normal text-white mobile:text-xl"
        >
          {isCopied ? 'Copied!' : 'levibaraujo80@gmail.com'}
        </button>
      </div>
    </Element>
  )
}
