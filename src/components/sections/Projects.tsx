import { PortfolioCard } from "../UI/PortfolioCard";
import { allPortfolios } from "contentlayer/generated";

export const Projects = () => {
    return (
      <section id="projects">
        <h1 className='section-title pb-8'>projects</h1>
        <div className="flex flex-col gap-8"> 
          {allPortfolios.map((portfolio, index) => <PortfolioCard key={index} item={portfolio} />)}
        </div>
        {/* <div className="flex flex-row justify-start pt-8">
          <a href="/portfolio" className='btn btn-outline btn-secondary btn-lg'>View More</a>
        </div> */}
      </section>
    );
}