import { ClipboardCopy } from '@/_components/ClipboardButton'
import Image from 'next/image'
import { ilustration, linkedin, github } from '@/_helpers/imports'

export function Footer() {
  return (
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
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/levi-barreto-ara%C3%BAjo/"
              target="_blank"
            >
              <Image
                src={linkedin}
                alt="Linkedin"
                className="h-[66px] w-[66px] rounded-lg hover:brightness-110"
              />
            </a>
            <a href="https://github.com/LeviDevGit" target="_blank">
              <Image
                src={github}
                alt="Github"
                className="h-[66px] w-[66px] rounded-lg hover:brightness-110"
              />
            </a>
          </div>
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
  )
}
