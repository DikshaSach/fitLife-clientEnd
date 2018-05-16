import React from "react";
import { connect } from "react-redux";
import { Route, withRouter } from "react-router-dom";
import HeaderBar from "../header-bar/header-bar";
import LandingPage from "../landing-page/landing-page";
import Dashboard from "../dashboard/dashboard";
import DisplayWeightBmi from "../display-weight-bmi/display-weight-bmi";
import ExerciseForm from "../exercise-form/exercise-form";
import DisplayEvent from "../display-event/display-event";
import WeightAndBmiForm from "../weight-bmi-form/weight-bmi-form";
import EditForm from "../edit-form/edit-form";
import RegistrationPage from "../registration-page/registration-page";
import Progress from "../progress/progress";

import { refreshAuthToken } from "../../actions/auth";

export class App extends React.Component {
  componentDidUpdate(prevProps) {
    if (!prevProps.loggedIn && this.props.loggedIn) {
      // When we are logged in, refresh the auth token periodically
      this.startPeriodicRefresh();
    } else if (prevProps.loggedIn && !this.props.loggedIn) {
      // Stop refreshing when we log out
      this.stopPeriodicRefresh();
    }
  }

  componentWillUnmount() {
    this.stopPeriodicRefresh();
  }

  startPeriodicRefresh() {
    this.refreshInterval = setInterval(
      () => this.props.dispatch(refreshAuthToken()),
      60 * 60 * 1000 // One hour
    );
  }

  stopPeriodicRefresh() {
    if (!this.refreshInterval) {
      return;
    }

    clearInterval(this.refreshInterval);
  }

  render() {
    return (
      <div className="app">
        <HeaderBar />
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/exerciseForm" component={ExerciseForm} />
        <Route exact path="/register" component={RegistrationPage} />
        <Route exact path="/weight-bmi-form" component={WeightAndBmiForm} />
        <Route exact path="/display-weight-bmi" component={DisplayWeightBmi} />
        <Route
          exact
          path="/display-single-exercise/:id"
          component={DisplayEvent}
        />
        <Route exact path="/edit-exercise/:id" component={EditForm} />
        <Route exact path="/progress" component={Progress} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  hasAuthToken: state.auth.authToken !== null,
  loggedIn: state.auth.currentUser !== null
});

// Deal with update blocking - https://reacttraining.com/react-router/web/guides/dealing-with-update-blocking
export default withRouter(connect(mapStateToProps)(App));
