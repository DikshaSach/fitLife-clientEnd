import React from "react";
import { withRouter } from "react-router-dom";
import { Field, reduxForm, focus } from "redux-form";
import requiresLogin from "../requires-login";
import { connect } from "react-redux";
import Select from "../select";
import { editWater } from "../../actions/water";
import "./water-intake-form-edit.css";
import {waterFormSubmitted} from '../../actions/water';
export class WaterIntakeFormEdit extends React.Component {
  onSubmit(values) {
    this.props.dispatch(editWater(values.waterIntake));
    this.props.dispatch(waterFormSubmitted());
  }

  render() {
    let error;
    if (this.props.error) {
      error = (
        <div className="form-error" aria-live="polite">
          {this.props.error}
        </div>
      );
    }

    return (
      <div className="water-intake-form--editcontainer">
        <form
          className="water-intake-form-edit"
          onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
        >
          {error}
          <label htmlFor="water">
            How many glasses of water did you drink so far?
          </label>
          <Field
          className="waterIntake-select"
            type="text"
            id="waterIntake"
            name="waterIntake"
            component={Select}
            options={{
              "1": "1 cup",
              "2": "2 cups",
              "3": "3 cups",
              "4": "4 cups",
              "5": "5 cups",
              "6": "6 cups",
              "7": "7 cups",
              "8": "8 cups"
            }}
            valueField="value"
          />
          <button className="water-intake-form-edit-submit" disabled={this.props.pristine || this.props.submitting}>
            Enter
          </button>
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => {
  const { currentUser } = state.auth;
  return {
    id: `${currentUser.id}`
  };
};

export default requiresLogin()(
  connect(mapStateToProps)(
    reduxForm({
      form: "waterIntakeEdit",
      onSubmitFail: (errors, dispatch) =>
        dispatch(focus("waterIntakeEdit", "water"))
    })(withRouter(WaterIntakeFormEdit))
  )
);
