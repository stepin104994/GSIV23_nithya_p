import { SET_ACTIVE_PAGE, SET_PAGE_TOTAL,  SET_SEARCH_VALUE, SET_TRENDING_MOVIES, SET_TRENDING_MOVIES_ERROR, SET_TRENDING_MOVIES_LOADER } from "./MainListPage.actions"

export const initialState = {
    moviesList: [{}],
    totalPages: 1,
    activePage: 1,
    loader: false,
    error: false,
    searchValue:''
}

export default (state = initialState, action: any) => {
    switch (action.type) {
        case SET_TRENDING_MOVIES:
            return { ...state, moviesList: action.value }
        case SET_TRENDING_MOVIES_LOADER:
            return { ...state, loader: action.value }
        case SET_TRENDING_MOVIES_ERROR:
            return { ...state, error: action.value }
        case SET_PAGE_TOTAL:
            return { ...state, totalPages: action.value }
        case SET_ACTIVE_PAGE:
            return { ...state, activePage: action.value }
        case SET_SEARCH_VALUE:
            return { ...state,searchValue:action.value }
        default: return state;
    }
}


