import React, { Component } from 'react';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';


import Home from '../pages/home/home';
import About from '../pages/about/about';
import Other from '../pages/other/other';
import UserInfo from '../pages/userinfo/userinfo';
import Error from '../pages/error/error';

class RouterConfig extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/other" component={Other} />
                    <Route path="/userinfo/:userid" component={UserInfo} />
                    <Route path="/error" component={Error} />
                    <Redirect to="/error" />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default RouterConfig;