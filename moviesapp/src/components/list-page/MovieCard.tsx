import { imagePath } from "../../utils/common";
import { ICardData } from "./MainListPage.interface";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ id, poster_path, title, overview, vote_average }: ICardData) => {
    const navigate = useNavigate();

    return (

        <div className="card__wrapper" onClick={() => navigate(`/moviedetails/${id}`)}>
            <div className="card__image" >
                <img loading="lazy" height={170} width={140} src={imagePath(poster_path)} alt="movie poster" />
            </div>

            <p className="card__title">{title}</p>
            <p className="movie__rating">⭐ {vote_average?.toFixed(2).replace(/\.00$/, '')}/10</p>
            <p className="movie__description">{overview}</p>

        </div>

    )
}

export default MovieCard;