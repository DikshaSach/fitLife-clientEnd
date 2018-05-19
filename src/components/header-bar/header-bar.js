import React from "react";
import { connect } from "react-redux";
import { clearAuth } from "../../actions/auth";
import { clearAuthToken } from "../../local-storage";
import requiresLogin from "../requires-login";
import { withRouter } from "react-router-dom";
import Logo3 from "../../images/logo.png";

import "./header-bar.css";

export class HeaderBar extends React.Component {
  constructor(props){
    super(props);
    this.onClickLogo = this.onClickLogo.bind(this);
  }
  logOut() {
    this.props.dispatch(clearAuth());
    clearAuthToken();
  }
  onClickLogo(){
    this.props.history.push(`/dashboard`);
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
          <button className="logout-bttn" onClick={() => this.logOut()}>
            Log out
          </button>
        );
        exerciseForm = (
          <button
            className="exerciseForm-bttn"
            onClick={() => {
              this.burgerToggle();
              this.props.history.push("/exerciseForm");
            }}
          >
            Add Exercise
          </button>
        );
        DisplayWeightBmi = (
          <button
            className="weightBmi-bttn"
            onClick={() => {
              this.burgerToggle();
              this.props.history.push("/display-weight-bmi");
            }}
          >
            Display Weight & BMI
          </button>
        );
        WeightBmiForm = (
          <button
            className="weightBmiForm-bttn"
            onClick={() => {
              this.burgerToggle();
              this.props.history.push("/weight-bmi-form");
            }}
          >
            {" "}
            Add Weight
          </button>
        );
        Progress = (
          <button
            className="progress-page-bttn"
            onClick={() => {
              this.burgerToggle();
              this.props.history.push("/progress");
            }}
          >
            Progress
          </button>
        );
        Dashboard = (
          <button
            className="dashboard-bttn"
            onClick={() => {
              this.burgerToggle();
              this.props.history.push("/dashboard");
            }}
          >
            Home
          </button>
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
              onClick={this.onClickLogo}
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
              height="56"
              width="auto"
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
