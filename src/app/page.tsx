import { AlignRight, MoveRight } from "lucide-react";
import Image from "next/image";
import avatar from "@/../public/assets/avatar.png";
import { nunito } from "./layout";

export default function Home() {
  return (
    <main className="w-full max-w-screen-xl">
      {/* Header */}
      <header className="w-full flex start items-center justify-between">
        <span>Levi</span>
        <button>
          <AlignRight color="#111827" size={42} absoluteStrokeWidth={true} />
        </button>
      </header>
      <div className="w-full bg-gradient-to-r from-flavescent to-magic-mint rounded-[44px] flex flex-col items-center py-10 px-32 shadow-card mt-10">
        <Image
          src={avatar}
          alt="Avatar"
          className="w-32 rounded-full bg-mint-cream p-2 shadow-avatar mb-6"
        />
        <div className="flex items-center h-fit gap-3 mb-2">
          <p className={`${nunito.className} text-5xl font-semibold`}>
            Olá, eu sou o Levi
          </p>
          <img
            src="https://emojigraph.org/media/apple/call-me-hand-light-skin-tone_1f919-1f3fb.png"
            className="h-12"
          />
        </div>
        <p className="text-6xl font-medium text-center leading-normal mb-11">
          Desenvolvo ideias e ajudo a construir um mundo melhor através do software.
        </p>
        <div className="flex items-center gap-4">
          <button className="bg-gray-900 text-white rounded-[32px] px-9 py-2 hover:bg-gray-800">
            Contato
          </button>
          <button className="flex hover:border-b-2 border-gray-900">
            Download CV
            <MoveRight color="#111827" />
          </button>
        </div>
      </div>
    </main>
  );
}
