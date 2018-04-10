import {take, call, takeLatest} from "redux-saga/effects";
import {SagaIterator} from "redux-saga";

import NavigationActionDispatcher from "../actions/NavigationActionDispatcher";
import * as NavigationActionTypes from "../actions/NavigationActionTypes";
import * as NavigationActions from "../actions/NavigationActions";

export function * navigateToSaga(): SagaIterator {
    try {
        console.log("Sir..?");
    } catch (err) {
        console.error("WAT TEH FUCK");
    }
}

export function * goBackSaga(): SagaIterator {
    try {
        console.log("Sir, you need to step back");
    } catch (err) {
        console.error("WAT TEH FUCK");
    }
}

export function * goForwardSaga(): SagaIterator {
    try {
        console.log("Sir, you're granted access, please proceeed");
    } catch (err) {
        console.error("WAT TEH FUCK");
    }
}


export function * watchNavigateToSaga(): SagaIterator {
    yield takeLatest(
        NavigationActionTypes.NAVIGATE_TO,
        navigateToSaga,
    )
}

export function * watchGoBackSaga(): SagaIterator {
    yield takeLatest(
        NavigationActionTypes.GO_BACK,
        goBackSaga,
    )
}

export function * watchGoForwardSaga(): SagaIterator {
    yield takeLatest(
        NavigationActionTypes.GO_FORWARD,
        goForwardSaga,
    );
}