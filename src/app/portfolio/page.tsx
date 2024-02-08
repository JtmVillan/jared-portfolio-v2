import { PortfolioCard } from "@/components/UI/PortfolioCard"
import { allPortfolios } from "contentlayer/generated"

export default async function PortfolioIndex() {

    return <section className="mx-auto max-w-3xl">
        <h1 className="text-center text-4xl font-bold p-3">Portfolio</h1>
        <div className="p-4 grid grid-cols-3 gap-4">
            {allPortfolios.map((portfolio, index) => <PortfolioCard key={index} item={portfolio}/>
            )}
        </div>
    </section>
    
}