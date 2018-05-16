import React from "react";
import { connect } from "react-redux";
import { clearAuth } from "../../actions/auth";
import { clearAuthToken } from "../../local-storage";
import requiresLogin from "../requires-login";
import { withRouter } from "react-router-dom";
import Logo3 from "../../images/logo.png";
import "./header-bar.css";

export class HeaderBar extends React.Component {
  logOut() {
    this.props.dispatch(clearAuth());
    clearAuthToken();
  }

  burgerToggle() {
    let linksEl = document.querySelector(".narrowLinks");
    if (linksEl.style.display === "block") {
      linksEl.style.display = "none";
    } else {
      linksEl.style.display = "block";
    }
  }
  render() {
    // Only render the log out button if we are logged in
    let logOutButton,
      exerciseForm,
      DisplayWeightBmi,
      Dashboard,
      WeightBmiForm,
      Progress;
    if (this.props.loggedIn) {
      logOutButton = (
        <a className="logout-bttn" href="/" onClick={() => this.logOut()}>
          Log out
        </a>
      );
      exerciseForm = (
        <a
          className="exerciseForm-bttn"
          href="/exerciseForm"
          onClick={() => {
            this.burgerToggle();
          }}
        >
          Add Exercise
        </a>
      );
      DisplayWeightBmi = (
        <a
          className="weightBmi-bttn"
          href="/display-weight-bmi"
          onClick={() => {
            this.burgerToggle();
          }}
        >
          Display Weight & BMI
        </a>
      );
      WeightBmiForm = (
        <a
          className="weightBmiForm-bttn"
          href="/weight-bmi-form"
          onClick={() => {
            this.burgerToggle();
          }}
        >
          {" "}
          Add Weight & BMI
        </a>
      );
      Progress = (
        <a
          className="progress-page-bttn"
          href="/progress"
          onClick={() => {
            this.burgerToggle();
          }}
        >
          Progress
        </a>
      );
      Dashboard = (
        <a
          className="dashboard-bttn"
          href="/dashboard"
          onClick={() => {
            this.burgerToggle();
          }}
        >
          Home
        </a>
      );
    }
    return (
      <nav>
        <div className="navWide">
          <div className="navWide-title">
            <img
              alt="logo"
              className="logo-image"
              src={Logo3}
              height="auto"
              width="500"
            />
          </div>
          <div className="wideDiv">
            {Dashboard}
            {exerciseForm}
            {DisplayWeightBmi}
            {WeightBmiForm}
            {Progress}
            {logOutButton}
          </div>
        </div>
        <div className="navNarrow">
          <i className="fa fa-bars fa-2x" onClick={this.burgerToggle} />
          <div className="title">
            <img
              className="logo-image-narrow"
              alt="logo"
              src={Logo3}
              height="auto"
              width="150"
            />
          </div>
          <div className="narrowLinks">
            {Dashboard}
            {exerciseForm}
            {DisplayWeightBmi}
            {WeightBmiForm}
            {Progress}
            {logOutButton}
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => {
  const { currentUser } = state.auth;
  return {
    loggedIn: state.auth.currentUser !== null,
    username: state.auth.currentUser.username,
    name: `${currentUser.firstName} ${currentUser.lastName}`,
    id: `${currentUser.id}`
  };
};

export default requiresLogin()(connect(mapStateToProps)(withRouter(HeaderBar)));
