import * as React from "react";
import {RouterComponent} from "./RouterComponent";
import Renderer from "react-test-renderer";

let component: Renderer.ReactTestRenderer = Renderer.create(
    <RouterComponent/>
);

test("render correctly", () => {
    expect(component).toMatchSnapshot();
});