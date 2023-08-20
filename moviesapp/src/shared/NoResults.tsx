import noResults from  "../assets/no-result.gif";
import "./shared.scss";

const NoResults =()=>{
    return(
        <div className="loader__alignment">
           <img src={noResults} alt='no data' />
        </div>
    )
}

export default NoResults;