import { put, call, all, takeLatest } from 'redux-saga/effects';
import { CONFIG } from '../../config';
import Axios from 'axios';
import { GET_TRENDING_MOVIES, SEARCH_TRENDING_MOVIES, SET_PAGE_TOTAL, SET_TRENDING_MOVIES, SET_TRENDING_MOVIES_ERROR, SET_TRENDING_MOVIES_LOADER } from './MainListPage.actions';
import moment from 'moment';


export function* getTrendingMovies(action:any): any {
    try {
        yield put({ type: SET_TRENDING_MOVIES_LOADER, value: true });
        const url = `${CONFIG.BASE_URL}/trending/movie/day?api_key=${CONFIG.API_KEY}&page=${action.value}`;
        const response = yield call(Axios.get, url);
        const sortedByDateData = response.data.results.sort(function (a:any, b:any) {
            let dateA = moment(a.release_date);
            let dateB = moment(b.release_date);
            return dateB > dateA ? 1 : -1;
        });
       
        yield put({ type: SET_TRENDING_MOVIES, value: sortedByDateData });
        yield put({ type:SET_PAGE_TOTAL,value:Math.floor(response.data.total_pages/2)});
        yield put({ type: SET_TRENDING_MOVIES_LOADER, value: false });
        yield put({ type: SET_TRENDING_MOVIES_ERROR, value: false });
    } catch (errors) {
        yield put({ type: SET_TRENDING_MOVIES_ERROR, value: true });
    }
}

export function* searchTrendingMovies(action:any): any {
    try {
        const url = `${CONFIG.BASE_URL}/search/movie?query=${action.payload.query}&include_adult=false&language=en-US&api_key=${CONFIG.API_KEY}&page=${action.payload.page}`;
        const response = yield call(Axios.get, url);
        const sortedByDateData = response.data.results.sort(function (a:any, b:any) {
            let dateA = moment(a.release_date);
            let dateB = moment(b.release_date);
            return dateB > dateA ? 1 : -1;
        });
       
        yield put({ type: SET_TRENDING_MOVIES, value: sortedByDateData });
        yield put({ type:SET_PAGE_TOTAL,value:Math.floor(response.data.total_pages/2)});
        yield put({ type: SET_TRENDING_MOVIES_ERROR, value: false });
    } catch (errors) {
        yield put({ type: SET_TRENDING_MOVIES_ERROR, value: true });
    }
}

export default function* sagas() {
    yield all([
        takeLatest(GET_TRENDING_MOVIES, getTrendingMovies),
        takeLatest(SEARCH_TRENDING_MOVIES,searchTrendingMovies)
    ])
}