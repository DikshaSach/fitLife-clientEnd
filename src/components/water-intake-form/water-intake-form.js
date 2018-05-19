import React from "react";
import { withRouter } from "react-router-dom";
import { Field, reduxForm, focus } from "redux-form";
import { addWater } from "../../actions/water";
import requiresLogin from "../requires-login";
import { connect } from "react-redux";
import {waterFormSubmitted} from '../../actions/water';
import Select from "../select";
import './water-intake-form.css';
export class WaterIntakeForm extends React.Component {
  onSubmit(values) {
    const creator = this.props.id;
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!`
    var yyyy = today.getFullYear();
    if (dd < 10) {
      dd = "0" + dd;
    }
    if (mm < 10) {
      mm = "0" + mm;
    }
    let waterDate = mm + "" + dd + "" + yyyy;
    let date = mm + "/" + dd + "/" + yyyy; 
    const { waterIntake } = values;
    let id = creator + waterDate;
    const waterObj = { waterIntake, waterDate, creator, id, date };
    this.props.dispatch(addWater(waterObj));
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
      <div className="water-intake-form-container">
        <form
          className="water-intake-form"
          onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
        >
          {error}
          <label htmlFor="water">How many glasses of water?</label>
          <Field
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
          <button disabled={this.props.pristine || this.props.submitting}>
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
      form: "waterIntake",
      onSubmitFail: (errors, dispatch) =>
        dispatch(focus("waterIntake", "water"))
    })(withRouter(WaterIntakeForm))
  )
);
