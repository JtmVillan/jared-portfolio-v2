import { PortfolioCard } from "./PortfolioCard";
import { allPortfolios } from "contentlayer/generated";

export const Projects = () => {
    return (
        <section id="projects">
        <div className="grid grid-cols-2">
          <h1 className='basis-1/2 font-bold text-8xl text-end mb-10'>projects</h1>
        </div>
        <div className="flex flex-col gap-40"> 
          {allPortfolios.map((portfolio, index) => <PortfolioCard key={index} item={portfolio} />)}
        </div>
        <div className="flex flex-row justify-center py-10">
         <a href="/portfolio" className='btn btn-outline btn-secondary'>View all projects</a>
        </div>
      </section>
    );
}