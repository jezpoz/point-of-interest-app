import * as React from "react";
import {LocationComponent} from "./LocationComponent";
import Renderer from "react-test-renderer";

test("renders", () => {
    const component: Renderer.ReactTestRenderer = Renderer.create(
        <LocationComponent/>,
    );
    expect(component).toMatchSnapshot();
});
