import {Reducer, Action} from "redux";
import update from "immutability-helper";
import * as NavigationActionTypes from "../actions/NavigationActionTypes";
import * as NavigationActions from "../actions/NavigationActions";

export interface INavigationState {
    navigatedTo: string;
}

const initialState: INavigationState = {
    navigatedTo: null,
};

const navigationReducer: Reducer<INavigationState> = (
    state: INavigationState = initialState,
    action?: Action,
): INavigationState => {
    if (!action) {
        return state;
    }

    switch (action.type) {
        case NavigationActionTypes.NAVIGATE_TO: {
            const {path} = action as NavigationActions.INavigateToAction
            return update(state, {
                navigatedTo: {
                    $set: path,
                },
            });
        }
        default: {
            return state;
        }
    }
}

export default navigationReducer;