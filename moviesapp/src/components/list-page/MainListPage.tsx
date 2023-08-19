import { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
type cardsData = {
    
}
const MainListPage = () => {
    const [cardsData, setCardsData] = useState<cardsData[]>([]);
    useEffect(() => {
        //API call
    }, [])
    return (
        <>
        <>List Page</>
            <div className='cards__container'>
                {cardsData.map((details,index) => <MovieCard key={index} {...details} />)}
            </div>

        </>
    )
}

export default MainListPage;