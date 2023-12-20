import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { Skills } from '@/components/Skills'
import { Projects } from '@/components/Projects'
import { Contact } from '@/components/Contact'
import { Footer } from '../components/Footer'

export default function Home() {
  return (
    <main className='grid grid-rows gap-40'>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </main>
  )
}
