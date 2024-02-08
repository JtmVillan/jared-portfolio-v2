"use client"
import { useLenis } from "@studio-freight/react-lenis";

export const Footer = () => {

    const lenis = useLenis(() => {
    })

    return (
        <>
          <footer className="footer flex flex-row justify-start text-text-200 pb-4">
            <nav className="basis-1/2">
              <h3 className="contact-link-title border-b w-full">Navigation</h3> 
                <a href="#home" className='link link-hover' onClick={() => lenis.scrollTo('#home', {lerp:0.1})}>Home</a>
                <a href="#about" className='link link-hover' onClick={() => lenis.scrollTo('#about', {lerp:0.1})}>About</a>
                <a href="#skills" className='link link-hover' onClick={() => lenis.scrollTo('#skills', {lerp:0.1})}>Skills</a>
                <a href="#projects" className='link link-hover' onClick={() => lenis.scrollTo('#projects', {lerp:0.1})}>Projects</a>
                <a href="#contact" className='link link-hover' onClick={() => lenis.scrollTo('#contact', {lerp:0.1})}>Contact</a>
            </nav> 
            <nav className="basis-1/2">
              <h3 className="contact-link-title border-b w-full">Socials</h3> 
              <a href="https://www.linkedin.com/in/jared-villanueva-a450581a3/" target="_blank" rel="noopener noreferrer" className="link link-hover">LinkedIn</a>
              <a href="https://github.com/JtmVillan" target="_blank" rel="noopener noreferrer" className="link link-hover">GitHub</a>
              <a href="https://www.instagram.com/jared.vanilla.wafer/" target="_blank" rel="noopener noreferrer" className="link link-hover">Instagram</a>
            </nav> 
          </footer> 
          <footer className="footer flex flex-row justify-between">
            <aside className="items-center grid-flow-col">
              <p className="text-3xl font-bold text-text-300">© 2024 JARED VILLANUEVA</p> 
            </aside> 
            <div className='flex flex-row justify-center gap-5 px-4'>
              <div className="hidden md:block">
                <a href="#home" className='btn btn-outline btn-secondary btn-circle' onClick={() => lenis.scrollTo('#home', {lerp:0.1})}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
                  </svg>
                </a>
              </div>
            </div>
          </footer>
        </>
    );
}