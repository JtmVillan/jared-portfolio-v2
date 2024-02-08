export const Hero = () => {
    return (
        <section id="hero" className='flex flex-col gap-4 justify-end md:justify-center pb-52 md:pb-72 h-screen'>
            <h1 className="uppercase tracking-wide font-bold text-primary-400 text-5xl sm:text-6xl md:text-8xl lg:text-9xl text-start md:text-center md:px-16 pt-16 ">
                Hey, I&apos;m Jared
            </h1>
            <p className="font-normal text-text-200 text-lg text-start md:text-center">
                Computer engineer and freelance full-stack developer.
            </p>
        </section>
    );
}