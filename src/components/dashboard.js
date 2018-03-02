import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Redirect } from 'react-router';
import Login from './Login';
import { withRouter } from "react-router-dom";
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }
    logout(){
        this.props.isLogout();
        console.log(this.props.login.isLoggedIn);
        if(!this.props.login.isLoggedIn){
            this.props.history.push("/");
        }
    }

    render() {
        console.log(this.props.login.isLoggedIn);
        if (this.props.login.isLoggedIn) {
            return (<div>

                <h1 className="login-card">
                    You are at Dashboard Mr.{this.props.login.inputUsername}</h1><br />
                <button  onClick={this.logout} className="login login-submit" > Logout </button>


            </div>)

        }else {
             return <Redirect push to="/login"/>

        }
    }
}

const mapStateToProps = (state) => {
    return {login: state.login}
}

const matchDispatchToProps = (dispatch) => {

    return {

        isLogout:() => dispatch({type: 'IS_LOGGED_OUT', isLoggedIn: false})
    }
}

export default connect(mapStateToProps, matchDispatchToProps)(Dashboard);
