import { useState } from "react"
import { useDispatch } from "react-redux";
import { SET_SEARCH_VALUE } from "../components/list-page/MainListPage.actions";
import home from "../assets/home.png";
import { Link } from "react-router-dom";

type prop = {
    search: boolean
}
const Header = ({ search }: prop) => {
    const [searchValue, setSearchValue] = useState<string>('');
    const dispatch = useDispatch();

    const handleChange = (e: any) => {
        dispatch({ type: SET_SEARCH_VALUE, value: e });
        setSearchValue(e)
    }
    return (
        <div className="header__container">
            {search ?
                <input type="text" value={searchValue} placeholder="Search" onChange={(e) => handleChange(e.target.value)} /> :
                <span className="details__header">Movie Details</span>
            }

            <Link to='/'>
                <img className="home__icon" src={home} height={20} width={20} alt="home" />
            </Link>
        </div>
    )
}

export default Header;