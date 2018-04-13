import {fork} from "redux-saga/effects";
import {
    watchNavigateToSaga,
    watchGoBackSaga,
    watchGoForwardSaga,
} from "./NavigationSagas";

export default function * () {
    yield fork(watchNavigateToSaga);
    yield fork(watchGoBackSaga);
    yield fork(watchGoForwardSaga);
}