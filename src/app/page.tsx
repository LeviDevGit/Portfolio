import Image from "next/image";
import avatar from "@/_assets/avatar.png";
import vector from "@/_assets/vector.svg";
import { Terminal, AlignRight, MoveRight, MoveLeft } from "lucide-react";
import { nunito, space_grotesk } from "./fonts";
import { ProjectCard } from "@/_components/ProjectCard";

export default function Home() {
  return (
    <main className="w-full max-w-screen-xl">
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
      <div className="flex justify-end gap-4">
        <button className="bg-amber-500 p-3 rounded-full hover:bg-amber-400"><MoveLeft color="#FFFFFF" size={40} /></button>
        <button className="bg-amber-500 p-3 rounded-full hover:bg-amber-400"><MoveRight color="#FFFFFF" size={40} /></button>
      </div>
    </main>
  );
}
