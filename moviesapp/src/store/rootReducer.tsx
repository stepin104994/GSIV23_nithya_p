import { combineReducers } from "redux";
import moviesListReducer from "../components/list-page/MainListPage.reducer";
import movieDetailsReducer from "../components/details-page/DetailsPage.reducer";

const rootReducer = combineReducers({
    moviesListReducer,
    movieDetailsReducer
});

export default rootReducer;