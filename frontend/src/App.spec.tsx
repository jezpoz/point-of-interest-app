import * as React from "react";
import {App} from "./App";
import Renderer from "react-test-renderer";
import enzyme from "./setupTests";

describe("App component", () => {
    const wrapper: enzyme.ShallowWrapper = enzyme.shallow(
        <App/>
    );

    test("render the component", () => {
        expect(wrapper).toMatchSnapshot();
    });
});

