import * as React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import {HomeComponent} from './modules/home/component/HomeComponent';
import {AboutComponent} from './modules/about/component/AboutComponent';
import {HeaderComponent} from './modules/header/component/HeaderComponent';

export const App = () => (
    <BrowserRouter>
        <Switch>
            <Route path={"/"} exact component={HomeComponent}/>
            <Route path={"/about"} exact component={AboutComponent}/>
            <Route render={() => <div>404</div>}/>
        </Switch>
    </BrowserRouter>
);
