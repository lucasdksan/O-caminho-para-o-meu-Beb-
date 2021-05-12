import React from 'react';
import Home from './pages/Home';
import States from './pages/States';
import Forum from './pages/Forum';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

const Routes = ()=>{
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' component={Home} exact/>
                <Route path='/states' component={States}/>
                <Route path='/forum' component={Forum}/>
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;