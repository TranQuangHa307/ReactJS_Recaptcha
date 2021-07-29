import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import SignUp from '../Components/SignUp';
import Login from '../Components/Login';


class DieuHuongURL extends Component {
    render() {
        return (
            <div>
                <Route path="/signUp" component={SignUp} />
                <Route path="/login" component={Login} />
                <Redirect exact from="/" to="/login" />
            </div>
        );
    }
}

export default DieuHuongURL;