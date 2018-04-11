import * as React from "react";
import {LocationComponent} from "./LocationComponent";
import enzyme from "../../../setupTests";

describe("Location component", () => {
    const wrapper: enzyme.ShallowWrapper = enzyme.shallow(
        <LocationComponent/>
    );

    test("render the app", () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should render 4 buttons', () => {
        expect(wrapper.find("button").length).toBe(4);
    });
});
