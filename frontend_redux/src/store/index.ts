import {
    Store,
    createStore,
    applyMiddleware,
    compose,
    Middleware,
} from "redux";
import createSagaMiddleware, {
    SagaMiddleware
} from "redux-saga";
import {IAppState} from "../config";
import reducers from "../reducers";
import createHistory from "history/createBrowserHistory";
import {History} from "history";
import {routerMiddleware} from "react-router-redux";

export const history: History = createHistory();
export const sagaMiddleware: SagaMiddleware<any> = createSagaMiddleware();
export const store: Store<IAppState> = configureStore();

function configureStore(initialState?: any): Store<IAppState> {
    const middlewares: Middleware[] = [
        sagaMiddleware,
        routerMiddleware(history),
    ];

    if(process.env.NODE_ENV === "development") {
        const {logger} = require("redux-logger");
        middlewares.push(logger);
    }

    const enhancer: any = compose(
        applyMiddleware(...middlewares),
    );

    const store: Store<IAppState> = createStore(reducers, initialState, enhancer);

    return store;
}