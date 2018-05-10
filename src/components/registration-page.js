import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import Logo3 from './logoneww.png';
import RegistrationForm from './registration-form';
import './registration-page.css';
import HomepageInfo from './homepage-info';
export function RegistrationPage(props) {
    // If we are logged in (which happens automatically when registration
    // is successful) redirect to the user's dashboard
    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }
    return (
        <div ClasName="homepage-container">
        <div className="home">
        <img className="logo-image-homepage" src={Logo3} height="auto" width="500"/>
        <div className="registration-form-container ">
            <RegistrationForm />
            </div>
        </div>
        <HomepageInfo />


        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(RegistrationPage);
