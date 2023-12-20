// "use client"
// import gsap from "gsap";
// import CustomEase from "gsap/dist/CustomEase";
// import { useEffect } from "react";

// gsap.registerPlugin(CustomEase);
// CustomEase.create('cubic-text', '0.25, 1, 0.5, 1');

export const Hero = () => {
    // useEffect(() => {
    //     const titles = document.querySelectorAll('h1');
    //     const tl = gsap.timeline({ defaults: { duration: 1 } });
    
    //     titles.forEach((title, index) => {
    //       const el = title.querySelectorAll('span span');
    //       const delay = index * 0.08;
    
    //       tl.to(
    //         el,
    //         {
    //           y: 0,
    //           duration: 1.5,
    //           ease: 'cubic-text',
    //         },
    //         delay
    //       );
    //     });
    
    //     return () => {};
    //   }, []);
    return (
        <section id="landing" className='flex flex-col justify-center h-screen'>
            <div className="grid grid-rows-2">
            <h1 className=" h_title text-start text-primary-400 px-4">
                jared
            </h1>
            <h1 className=" h_title text-end text-primary-400 px-4">
                villanueva 
            </h1>
            </div>
        </section>
        // <div className="flex flex-col justify-center h-screen">
        //     <h1 className="grid grid-rows gap-20 relative w-full text-center text-[15vw] font-light uppercase leading-[90%] lg:text-[8.7vw] ">
        //     <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
        //         <span className=" inline-block translate-y-full pb-1.5 pt-6 will-change-transform text-primary-400 font-black text-start">
        //         jared
        //         </span>
        //     </span>
        //     <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
        //         <span className="inline-block translate-y-full pb-1.5 pt-6 will-change-transform text-primary-400 font-black text-end">
        //         villanueva
        //         </span>
        //     </span>
        //     </h1>
        // </div>
    );
}