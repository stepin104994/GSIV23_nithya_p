import { imagePath } from "../../utils/common";
import { ICardData } from "./MainListPage.interface";
import { Link } from "react-router-dom";

const MovieCard = ({ id, poster_path, title, overview, vote_average }: ICardData) => {

    return (
        <Link to={`/moviedetails/${id}`}>
            <div className="card__wrapper">
                <div className="card__image" >
                    <img loading="lazy" height={170} width={140} src={imagePath(poster_path)} alt="movie poster" />
                </div>

                <p>{title}</p><span>⭐ {vote_average?.toFixed(2).replace(/\.00$/, '')}/10</span>
                <p></p>

            </div>
        </Link>
    )
}

export default MovieCard;