import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import MainPage from './pages/main';
import Curriculo from './pages/curriculo';

const Routes = () => { 
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={MainPage} />
                <Route path='/curriculo' exact component={Curriculo} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
