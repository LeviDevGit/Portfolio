'use client'

import { SkillCard } from '@/_components/SkillCard'
import { avatarAbout, decoration, vectorAbout } from '@/_helpers/imports'
import Image from 'next/image'
import { Element } from 'react-scroll'

export function AboutMeSection() {
  return (
    <Element name="myScrollToAboutMe">
      <div className="mb-10 text-left text-8xl font-medium leading-[82px] mobile:text-6xl">
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
      <div className="mb-20 flex items-center justify-between gap-36 mobile:flex-col">
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
            <h2 className="mb-8 text-5xl font-medium mobile:text-4xl">
              Skills
            </h2>
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
        <Image
          src={avatarAbout}
          alt="Avatar About"
          className="h-fit mobile:hidden"
        />
      </div>
    </Element>
  )
}
