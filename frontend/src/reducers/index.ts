import {
    combineReducers,
    ReducersMapObject,
    Reducer,
} from "redux";
import {routerReducer, RouterState} from "react-router-redux";
import locationReducer, {
    ILocationsState,
} from "../modules/location/reducers";
import navigationReducer, {
    INavigationState
} from "../modules/navigation/reducer";

interface IRouterNameSpace<T> {
    routing: T;
}

interface ILocationsNameSpace<T> {
    locations: T;
}

interface INavigationNameSpace<T> {
    navigation: T;
}

export interface IAppState extends 
IRouterNameSpace<RouterState>,
ILocationsNameSpace<ILocationsState>,
INavigationNameSpace<INavigationState>{}

export interface IReducers extends
IRouterNameSpace<Reducer<RouterState>>,
ILocationsNameSpace<Reducer<ILocationsState>>,
INavigationNameSpace<Reducer<INavigationState>>,
ReducersMapObject {}

const reducers: IReducers = {
    routing: routerReducer,
    locations: locationReducer,
    navigation: navigationReducer,
};

export default combineReducers(reducers);