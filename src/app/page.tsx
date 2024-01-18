import Image from "next/image";
import { avatar, avatar_about, decoration, ilustration, linkedin, vector, vector_about } from "@/_helpers/imports"
import { Terminal, AlignRight, MoveRight, MoveLeft } from "lucide-react";
import { nunito, space_grotesk } from "../_styles/fonts";
import { ProjectCard } from "@/_components/ProjectCard";
import { SkillCard } from "@/_components/SkillCard";
import { ClipboardCopy } from "@/_components/ClipboardButton";

export default function Home() {
  return (
    <main className="w-full max-w-screen-xl flex flex-col">
      {/* Header */}
      <header className="w-full flex start items-center justify-between">
        <div className="flex items-center gap-2">
          <Terminal color="#FFC36A" size={32} strokeWidth={2} />
          <span className={`${space_grotesk.className} text-xl`}>Levi Portfolio</span>
        </div>
        <button>
          <AlignRight color="#111827" size={50} absoluteStrokeWidth={true} />
        </button>
      </header>
      {/* Splash Card */}
      <div className="w-full bg-gradient-to-r from-flavescent to-magic-mint rounded-[44px] flex flex-col items-center py-10 px-36 shadow-card mt-10">
        <Image
          src={avatar}
          alt="Avatar"
          className="w-32 rounded-full bg-mint-cream p-2 shadow-avatar mb-6"
        />
        <div className="flex items-center h-fit gap-3 mb-2">
          <p className={`${nunito.className} text-5xl font-semibold -tracking-[2.64px]`}>
            Olá, eu sou o Levi
          </p>
          <img
            src="https://emojigraph.org/media/apple/call-me-hand-light-skin-tone_1f919-1f3fb.png"
            className="h-12"
          />
        </div>
        <div className="text-6xl font-medium text-center leading-[71px] mb-11 max-w-[840px]">
          Desenvolvo{" "}
          <div className="relative z-10 w-fit inline-block">
            <span className="relative z-10 bg-gradient-to-r from-deep-sky-blue to-celestial-blue bg-clip-text text-transparent">
              ideias{" "}
            </span>
            <Image
              src={vector}
              alt="Vector"
              className="w-full h-4 absolute z-0 inset-x-0 bottom-1"
            />
          </div>{" "}
          e ajudo a construir um mundo melhor através do software.
        </div>
        <div className="flex items-center gap-4">
          <button className="bg-gray-900 text-white rounded-[32px] px-9 py-2 hover:bg-gray-700">
            Contato
          </button>
          <button className="flex border-b-2 border-transparent hover:border-gray-900">
            Download CV
            <MoveRight color="#111827" />
          </button>
        </div>
      </div>
      {/* Projects */}
      <h1 className="text-left text-8xl font-medium leading-[82px] mt-20 mb-16">
        <span className="block">Ultimos </span>
        <span className="block">Projetos</span>
      </h1>
      <div className="flex justify-between mb-14">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
      <div className="flex justify-end gap-4 mb-16">
        <button className="bg-amber-500 p-3 rounded-full hover:bg-amber-400"><MoveLeft color="#FFFFFF" size={40} /></button>
        <button className="bg-amber-500 p-3 rounded-full hover:bg-amber-400"><MoveRight color="#FFFFFF" size={40} /></button>
      </div>
      <div className="text-left text-8xl font-medium leading-[82px] mb-10">
        Sobre
        <div className="relative z-10 w-fit pr-9">
          <span className="block relative z-10">mim</span>
          <Image src={vector_about} alt="Vector About" className="w-full absolute z-0 inset-x-0 -bottom-4" />
        </div>
      </div>
      <div className="flex gap-36 items-center justify-between mb-20">
        <div className="flex flex-col justify-between">
          <div className="flex items-center gap-5 mb-12">
            <Image src={decoration} alt="Decoration" className="h-full" />
            <p className="font-nunito font-normal text-2xl leading-normal">Tenho 19 anos, e sempre fui apaixonado por tecnologia e em desenvolver soluções para problemas difíceis.<br /> <br />Futuro cientista da computação e atual desenvolvedor fullstack!</p>
          </div>
          <div>
            <h2 className="text-5xl font-medium mb-8">Skills</h2>
            <div className="flex justify-between items-center">
              <SkillCard imageSource="https://icon.icepanel.io/Technology/svg/React.svg" skillName="React" />
              <SkillCard imageSource="https://icon.icepanel.io/Technology/svg/Node.js.svg" skillName="Node.js" />
              <SkillCard imageSource="https://icon.icepanel.io/Technology/svg/PostgresSQL.svg" skillName="PostgreSQL" />
            </div>
          </div>
        </div>
        <Image src={avatar_about} alt="Avatar About" className="h-fit" />
      </div>
      {/* Footer */}
      <footer className="w-screen bg-gray-900 self-center flex flex-col items-center rounded-t-[48px]">
        <div className="max-w-screen-xl h-[452px] flex justify-between items-center mt-20 mb-16">
          <div className="flex flex-col gap-2">
            <h2 className="text-[92px] font-medium text-white leading-[82px]">Tem alguma ideia?</h2>
            <p className="text-2xl font-normal text-white mb-6 w-72">Vamos construí-la juntos!</p>
            <ClipboardCopy copyText="levibaraujo80@gmail.com" />
            <a href="https://www.linkedin.com/in/levi-barreto-ara%C3%BAjo/" target="_blank">
              <Image src={linkedin} alt="Linkedin" className="hover:brightness-110" />
            </a>
          </div>
          <Image src={ilustration} alt="Ilustração" title="Designed by rawpixel.com" className="w-[500px] h-[452px] object-cover object-center rounded-2xl" />
        </div>
        <div className="mb-7">
          <span className="text-base font-light text-white">Design inspiration from</span>
          <a href="https://www.figma.com/community/file/1126581136185110141/web-developer-portfolio-personal-site"
            target="_blank" className="text-lg font-light text-amber-500 "> Rafael Jr. Porfolio Design</a>
        </div>
      </footer>
    </main>
  );
}
