import Image from "next/image"

export const About = () => {
    return (
        <section id="about">
        <h1 className='section-title'>about me</h1>
        <div className="grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-2 gap-4">
          <Image 
            src="/images/about-img.webp" 
            alt="about-img"
            width={400}
            height={600} 
            className='rounded-lg brightness-75'
            priority
          />
          <div className='flex flex-col gap-8 justify-evenly md:content-start lg:content-center'>
            <article className='px-0 sm:px-32 md:px-4 lg:px-8 text-xl md:text-xl lg:text-2xl leading-7'>
            Passionate about crafting impactful web experiences for startups, 
            I navigate projects from inception to launch, bringing a taste for 
            design and development. Whether reshaping existing products or leading 
            prototype initiatives, through collaboration, I hope to leave a lasting mark.
            </article>
            {/* <div className='flex flex-row justify-center gap-5 px-4'>
              <a href="/about" className='btn btn-outline btn-secondary btn-lg'>Read More</a>
            </div> */}
          </div>
        </div>
      </section>
    );
}