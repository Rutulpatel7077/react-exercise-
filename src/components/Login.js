import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {valueFromUserName} from '../actions/login';
import {valueFromPassword} from '../actions/login';
import  Dashboard from './dashboard';
import { BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom';
import {history } from 'react';


class Login extends Component {
    constructor(props) {
        super(props);

        this.pass = this.pass.bind(this);


    };

    pass(e) {

        if (this.props.login.inputUsername == this.props.login.fixedUsername && this.props.login.fixedPassword == this.props.login.inputPassword) {
            this.props.isLoggedIn();
            this.props.history.push("/dashboard");
        }

    }

    render() {
        return (<div>
            <div className="login-card">
                <h1>Log-in</h1>
                <div >
                    <input type="text" name="username" placeholder="default username admin" onChange={(e) => this.props.valueFromUserName(e.target.value)}></input>
                    <input type="password" name="password" placeholder="default password admin" onChange={(e) => this.props.valueFromPassword(e.target.value)}></input>
                    <button onClick={this.pass} className="login login-submit">Submit</button>
                </div>
            </div>
        </div>);
    }

}

const mapStateToProps = (state) => {
    return {login: state.login}
    localStorage.setItem('state', 'something')
}

const matchDispatchToProps = (dispatch) => {

    return {
        valueFromUserName: (value) => dispatch({type: 'USER_NAME_INSERT', inputUsername: value}),
        valueFromPassword: (value) => dispatch({type: 'PASSWORD_INSERT', inputPassword: value}),
        isLoggedIn: () => dispatch({type: 'IS_LOGGED_IN', isLoggedIn: true})
    }
}

export default connect(mapStateToProps, matchDispatchToProps)(Login);
