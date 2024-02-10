import dataJson from "@/assets/data.json"
import RegularCard from "@/components/regularCard"

export default function Movie(){
    return  <div className="overflow-x-hidden mx-4 lg:w-full max-w-[69rem] hide-scrollbar">
    
    <h2 className="text-3xl py-4 px-6">Movies</h2>
    
    <div className="grid grid-cols-2 tablet:grid-cols-3 lg:grid-cols-4 gap-x-1 md:gap-x-0 gap-y-16
    ">
      {dataJson.map((item, index) => (
        item.category === "Movie" && (
        <div key={index} className="flex justify-center items-center">
          <RegularCard data={item} />
        </div>
        )
      ))}
    </div>

  </div>
}