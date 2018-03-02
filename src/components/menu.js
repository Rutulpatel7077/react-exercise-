import {Link} from 'react-router-dom';
import React, {Component} from 'react';
import {connect} from 'react-redux';

class Menu extends React.Component {

    render() {
        const isLoggedIn = this.props.login.isLoggedIn;

        return (<div>

            <nav className="main-menu">

                <li>
                    <Link to="/">
                        HOME
                    </Link>
                </li>
                <li>
                    <Link to="/login">
                        LOGIN
                    </Link>
                </li>

            </nav>

        </div>)
    }
}

const mapStateToProps = (state) => {
    return {login: state.login}
}

export default connect(mapStateToProps)(Menu);
