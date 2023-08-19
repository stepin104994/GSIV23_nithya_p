import { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { GET_MOVIE_DETAILS } from "./DetailsPage.actions";
import { imagePath } from "../../utils/common";
import { ICardData } from "../list-page/MainListPage.interface";

const DetailsPage = ({ movieDetails }: any) => {
    const { movieId } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [details, setDetails] = useState<ICardData|any>();

    useEffect(() => {
        console.log(movieId)
        dispatch({ type: GET_MOVIE_DETAILS, value: movieId })
    }, [movieId, navigate])

    useEffect(() => {
        setDetails(movieDetails)
    }, [movieDetails])

    return (
        <div>
            <img loading="lazy" height={170} width={140} src={imagePath(details.poster_path)} alt="movie poster" />
        </div>
    )
}

const mapStateToProps = (state: any) => ({
    movieDetails: state.movieDetailsReducer.movieDetails
})
export default connect(mapStateToProps)(DetailsPage);