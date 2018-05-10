import React from 'react';
import {connect} from 'react-redux';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';
import requiresLogin from './requires-login';
import {withRouter} from 'react-router-dom';
import ResponsiveMenu from 'react-responsive-navbar';
import Logo3 from './logoneww.png';
import './header-bar.css';


export class HeaderBar extends React.Component {
    logOut() {
        this.props.dispatch(clearAuth());
        clearAuthToken();
    }

    burgerToggle() {
        let linksEl = document.querySelector('.narrowLinks');
        if (linksEl.style.display === 'block') {
            linksEl.style.display = 'none';
        } else {
            linksEl.style.display = 'block';
        }
    }
    render() {
        // Only render the log out button if we are logged in
        let logOutButton, exerciseForm, DisplayWeightBmi, Dashboard, WeightBmiForm; 
        if (this.props.loggedIn) {
            logOutButton = (
                <a className="logout-bttn" href="#" onClick={() => this.logOut()}>Log out</a>
            );
            exerciseForm = ( <a className="exerciseForm-bttn" href="#" onClick={() => {this.props.history.push('/exerciseForm')}}>Add Exercise</a>);
            DisplayWeightBmi = ( <a className="weightBmi-bttn" href="#" onClick={() => {this.props.history.push('/display-weight-bmi')}}>Display Weight & BMI</a>);
            WeightBmiForm = (<a className="weightBmiForm-bttn" href="#" onClick={() => {this.props.history.push('/weight-bmi-form')}}> Add Weight & BMI</a>);
            Dashboard = ( <a className="dashboard-bttn" href="#" onClick={() => {this.props.history.push('/dashboard')}}>Home</a>);
        }
        return (
            <nav>
            <div className="navWide">
            <div className="navWide-title"><img className="logo-image" src={Logo3} height="auto" width="500"/></div>
                <div className="wideDiv">
                {Dashboard}
                 {exerciseForm}
                {DisplayWeightBmi}
                {WeightBmiForm}
                {logOutButton}
                </div>
            </div>
            <div className="navNarrow">
                <i className="fa fa-bars fa-2x" onClick={this.burgerToggle}></i>
                <div className="title"><img className="logo-image-narrow" src={Logo3} height="auto" width="150"/></div>
                <div className="narrowLinks">
                {Dashboard}
                 {exerciseForm}
                {DisplayWeightBmi}
                {WeightBmiForm}
                {logOutButton}
                </div>
            </div>
        </nav>
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