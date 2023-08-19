import { imagePath } from "../../utils/common";
type props={
    
}

const MovieCard = ({}:props) => {
    
    return (
        <div className="card__wrapper">
            <div className="card__image" >
                <img loading="lazy" src={imagePath('')} alt="movie poster"/>
            </div>
            <div className="card__details">
                
            </div>
        </div>
    )
}

export default MovieCard;