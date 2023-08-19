import loader from  "../assets/Loading_icon.gif";
import "./shared.scss";

const Loader =()=>{
    return(
        <div className="loader__alignment">
           <img src={loader} alt='loading' />
        </div>
    )
}

export default Loader;