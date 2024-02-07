import Image from 'next/image'
import { avatar, ilustration, linkedin, vector } from '@/_helpers/imports'
import { Terminal } from 'lucide-react'
import { nunito, spaceGrotesk } from '../_styles/fonts'
import { ClipboardCopy } from '@/_components/ClipboardButton'
import { DownloadButton } from '@/_components/DownloadButton'
import {
  scrollToContact,
  scrollToAboutMe,
  scrollToProjects,
} from '@/_helpers/scrolls'
import { ModalToggle } from '@/_components/ModalToggle'
import { AboutMeSection } from './components/AboutMeSection/AboutMeSection'
import { ProjectsSection } from './components/ProjectsSection/ProjectsSection'

export default function Home() {
  return (
    <main className="flex w-full max-w-screen-xl flex-col mobile:max-w-full mobile:px-6 ">
      {/* Header */}
      <header className="start flex w-full items-center justify-between">
        <div className="flex items-center gap-2">
          <Terminal color="#FFC36A" size={32} strokeWidth={2} />
          <span className={`${spaceGrotesk.className} text-xl`}>
            Levi Portfolio
          </span>
        </div>
        <div>
          <ModalToggle
            projectContactButton={scrollToContact}
            projectAboutMeButton={scrollToAboutMe}
            projectActionButton={scrollToProjects}
          />
        </div>
      </header>
      {/* Splash Card */}
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
      {/* Projects */}
      <ProjectsSection />
      <AboutMeSection />
      {/* Footer */}
      <footer className="flex w-screen flex-col items-center self-center rounded-t-[48px] bg-gray-900 mobile:px-6">
        <div className="mb-16 mt-20 flex h-[452px] max-w-screen-xl items-center justify-between">
          <div className="flex flex-col gap-2">
            <h2 className="text-[92px] font-medium leading-[82px] text-white mobile:text-6xl">
              Tem alguma ideia?
            </h2>
            <p className="mb-6 w-72 text-2xl font-normal text-white mobile:text-xl">
              Vamos construí-la juntos!
            </p>
            <ClipboardCopy copyText="levibaraujo80@gmail.com" />
            <a
              href="https://www.linkedin.com/in/levi-barreto-ara%C3%BAjo/"
              target="_blank"
            >
              <Image
                src={linkedin}
                alt="Linkedin"
                className="hover:brightness-110"
              />
            </a>
          </div>
          <Image
            src={ilustration}
            alt="Ilustração"
            title="Designed by fullvector / Freepik"
            className="w-[600px] rounded-2xl object-scale-down object-center shadow-xl mobile:hidden"
          />
        </div>
        <div className="mb-7">
          <span className="text-base font-light text-white">
            Design inspiration from
          </span>
          <a
            href="https://www.figma.com/community/file/1126581136185110141/web-developer-portfolio-personal-site"
            target="_blank"
            className="text-lg font-light text-amber-500 mobile:text-center mobile:text-base"
          >
            {' '}
            Rafael Jr. Porfolio Design
          </a>
        </div>
      </footer>
    </main>
  )
}
