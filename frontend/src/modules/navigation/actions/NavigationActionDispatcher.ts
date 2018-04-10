import {ActionCreatorsMapObject, bindActionCreators} from "redux";
import {store} from "../../../store";
import * as NavigationActions from "./NavigationActions";

export interface INavigationActionDispatchers extends ActionCreatorsMapObject {
    navigateTo: (path: string) => NavigationActions.INavigateToAction,
    goBack: () => NavigationActions.IGoBackAction,
    goForward: () => NavigationActions.IGoForwardAction,
};

const actions: INavigationActionDispatchers = {
    navigateTo: NavigationActions.navigateTo,
    goBack: NavigationActions.goBack,
    goForward: NavigationActions.goForward,
};

const NavigationActionDispatchers: INavigationActionDispatchers = bindActionCreators<INavigationActionDispatchers>(actions, store.dispatch);
export default NavigationActionDispatchers;