import React from "react";
import { withRouter } from "react-router-dom";
import { Field, reduxForm, focus } from "redux-form";
import requiresLogin from "./requires-login";
import { connect } from "react-redux";
import Select from "./select";
import { editWater } from "../actions/water";
import "./water-intake-form-edit.css";
export class WaterIntakeFormEdit extends React.Component {
  onSubmit(values) {
    console.log(values.waterIntake);
    this.props.dispatch(editWater(values.waterIntake));
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
            type="text"
            id="waterIntake"
            name="waterIntake"
            component={Select}
            options={{
              "1 cup": "1 cup",
              "2 cups": "2 cups",
              "3 cups": "3 cups",
              "4 cups": "4 cups",
              "5 cups": "5 cups",
              "6 cups": "6 cups",
              "7 cups": "7 cups",
              "8 cups": "8 cups",
              "9 cups": "9 cups",
              "10 cups": "10 cups"
            }}
            valueField="value"
          />
          <button disabled={this.props.pristine || this.props.submitting}>
            submitting
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
