import * as React from "react";
import {
    BrowserRouter,
    Route,
    Switch,
} from "react-router-dom";

import {HomeComponent} from "../modules/home/component/HomeComponent";
import {AboutComponent} from "../modules/about/component/AboutComponent";
import {NavBarComponent} from "../modules/navbar/component/NavBarComponent";

export const RouterComponent: React.StatelessComponent = () => (
    <BrowserRouter>
        <section className={"section"}>
            <NavBarComponent/>
            <section className={"hero"}>
                <div className={"hero-body"}>
                    <Route path={"/"} exact={true} component={HomeComponent}/>
                    <Route path={"/about"} exact={true} component={AboutComponent}/>
                </div>
            </section>
        </section>
    </BrowserRouter>
);
