import React from 'react';
import App from './App'
import Login from './Login'
import { BrowserRouter, Route, Switch} from 'react-router-dom';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App}/>
            <Route  path="/login" component={Login}/>
        </Switch>
    </BrowserRouter>
);
export default Router;
