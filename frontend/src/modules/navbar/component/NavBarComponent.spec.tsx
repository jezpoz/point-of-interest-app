import * as React from "react";
import {NavBarComponent} from "./NavBarComponent";
import Renderer from "react-test-renderer";
import {MemoryRouter} from 'react-router-dom';

let component: Renderer.ReactTestRenderer = Renderer.create(
    <MemoryRouter>
        <NavBarComponent/>
    </MemoryRouter>
);

test("render correctly", () => {
    expect(component).toMatchSnapshot();
});
