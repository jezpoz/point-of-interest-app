import * as React from "react";
import {HomeComponent} from "./HomeComponent";
import Renderer from "react-test-renderer";

test("renders", () => {
    const component: Renderer.ReactTestRenderer = Renderer.create(
        <HomeComponent/>,
    );
    expect(component).toMatchSnapshot();
});
