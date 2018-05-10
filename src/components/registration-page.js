import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import Logo3 from './logoneww.png';
import RegistrationForm from './registration-form';
import './registration-page.css';
import exercise from './exercise.png';
import hydration from './hydration.png';
import food from './food.png';
import weight from './weight.png';
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
        <div className="testingthis">
        <div className="keys-to-success">
            <h1>Track and log your workouts ,
             water-intake and other activity to make sure you make the best of today</h1>
        </div>
        <div className="container-for-info-divs">
        <div className="first-container">
        <img className="food" src={food} height="auto" width="100"/>
        <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen 
        book. It has survived not only five centuries, but also the leap into electronic 
        typesetting, remaining essentially unchanged.</p> </div>
        <div className="second-container">
        <img className="hydration" src={hydration} height="auto" width="100"/>
        <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen 
        book. It has survived not only five centuries, but also the leap into electronic 
        typesetting, remaining essentially unchanged.</p> </div> 
        <div className="third-container">
        <img className="exercise" src={exercise} height="auto" width="90"/>
        <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen 
        book. It has survived not only five centuries, but also the leap into electronic 
        typesetting, remaining essentially unchanged.</p></div>
        
        <div className="fourth-container">
        <img className="weight" src={weight} height="auto" width="100"/>
        <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen 
        book. It has survived not only five centuries, but also the leap into electronic 
        typesetting, remaining essentially unchanged.</p> 
        </div>
        <br />
        </div>
        </div>


        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(RegistrationPage);
