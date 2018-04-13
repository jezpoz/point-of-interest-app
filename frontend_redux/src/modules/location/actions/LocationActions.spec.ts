import * as LocationActions from "./LocationActions";
import * as LocationActionTypes from "./LocationActionTypes";
import { SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION } from "constants";

describe("location actions", () => {
    test("fetchLocations", () => {
        const actual: LocationActions.IFetchLocationsAction = LocationActions.fetchLocations();
        const expected: LocationActions.IFetchLocationsAction = {
            type: LocationActionTypes.FETCH_LOCATIONS,
        };
        expect(actual).toEqual(expected);
    });

    test("fetchLocationsFulfilled", () => {
        const actual: LocationActions.IFetchLocationsActionFulfilled = LocationActions.fetchLocationsFulfilled([]);
        const expected: LocationActions.IFetchLocationsActionFulfilled = {
            type: LocationActionTypes.FETCH_LOCATIONS_FULFILLED,
            locations: [],
        };
        expect(actual).toEqual(expected);
    });

    test("fetchLocationsRejected", () => {
        const testError: Error = new Error("Test error");
        const actual: LocationActions.IFetchLocationsActionRejected = LocationActions.fetchLocationsRejected(testError);
        const expected: LocationActions.IFetchLocationsActionRejected = {
            type: LocationActionTypes.FETCH_LOCATIONS_REJECTED,
            error: testError,
        };
        expect(actual).toEqual(expected);
    });
});