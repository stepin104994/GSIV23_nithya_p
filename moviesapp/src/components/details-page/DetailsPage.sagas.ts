import { put, call, all, takeLatest } from 'redux-saga/effects';
import { CONFIG } from '../../config';
import Axios from 'axios';
import { GET_MOVIE_DETAILS, SET_MOVIE_DETAILS, SET_MOVIE_DETAILS_ERROR, SET_MOVIE_DETAILS_LOADER } from './DetailsPage.actions';

export function* getMovieDetails(action:any): any {
    try {
        yield put({ type: SET_MOVIE_DETAILS_LOADER, value: true });
        const url = `${CONFIG.BASE_URL}/movie/${action.value}?api_key=${CONFIG.API_KEY}`;
        const response = yield call(Axios.get, url); 
        console.log("response",response.data)
        yield put({ type: SET_MOVIE_DETAILS, value: response.data });
        yield put({ type: SET_MOVIE_DETAILS_LOADER, value: false });
        yield put({ type: SET_MOVIE_DETAILS_ERROR, value: false });
    } catch (errors) {
        yield put({ type: SET_MOVIE_DETAILS_ERROR, value: true });
    }
}

export default function* sagas() {
    yield all([
        takeLatest(GET_MOVIE_DETAILS, getMovieDetails),
    ])
}