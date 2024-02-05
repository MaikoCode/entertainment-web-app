import TrendingCard from "@/components/trendingCard"
import RegularCard from "@/components/regularCard"
import dataJson from "@/assets/data.json"


export default function HomePage() { 
  return (
    <div className="mx-4">
    
      <h2 className="text-xl py-2">Trending</h2>
      <div className="flex overflow-x-auto gap-4 hide-scrollbar horizontal-scroll-container">
        {dataJson.map((item, index) => (
          item.isTrending && (
            <div className="min-w-max" key={index}>
              <TrendingCard data={item} />
            </div>
          )
        ))}
      </div>

      <h2 className="text-xl py-2">Recommended for you</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6
      ">
        {dataJson.map((item, index) => (
          !item.isTrending && (
           
          <div key={index} className="mr-6 mt-6 mb-6">
            <RegularCard data={item} />
          </div>
           
          )
        ))}
      </div>

    </div>
  );
}


