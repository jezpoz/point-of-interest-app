import * as React from "react";
import {AboutComponent} from "./AboutComponent";
import Renderer from "react-test-renderer";
import enzyme from "../../../setupTests";

describe("About component", () => {
    const wrapper: enzyme.ShallowWrapper = enzyme.shallow(
        <AboutComponent/>
    )

    test("render the component", () => {
        expect(wrapper).toMatchSnapshot();
    });

});