import { AboutMeSection } from '../_components/AboutMeSection/AboutMeSection'
import { ProjectsSection } from '../_components/ProjectsSection/ProjectsSection'
import { Footer } from '../_components/Footer/Footer'
import { Header } from '../_components/Header/Header'
import { SplashCardSection } from '../_components/SplashCardSection/SplashCardSection'

export default function Home() {
  return (
    <main className="flex w-full max-w-screen-xl flex-col mobile:max-w-full mobile:px-6 ">
      <Header />
      <SplashCardSection />
      <ProjectsSection />
      <AboutMeSection />
      <Footer />
    </main>
  )
}
