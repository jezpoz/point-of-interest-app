import * as React from "react";
import {App} from "./App";
import Renderer from "react-test-renderer";
import {MemoryRouter} from 'react-router-dom';
import {mount, configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({
    adapter: new Adapter(),
});

let component: Renderer.ReactTestRenderer = Renderer.create(
    <MemoryRouter initialEntries={["/"]} initialIndex={0}>
        <App/>
    </MemoryRouter>
);

test("should render correctly", () => {
    expect(component).toMatchSnapshot();
});

test("should render the router and navbar", () => {
    const wrapper = mount(
        <MemoryRouter initialEntries={["/"]} initialIndex={0}>
            <App/>
        </MemoryRouter>
    );
});

