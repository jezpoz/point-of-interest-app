import {Action} from "redux";
import * as NavigationActionTypes from "./NavigationActionTypes";

export interface INavigateToAction extends Action {
    path: string;
}
export interface IGoBackAction extends Action {}
export interface IGoForwardAction extends Action {}

export function navigateTo(path: string): INavigateToAction {
    return {
        type: NavigationActionTypes.NAVIGATE_TO,
        path,
    };
}

export function goBack(): IGoBackAction {
    return {
        type: NavigationActionTypes.GO_BACK,
    };
}

export function goForward(): IGoForwardAction {
    return {
        type: NavigationActionTypes.GO_FORWARD,
    };
}