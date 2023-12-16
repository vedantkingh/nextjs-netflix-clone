import Image from 'next/image'
import styles from './page.module.css'
import HeroSection from './components/HeroSection'

export default function Home() {
  return (
    <main>
      <HeroSection title={"Let's watch a movie together"} imageUrl={"/home.svg"}/>
    </main>
  )
}
