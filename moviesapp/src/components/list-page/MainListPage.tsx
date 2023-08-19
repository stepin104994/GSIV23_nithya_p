import { useEffect, useState } from 'react';
import "./MainListPage.scss";
import MovieCard from './MovieCard';
import Pagination from './Pagination';
import { connect, useDispatch } from 'react-redux';
import { GET_TRENDING_MOVIES } from './MainListPage.actions';
import { ICardData } from './MainListPage.interface';


const MainListPage = ({ activePage, moviesList,loader }: any) => {
    const dispatch = useDispatch();
    const [cardsData, setCardsData] = useState<ICardData[]>([]);
    useEffect(() => {
        //API call
        console.log(activePage, "--")
        dispatch({ type: GET_TRENDING_MOVIES, value: activePage });
    }, [activePage])

    useEffect(() => {
        setCardsData(moviesList);
    }, [moviesList])

    return (
        <>
            <div className='cards__container'>
                {cardsData.map((details, index) =>
                    <div key={index}>
                        <MovieCard
                            id={details.id}
                            poster_path={details.poster_path }
                            title={details.title}
                            overview={details.overview}
                            vote_average={details.vote_average}
                          />
                    </div>)}
            </div>
            <Pagination />
        </>
    )
}
const mapStateToProps = (state: any) => ({
    moviesList: state.moviesListReducer.moviesList,
    activePage: state.moviesListReducer.activePage,
    loader:state.moviesListReducer.loader
})
export default connect(mapStateToProps)(MainListPage);