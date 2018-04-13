import {fork} from "redux-saga/effects";
import {
    watchFetchLocationsSaga,
} from "./LocationSagas";

export default function * () {
    yield fork(watchFetchLocationsSaga);
}