import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import {oh} from './components/oh404';

import  Dashboard from './components/dashboard';
import {LandingPage} from './components/landingPage';
import Menu from './components/menu';
import Login from './components/Login';
import { OnUpdate } from 'rrc'




export  class App extends React.Component {

    render() {
        
    return(
        <Router>
            <div>
            <OnUpdate
         call={(location) => {
         console.log("Url is changed")
  }} />
                <Menu/>
                <Switch>
                    <Route exact path="/" component={LandingPage}/>
                    <Route exact path="/login" component={Login}/><Route exact path="/dashboard" component={Dashboard}/>
                    <Route component={oh}/>
                </Switch>
            </div>
        </Router>
    )
    }

}
