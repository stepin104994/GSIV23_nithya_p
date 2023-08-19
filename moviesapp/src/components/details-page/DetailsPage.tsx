import { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { GET_MOVIE_DETAILS } from "./DetailsPage.actions";
import { imagePath } from "../../utils/common";
import { ICardData } from "../list-page/MainListPage.interface";
import Loader from "../../shared/Loader";
import Error from "../../shared/Error";

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
            {loader ?
                <Loader /> : error ? <Error /> :
                    <div>
                        <img loading="lazy" height={170} width={140} src={imagePath(details?.poster_path)} alt="movie poster" />
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