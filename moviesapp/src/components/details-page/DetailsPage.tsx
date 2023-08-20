import { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { GET_MOVIE_DETAILS } from "./DetailsPage.actions";
import { imagePath } from "../../utils/common";
import { ICardData } from "../list-page/MainListPage.interface";
import Loader from "../../shared/Loader";
import Error from "../../shared/Error";
import Header from "../../shared/Header";
import "./DetailsPage.scss";
import moment from "moment";

const DetailsPage = ({ movieDetails, loader, error }: any) => {
    const { movieId } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [details, setDetails] = useState<ICardData | any>();

    useEffect(() => {
        dispatch({ type: GET_MOVIE_DETAILS, value: movieId })
    }, [movieId, navigate])

    useEffect(() => {
        setDetails(movieDetails)
    }, [movieDetails, loader, error])

    return (
        <>
            <Header search={false} />
            {loader ?
                <Loader /> : error ? <Error /> :
                    details && <div className="movie__details__container">
                        <img className="details__image" loading="lazy" height={200} width={140} src={imagePath(details?.poster_path)} alt="movie poster" />
                        <div className="movie__details">
                           <div className="container"> <p className="movie__title">{details?.title}</p><p>⭐ {details?.vote_average?.toFixed(2).replace(/\.00$/, '')}/10</p></div>
                            <p className="info">{moment(details?.release_date).format("YYYY")}|{moment.utc(moment.duration(details?.runtime,'minutes').asMilliseconds()).format("HH:mm")}</p>
                            <p className="movie__description">Description:{details?.overview}</p>
                        </div>
                    </div>}
        </>
    )
}

const mapStateToProps = (state: any) => ({
    movieDetails: state.movieDetailsReducer.movieDetails,
    loader: state.movieDetailsReducer.loader,
    error: state.movieDetailsReducer.error
})
export default connect(mapStateToProps)(DetailsPage);