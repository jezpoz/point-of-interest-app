import {ActionCreatorsMapObject, bindActionCreators} from "redux";
import {store} from "../../../store";
import * as LocationActions from "./LocationActions";

export interface ILocationActionDispatchers extends ActionCreatorsMapObject {
    fetchLocations: () => LocationActions.IFetchLocationsAction,
    fetchLocationsFulfilled: (locations: any[]) => LocationActions.IFetchLocationsActionFulfilled,
    fetchLocationsRejected: (error: Error) => LocationActions.IFetchLocationsActionRejected,
}

const actions: ILocationActionDispatchers = {
    fetchLocations: LocationActions.fetchLocations,
    fetchLocationsFulfilled: LocationActions.fetchLocationsFulfilled,
    fetchLocationsRejected: LocationActions.fetchLocationsRejected,
}

const LocationActionDispatchers: ILocationActionDispatchers = bindActionCreators<ILocationActionDispatchers>(actions, store.dispatch);
export default LocationActionDispatchers;