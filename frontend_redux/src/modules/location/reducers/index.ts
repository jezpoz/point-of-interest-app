import {Reducer, Action} from "redux";
import update from "immutability-helper";
import * as LocationActionTypes from "../actions/LocationActionTypes";
import * as LocationActions from "../actions/LocationActions";

export interface ILocationsState {
    locations: any[];
    fetching: boolean;
    fetched: boolean;
    error: Error;
    creatingLocation: boolean;
}

const initialState: ILocationsState = {
    locations: null,
    fetching: false,
    fetched: false,
    error: null,
    creatingLocation: false,
}

const locationsReducer: Reducer<ILocationsState> = (
    state: ILocationsState = initialState,
    action?: Action,
): ILocationsState => {
    if (!action) {
        return state;
    }

    switch (action.type) {
        case LocationActionTypes.FETCH_LOCATIONS : {
            return update(state, {
                fetching: {
                    $set: true,
                },
                fetched: {
                    $set: false,
                },
                error: {
                    $set: null,
                },
            });
        }
        case LocationActionTypes.FETCH_LOCATIONS_FULFILLED : {
            const {locations} = action as LocationActions.IFetchLocationsActionFulfilled;
            return update(state, {
                fetching: {
                    $set: false,
                },
                fetched: {
                    $set: true,
                },
                locations: {
                    $set: locations,
                },
            });
        }
        case LocationActionTypes.FETCH_LOCATIONS_REJECTED : {
            const {error} = action as LocationActions.IFetchLocationsActionRejected;
            return update(state, {
                fetching: {
                    $set: false,
                },
                fetched: {
                    $set: false,
                },
                locations: {
                    $set: [],
                },
                error: {
                    $set: error,
                },
            });
        }
        default: {
            return state;
        }
    }
}

export default locationsReducer;