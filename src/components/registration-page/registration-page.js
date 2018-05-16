import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Logo3 from "../../images/logo.png";
import RegistrationForm from "../registration-form/registration-form";
import "./registration-page.css";
import HomepageInfo from "../homepage-info/homepage-info";
export function RegistrationPage(props) {
  // If we are logged in (which happens automatically when registration
  // is successful) redirect to the user's dashboard
  if (props.loggedIn) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <div className="homepage-container">
      <div className="home">
        <img
          className="logo-image-homepage"
          src={Logo3}
          alt="logo"
          height="auto"
          width="500"
        />
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
