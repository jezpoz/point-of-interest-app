import * as React from "react";
import {AboutComponent} from "./AboutComponent";
import Renderer from "react-test-renderer";

test("render correctly within a router", () => {
    let component: Renderer.ReactTestRenderer = Renderer.create(
        <AboutComponent/>
    );
    expect(component).toMatchSnapshot();
});