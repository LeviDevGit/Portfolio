import { DownloadButton } from '@/_components/DownloadButton'
import { scrollToContact } from '@/_helpers/scrolls'
import { nunito } from '@/_styles/fonts'
import Image from 'next/image'
import { avatar, vector } from '@/_helpers/imports'

export function SplashCardSection() {
  return (
    <div className="mt-10 flex flex-col items-center rounded-[44px] bg-gradient-to-r from-flavescent to-magic-mint px-36 py-10 shadow-card mobile:px-6 mobile:py-8">
      <Image
        src={avatar}
        alt="Avatar"
        className="mb-6 w-32 rounded-full bg-mint-cream p-2 shadow-avatar"
      />
      <div className="mb-2 flex h-fit items-center gap-3">
        <p
          className={`${nunito.className} text-5xl font-semibold -tracking-[2.64px] mobile:text-2xl`}
        >
          Olá, eu sou o Levi
        </p>
        <img
          src="https://emojigraph.org/media/apple/call-me-hand-light-skin-tone_1f919-1f3fb.png"
          className="h-12 mobile:h-6"
        />
      </div>
      <div className="mb-11 max-w-[840px] text-center text-6xl font-medium leading-[71px] mobile:text-4xl">
        Desenvolvo{' '}
        <div className="relative z-10 inline-block w-fit">
          <span className="relative z-10 bg-gradient-to-r from-deep-sky-blue to-celestial-blue bg-clip-text text-transparent">
            ideias{' '}
          </span>
          <Image
            src={vector}
            alt="Vector"
            className="absolute inset-x-0 bottom-1 z-0 h-4 w-full"
          />
        </div>{' '}
        e ajudo a construir um mundo melhor através do software.
      </div>
      <div className="flex items-center gap-4">
        <button
          className="rounded-[32px] bg-gray-900 px-9 py-2 text-white hover:bg-gray-700"
          onClick={scrollToContact}
        >
          Contato
        </button>
        <DownloadButton />
      </div>
    </div>
  )
}
