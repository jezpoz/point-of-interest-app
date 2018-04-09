import * as React from "react";
import {NavLink} from "react-router-dom";

export const NavBarComponent: React.StatelessComponent = () => (
    <section className={"hero"}>
        <div className={"hero-body"}>
            <div className={"container"}>
                <h1 className={"title"}>
                    Point of interest
                </h1>
                <nav className={"level-left"}>
                    <div className={"level-item has-text-centered"}>
                        <NavLink id={"link-to-home"} to={"/"}>
                            <p className={"subtitle link is-info"}>
                                Home
                            </p>
                        </NavLink>
                    </div>
                    <div className={"level-item has-text-centered"}>
                        <NavLink id={"link-to-about"}to={"/about"}>
                            <p className={"subtitle link is-info"}>
                                About
                            </p>
                        </NavLink>
                    </div>
                </nav>
            </div>
        </div>
    </section>
);
