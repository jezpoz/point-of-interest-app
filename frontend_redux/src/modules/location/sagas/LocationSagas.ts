import {call, takeEvery} from "redux-saga/effects";
import {SagaIterator} from "redux-saga";

import LocationActionDispatcher from "../actions/LocationActionDispatcher";
import * as LocationActionTypes from "../actions/LocationActionTypes";

export function * fetchLocationsSaga(): SagaIterator {
    try {
        yield call(LocationActionDispatcher.fetchLocationsFulfilled, []);
    } catch (err) {
        yield call(LocationActionDispatcher.fetchLocationsRejected, err);
    }
}

export function * watchFetchLocationsSaga(): SagaIterator {
    yield takeEvery(
        LocationActionTypes.FETCH_LOCATIONS,
        fetchLocationsSaga,
    );
}