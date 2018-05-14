import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import './landing-page.css';
import Logo3 from './logoneww.png';
import LoginForm from './login-form';
import {withRouter} from 'react-router-dom';


import HomepageInfo from './homepage-info';


export function LandingPage(props) {
    // If we are logged in redirect straight to the user's dashboard
    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    } 

    return (
        <div className="homepage-container">
        <div className="home">
        <img className="logo-image-homepage" src={Logo3}/>
        <div className="login-form-container">
        <LoginForm /> 
        </div>
        </div>
        <HomepageInfo />
                </div>
    );
}


const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(withRouter(LandingPage));
