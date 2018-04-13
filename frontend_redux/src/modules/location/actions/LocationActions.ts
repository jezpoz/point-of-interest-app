import {Action} from "redux";
import * as LocationActionTypes from "./LocationActionTypes";

export interface IFetchLocationsAction extends Action {}

export interface IFetchLocationsActionFulfilled extends Action {
    locations: any[];
}

export interface IFetchLocationsActionRejected extends Action {
    error: Error;
}

export interface IAddLocationAction extends Action {
    location: any;
}

export interface IAddLocationActionFulfilled extends Action {}

export interface IAddLocationActionRejected extends Action {
    error: Error;
}

export interface IDeleteLocationByIdAction extends Action {
    locationId: string;
}

export interface IDeleteLocationByIdActionFulfilled extends Action {}

export interface IDeleteLocationByIdActionRejected extends Action {
    error: Error;
}

export function fetchLocations(): IFetchLocationsAction {
    return {
        type: LocationActionTypes.FETCH_LOCATIONS
    };
}

export function fetchLocationsFulfilled(locations: any[]): IFetchLocationsActionFulfilled {
    return {
        type: LocationActionTypes.FETCH_LOCATIONS_FULFILLED,
        locations
    };
}

export function fetchLocationsRejected(error: Error): IFetchLocationsActionRejected {
    return {
        type: LocationActionTypes.FETCH_LOCATIONS_REJECTED,
        error,
    };
}
