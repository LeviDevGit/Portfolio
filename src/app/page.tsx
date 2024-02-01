import Image from 'next/image'
import {
  avatar,
  avatarAbout,
  decoration,
  ilustration,
  linkedin,
  vector,
  vectorAbout,
} from '@/_helpers/imports'
import { Terminal, AlignRight, MoveRight, MoveLeft } from 'lucide-react'
import { nunito, spaceGrotesk } from '../_styles/fonts'
import { ProjectCard } from '@/_components/ProjectCard'
import { SkillCard } from '@/_components/SkillCard'
import { ClipboardCopy } from '@/_components/ClipboardButton'
import { DownloadButton } from '@/_components/DownloadButton'
import { scrollToContact } from '@/_helpers/scrolls'

export default function Home() {
  return (
    <main className="flex w-full max-w-screen-xl flex-col">
      {/* Header */}
      <header className="start flex w-full items-center justify-between">
        <div className="flex items-center gap-2">
          <Terminal color="#FFC36A" size={32} strokeWidth={2} />
          <span className={`${spaceGrotesk.className} text-xl`}>
            Levi Portfolio
          </span>
        </div>
        <button>
          <AlignRight color="#111827" size={50} absoluteStrokeWidth={true} />
        </button>
      </header>
      {/* Splash Card */}
      <div className="mt-10 flex w-full flex-col items-center rounded-[44px] bg-gradient-to-r from-flavescent to-magic-mint px-36 py-10 shadow-card">
        <Image
          src={avatar}
          alt="Avatar"
          className="mb-6 w-32 rounded-full bg-mint-cream p-2 shadow-avatar"
        />
        <div className="mb-2 flex h-fit items-center gap-3">
          <p
            className={`${nunito.className} text-5xl font-semibold -tracking-[2.64px]`}
          >
            Olá, eu sou o Levi
          </p>
          <img
            src="https://emojigraph.org/media/apple/call-me-hand-light-skin-tone_1f919-1f3fb.png"
            className="h-12"
          />
        </div>
        <div className="mb-11 max-w-[840px] text-center text-6xl font-medium leading-[71px]">
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
      <h1 className="mb-16 mt-20 text-left text-8xl font-medium leading-[82px]">
        <span className="block">Ultimos </span>
        <span className="block">Projetos</span>
      </h1>
      <div className="mb-14 grid grid-flow-col overflow-x-auto">
        <ProjectCard
          techName="Kenzie Hub"
          techProps={[
            { techName: 'React', techColor: 'bg-sky-400' },
            { techName: 'Rest API', techColor: 'bg-rose-500' },
          ]}
          techLink="https://react-entrega-kenzie-hub-levi-git-h.vercel.app/"
          techDeploy={true}
          techBackground="bg-wild-watermelon"
        />
        <ProjectCard
          techName="KIm-veis"
          techProps={[
            { techName: 'Node.js', techColor: 'bg-emerald-400' },
            { techName: 'SQLite3', techColor: 'bg-orange-400' },
            { techName: 'Jest', techColor: 'bg-gray-900' },
          ]}
          techLink="https://github.com/Kenzie-Academy-Brasil-Developers/KIm-veis"
          techGithub={true}
        />
      </div>
      <div className="mb-16 flex justify-end gap-4">
        <button className="rounded-full bg-amber-500 p-3 hover:bg-amber-400">
          <MoveLeft color="#FFFFFF" size={40} />
        </button>
        <button className="rounded-full bg-amber-500 p-3 hover:bg-amber-400">
          <MoveRight color="#FFFFFF" size={40} />
        </button>
      </div>
      <div className="mb-10 text-left text-8xl font-medium leading-[82px]">
        Sobre
        <div className="relative z-10 w-fit pr-9">
          <span className="relative z-10 block">mim</span>
          <Image
            src={vectorAbout}
            alt="Vector About"
            className="absolute inset-x-0 -bottom-4 z-0 w-full"
          />
        </div>
      </div>
      <div className="mb-20 flex items-center justify-between gap-36">
        <div className="flex flex-col justify-between">
          <div className="mb-12 flex items-center gap-5">
            <Image src={decoration} alt="Decoration" className="h-full" />
            <p className="font-nunito text-2xl font-normal leading-normal">
              Tenho 19 anos, e sempre fui apaixonado por tecnologia e em
              desenvolver soluções para problemas difíceis.
              <br /> <br />
              Futuro cientista da computação e atual desenvolvedor fullstack!
            </p>
          </div>
          <div>
            <h2 className="mb-8 text-5xl font-medium">Skills</h2>
            <div className="flex items-center justify-between">
              <SkillCard
                imageSource="https://icon.icepanel.io/Technology/svg/React.svg"
                skillName="React"
              />
              <SkillCard
                imageSource="https://icon.icepanel.io/Technology/svg/Node.js.svg"
                skillName="Node.js"
              />
              <SkillCard
                imageSource="https://icon.icepanel.io/Technology/svg/PostgresSQL.svg"
                skillName="PostgreSQL"
              />
            </div>
          </div>
        </div>
        <Image src={avatarAbout} alt="Avatar About" className="h-fit" />
      </div>
      {/* Footer */}
      <footer className="flex w-screen flex-col items-center self-center rounded-t-[48px] bg-gray-900">
        <div className="mb-16 mt-20 flex h-[452px] max-w-screen-xl items-center justify-between">
          <div className="flex flex-col gap-2">
            <h2 className="text-[92px] font-medium leading-[82px] text-white">
              Tem alguma ideia?
            </h2>
            <p className="mb-6 w-72 text-2xl font-normal text-white">
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
            title="Designed by rawpixel.com"
            className="h-[452px] w-[500px] rounded-2xl object-cover object-center"
          />
        </div>
        <div className="mb-7">
          <span className="text-base font-light text-white">
            Design inspiration from
          </span>
          <a
            href="https://www.figma.com/community/file/1126581136185110141/web-developer-portfolio-personal-site"
            target="_blank"
            className="text-lg font-light text-amber-500 "
          >
            {' '}
            Rafael Jr. Porfolio Design
          </a>
        </div>
      </footer>
    </main>
  )
}
