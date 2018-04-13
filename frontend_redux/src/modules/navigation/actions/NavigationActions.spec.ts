import * as NavigationActions from "./NavigationActions";
import * as NavigationActionTypes from "./NavigationActionTypes";

describe("navigation actions", () => {
    test("navigateTo", () => {
        const testPath: string = "/test";
        const actual: NavigationActions.INavigateToAction = NavigationActions.navigateTo(testPath);
        const expected: NavigationActions.INavigateToAction = {
            type: NavigationActionTypes.NAVIGATE_TO,
            path: testPath,
        }
        expect(actual).toEqual(expected);
    });

    test("goBack", () => {
        const actual: NavigationActions.IGoBackAction = NavigationActions.goBack();
        const expected: NavigationActions.IGoBackAction = {
            type: NavigationActionTypes.GO_BACK,
        };
        expect(actual).toEqual(expected);
    });

    test("goForward", () => {
        const actual: NavigationActions.IGoForwardAction = NavigationActions.goForward();
        const expected: NavigationActions.IGoForwardAction = {
            type: NavigationActionTypes.GO_FORWARD,
        };
        expect(actual).toEqual(expected);
    });
});