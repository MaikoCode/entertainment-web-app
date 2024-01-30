import TrendingCard from "@/components/trendingCard"
import RegularCard from "@/components/regularCard"


export default function HomePage() { 
  return <div>
           
            <TrendingCard key={1} />

            <div className="mb-8"></div>

            <RegularCard key={2} />

            </div>
}