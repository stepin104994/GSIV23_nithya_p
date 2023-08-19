import { fork } from "redux-saga/effects";
import trendingMoviesSaga from "../components/list-page/MainListPage.sagas";
import movieDetailsSaga from "../components/details-page/DetailsPage.sagas";

export default function* rootSaga() {
  yield* [
    fork(trendingMoviesSaga),
    fork(movieDetailsSaga)
  ]
}
