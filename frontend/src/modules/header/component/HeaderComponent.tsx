import * as React from 'react';
import {Link} from 'react-router-dom';

export const HeaderComponent: React.StatelessComponent = () => (
    <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
    </nav>
)