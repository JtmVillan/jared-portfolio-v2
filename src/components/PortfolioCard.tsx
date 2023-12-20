import { Portfolio} from "contentlayer/generated"
import Image from "next/image";
import Link from "next/link";

interface PortfolioCardProps {
    item: Portfolio
}

export const PortfolioCard:React.FC<PortfolioCardProps> = ({item}) => {
    return  (
        <div className="w-full">
            <Image className="aspect-square object-cover rounded-lg" 
            src={item.image.src} alt={item.title} width={item.image.width} height={item.image.height} />
            <div className="flex flow-row gap-2">
                <h4>{item.title}</h4>
                <Link href={"/portfolio/"+item.slug} className="flex flex-col justify-center">
                    <div className="text-3xl p-2 group w-fit grid overflow-hidden">
                        <div className="[grid-area:1/1] flex items-center justify-center h-5 w-5 transition ease-in-out group-hover:delay-200 translate-y-10 -translate-x-10 group-hover:translate-y-0 group-hover:translate-x-0">↗</div>
                        <div className="[grid-area:1/1] flex items-center justify-center h-5 w-5 transition ease-in-out delay-200 group-hover:delay-[0s] duration-300 group-hover:-translate-y-10 group-hover:translate-x-10">↗</div>
                    </div>
                </Link>
            </div>
            <div className="flex flex-row gap-4">
                {item?.tags?.map((tag) => (
                <div key={tag} className="">
                    <div className="bg-secondary-800 text-secondary-300 rounded-full px-2 text-md">{tag}</div>
                </div>
                ))}
            </div>
        </div>
    )
            
};
