import {fork} from "redux-saga/effects";
import {Task} from "redux-saga";
import {sagaMiddleware} from "../store";

import locationSagas from "../modules/location/sagas";
import navigationSagas from "../modules/navigation/sagas";

function * root() {
    yield fork(locationSagas);
    yield fork(navigationSagas);
}

export const run: () => Task = () => sagaMiddleware.run(root);