

interface ThumbnailSizes {
    small: string;
    medium?: string;
    large: string;
}
  
interface Thumbnail {
    trending: ThumbnailSizes;
    regular: ThumbnailSizes;
}
  
interface Movie {
    title: string;
    thumbnail: Thumbnail;
    year: number;
    category: string;
    rating: string;
    isBookmarked: boolean;
    isTrending: boolean;
}
  
interface TrendingCardProps {
    data: Movie;
}

export default function RegularCard({data}: TrendingCardProps){
    return <div>
        
      

            </div>
}