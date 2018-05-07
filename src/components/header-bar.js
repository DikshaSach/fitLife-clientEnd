import React from 'react';
import {connect} from 'react-redux';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';
import requiresLogin from './requires-login';
import {withRouter} from 'react-router-dom';

import './header-bar.css';


export class HeaderBar extends React.Component {
    logOut() {
        this.props.dispatch(clearAuth());
        clearAuthToken();
        this.props.history.push('/');
    }

    render() {
        // Only render the log out button if we are logged in
        let logOutButton, exerciseForm, DisplayWeightBmi, Dashboard, WeightBmiForm; 
        if (this.props.loggedIn) {
            logOutButton = (
                <a className="logout-bttn" href="#" onClick={() => this.logOut()}>Log out</a>
            );
            exerciseForm = ( <a className="exerciseForm-bttn" onClick={() => {this.props.history.push('/exerciseForm')}}>Add Exercise</a>);
            DisplayWeightBmi = ( <a className="weightBmi-bttn" onClick={() => {this.props.history.push('/display-weight-bmi')}}>Weight/BMI</a>);
            WeightBmiForm = (<a className="weightBmiForm-bttn" onClick={() => {this.props.history.push('/weight-bmi-form')}}> Add Weight/BMI</a>);
            Dashboard = ( <a className="dashboard-bttn" onClick={() => {this.props.history.push('/dashboard')}}>Home</a>);
        }
        return (
            <div className="header-bar">
                <h1 className="title">FitLife</h1>
                <div className="bttn-container">
                {Dashboard}
                {exerciseForm}
                {DisplayWeightBmi}
                {WeightBmiForm}
                {logOutButton}
                </div>
                <div className="test" ></div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const {currentUser} = state.auth;
    return {
        loggedIn: state.auth.currentUser !== null,
        name: `${currentUser.firstName} ${currentUser.lastName}`,
        id: `${currentUser.id}`
    };
   
};

export default requiresLogin()(connect(mapStateToProps)(withRouter(HeaderBar)));
