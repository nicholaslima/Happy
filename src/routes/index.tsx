

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/home';
import Register from '../pages/register';
import Mapa from '../pages/mapa';
import Orfanato from '../pages/orfanato';

const Routes:React.FC = () => {
    return(
        <Switch>
            <Route path="/" exact component= { Home } />
            <Route path="/mapa"  component= { Mapa } />
            <Route path="/register"  component= { Register } />
            <Route path="/orfanato"  component= { Orfanato } />
        </Switch>
    )
}

export default Routes;