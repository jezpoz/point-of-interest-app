import * as React from "react";
import {Provider} from "react-redux";
import * as rootSaga from "./sagas";
import {store, history} from "./store";
import {Route} from "react-router";
import {ConnectedRouter} from "react-router-redux";

import {LocationComponent} from "./modules/location/component/LocationComponent";
import {AboutComponent} from "./modules/about/component/AboutComponent";

export interface IAppProps {}

export interface IAppState {}

export class App extends React.Component<IAppProps, IAppState> {
    constructor(_props: IAppProps, _state: IAppState) {
        super(_props, _state);
        rootSaga.run();
    }

    render() {
        return (
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <div id={"root-router"}>
                        <Route path={"/"} exact={true} component={LocationComponent}/>
                        <Route path={"/about"} exact={true} component={AboutComponent}/>
                    </div>
                </ConnectedRouter>
            </Provider>
        );
    }
}