"use client"
import { useLenis } from "@studio-freight/react-lenis";

export const Header = () => {
    
    const lenis = useLenis((scroll) => {
      })

    return (
        <header className='flex flex-row justify-between sticky top-0 px-20 pt-10'>
          <a href="/" className=''>
            <svg viewBox="0 0 280 280" fill="none" xmlns="http://www.w3.org/2000/svg"className='h-12 w-12'>
              <circle cx="140" cy="140" r="132.5" strokeWidth="15" className='stroke-accent-400'/>
              <circle cx="78" cy="161" r="35" className='fill-accent-400'/>
              <circle cx="205" cy="161" r="35" className='fill-accent-400'/>
            </svg>
          </a>
          <nav>
            <div className='flex flex-row gap-2'>
                <a href="#about" className='nav-link' onClick={() => lenis.scrollTo('#about', {lerp:0.1})}>about</a>
                <a href="#skills" className='nav-link' onClick={() => lenis.scrollTo('#skills', {lerp:0.1})}>skills</a>
                <a href="#projects" className='nav-link' onClick={() => lenis.scrollTo('#projects', {lerp:0.1})}>projects</a>
                <a href="#contact" className='nav-link' onClick={() => lenis.scrollTo('#contact', {lerp:0.1})}>contact</a>
            </div>
          </nav>
        </header>
    )
}