import React from 'react';
import {connect} from 'react-redux';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';
import requiresLogin from './requires-login';
import {withRouter} from 'react-router-dom';
import logo from './logo.png';
import './header-bar.css';
import { ExerciseForm } from './exercise-form';

export class HeaderBar extends React.Component {
    logOut() {
        this.props.dispatch(clearAuth());
        clearAuthToken();
    }

    render() {
        // Only render the log out button if we are logged in
        let logOutButton, exerciseForm, DisplayWeightBmi, Dashboard; 
        if (this.props.loggedIn) {
            logOutButton = (
                <a className="logout-bttn" onClick={() => this.logOut()}>Log out</a>
            );
            exerciseForm = ( <a className="exerciseForm-bttn" onClick={() => {this.props.history.push('/exerciseForm')}}>Add Exercise</a>);
            DisplayWeightBmi = ( <a className="weightBmi-bttn" onClick={() => {this.props.history.push('/display-weight-bmi')}}>Weigh/BMI</a>);
            Dashboard = ( <a className="dashboard-bttn" onClick={() => {this.props.history.push('/dashboard')}}>Home</a>);
        }
        return (
            <div className="header-bar">
                <h1 className="title">FitLife</h1>
                <div className="bttn-container">
                {Dashboard}
                {exerciseForm}
                {DisplayWeightBmi}
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
        username: state.auth.currentUser.username,
        name: `${currentUser.firstName} ${currentUser.lastName}`,
        id: `${currentUser.id}`
    };
   
};

export default requiresLogin()(connect(mapStateToProps)(withRouter(HeaderBar)));
