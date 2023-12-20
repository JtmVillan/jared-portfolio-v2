import Image from "next/image"

export default function AboutPage() {
    return (
        <section id="about">
        <div className="grid grid-cols-2 mb-20">
          <h1 className='basis-1/2 font-bold text-8xl text-end'>my story</h1>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className=''>
            <Image 
              src="/images/about-img.webp" 
              alt="about-img"
              width={500}
              height={700} 
              className='rounded-lg'
            />
          </div>
          <article className=''>
            <h3 className='px-4 my-6'>
              background
            </h3>
            <div className='grid grid-cols-1 gap-12'>
              <p className='px-4'>
                I’m an independent developer based in San Diego, California <span>☀️</span>. 
                This year, I graduated with a bachelors in <span className='text-secondary-500'>computer engineering </span>
                from UCSD <span>🎓</span>, and since then I’ve been learning and improving my 
                frontend skills through personal projects.
              </p>
            </div>
            <h3 className='px-4 my-6'>
              developing
            </h3>
            <div className='grid grid-cols-1 gap-12'>
              <p className='px-4'>
                I’m an independent developer based in San Diego, California <span>☀️</span>. 
                This year, I graduated with a bachelors in <span className='text-secondary-500'>computer engineering </span>
                from UCSD <span>🎓</span>, and since then I’ve been learning and improving my 
                frontend skills through personal projects.
              </p>
            </div>
            <h3 className='px-4 my-6'>
              personal life
            </h3>
            <div className='grid grid-cols-1 gap-12'>
              <p className='px-4'>
                I’m an independent developer based in San Diego, California <span>☀️</span>. 
                This year, I graduated with a bachelors in <span className='text-secondary-500'>computer engineering </span>
                from UCSD <span>🎓</span>, and since then I’ve been learning and improving my 
                frontend skills through personal projects.
              </p>
            </div>
            <h3 className='px-4 my-6'>
              goals
            </h3>
            <div className='grid grid-cols-1 gap-12'>
              <p className='px-4'>
                But when I’m not developing, you can find me lifting in the gym <span>💪🏽</span>, 
                reading books or indulging in music <span>🎧</span> or video games.
              </p>
              <div className='flex flex-row gap-5 px-4'>
                <a href="https://docs.google.com/document/d/e/2PACX-1vTE7W7nqEEPUj01e2VXRrpprTbHiVXvN6E6rX3rYAuyXtWuVdjhhyrSfXc9-fRVrA/pub" 
                  className='btn btn-outline btn-secondary'
                  target="_blank" rel="noopener noreferrer">
                  resume
                </a>
                <a href="/#about" className='btn btn-outline btn-secondary'>go back</a>
              </div>
            </div>

          </article>
          
        </div>
      </section>
    )
}