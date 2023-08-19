import { SET_MOVIE_DETAILS, SET_MOVIE_DETAILS_ERROR, SET_MOVIE_DETAILS_LOADER } from "./DetailsPage.actions"


export const initialState = {
    movieDetails: {},
    loader: false,
    error: false,
}

export default (state = initialState, action: any) => {
    switch (action.type) {
        case SET_MOVIE_DETAILS:
            return { ...state, movieDetails: action.value }
        case SET_MOVIE_DETAILS_LOADER:
            return { ...state, loader: action.value }
        case SET_MOVIE_DETAILS_ERROR:
            return { ...state, error: action.value }       
        default: return state;
    }
}


