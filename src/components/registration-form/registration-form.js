import React from "react";
import { Field, reduxForm, focus } from "redux-form";
import { registerUser } from "../../actions/users";
import { login } from "../../actions/auth";
import { Link } from "react-router-dom";
import Input from "../input";
import Select from "../select";
import './registration-form.css';
import { required, nonEmpty, matches, length, isTrimmed } from "../../validators";
const passwordLength = length({ min: 10, max: 72 });
const matchesPassword = matches("password");

export class RegistrationForm extends React.Component {
  onSubmit(values) {
    const { username, password, firstName, lastName, height } = values;
    const user = { username, password, firstName, lastName, height };
    return this.props
      .dispatch(registerUser(user))
      .then(() => this.props.dispatch(login(username, password)));
  }

  render() {
    return (
      <form
        className="register-form"
        onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
      >
        <div className="links-container">
        <Link className="link-to-register-on-register" to="/register">
            <button type="button">Register</button>
          </Link>
          <Link className="link-to-login" to="/">
            <button type="button">Login</button>
          </Link>
        </div>
        <h1>Register</h1>
        <div className="fields-container">
          <label htmlFor="firstName">First name</label>
          <Field
            component={Input}
            type="text"
            name="firstName"
          />
          <label htmlFor="lastName">Last name</label>
          <Field component={Input} type="text" name="lastName" id="lastName" />
          <label htmlFor="username">Username</label>
          <Field
            component={Input}
            type="text"
            name="username"
            validate={[required, nonEmpty, isTrimmed]}
          />
          <label htmlFor="password">Password</label>
          <Field
            component={Input}
            type="password"
            name="password"
            validate={[required, passwordLength, isTrimmed]}
          />
          <label htmlFor="passwordConfirm">Confirm password</label>
          <Field
            component={Input}
            type="password"
            name="passwordConfirm"
            validate={[required, nonEmpty, matchesPassword]}
          />
          <label htmlFor="height">Enter Height</label>
          <Field
            type="height"
            name="height"
            component={Select}
            options={{
              "53": `4'5`,
              "54": `4'6`,
              "55": `4'7`,
              "56": `4'8`,
              "57": `4'9`,
              "58": `4'10`,
              "59": `4'11`,
              "60": `5'`,
              "61": `5'1`,
              "62": `5'2`,
              "63": `5'3`,
              "64": `5'4`,
              "65": `5'5`,
              "66": `5'6`,
              "67": `5'7`,
              "68": `5'8`,
              "69": `5'9`,
              "70": `5'10`,
              "71": `5'11`,
              "72": `6`,
              "73": `6'1`,
              "74": `6'2`,
              "75": `6'3`,
              "76": `6'4`,
              "77": `6'5`,
              "78": `6'6`,
              "79": `6'7`,
              "80": `6'8`,
              "81": `6'9`,
              "82": `6'10`,
              "83": `6'11`,
              "84": `7'`
            }}
            valueField="value"
          />
          <button
            className="submit-bttn-register"
            type="submit"
            disabled={this.props.pristine || this.props.submitting}
          >
            Register
          </button>
        </div>
      </form>
    );
  }
}
export default reduxForm({
  form: "registration",
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus("registration", Object.keys(errors)[0]))
})(RegistrationForm);
