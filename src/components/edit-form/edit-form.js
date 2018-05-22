import React from "react";
import Input from "../input";
import { withRouter } from "react-router-dom";
import { Field, reduxForm, focus } from "redux-form";
import { required, nonEmpty } from "../../validators";
import requiresLogin from "../requires-login";
import { connect } from "react-redux";
import { fetchEventById } from "../../actions/events";
import { editEventsData } from "../../actions/events";
import { makeDateFromISOString } from "../../utils";
import { HashLoader } from "react-spinners";
import "./edit-form.css";
import Select from "../select";
export class EditForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      counter: 1
    };
  }
  componentWillMount() {
    this.props.dispatch(fetchEventById(this.props.match.params.id)).then(() =>
      this.setState({
        data: this.props.singleEvent
      })
    );
  }
  addmorefields() {
    this.setState({ counter: this.state.counter + 1 });
  }
  onSubmit(values) {
    const start = makeDateFromISOString(new Date(values.start).toISOString());
    const end = start;
    const { title, time } = values;
    let exercise;
    if (this.props.singleEvent.strengthExercise.length > 0) {
      const strengthExercise = [];
      for (var i = 1; i < this.state.counter; i++) {
        const name = values["strengthExercisetitle" + i];
        const reps = values["reps" + i];
        const sets = values["sets" + i];
        const titleRepSetObj = { name, reps, sets };
        strengthExercise.push(titleRepSetObj);
      }
      exercise = { title, start, end, strengthExercise };
    } else {
      exercise = { title, start, end, time };
    }
    this.props
      .dispatch(editEventsData(this.props.match.params.id, exercise))
      .then(() => {
        this.props.history.push("/dashboard");
      });
  }
  render() {
    if (this.state.data !== null) {
      let error;
      if (this.props.error) {
        error = (
          <div className="form-error" aria-live="polite">
            {this.props.error}
          </div>
        );
      }

      let FormattedDatInfo = this.state.data.start.split("T")[0];
      let timespent = null;
      let addMore = null;
      let titleOfExercise = null;
      let duplicatedFields = [];
      if (this.state.data.strengthExercise.length > 0) {
        addMore = (
          <button
            className="add-more-fields"
            onClick={() => this.addmorefields()}
          >
            Add More Exercises
          </button>
        );
        titleOfExercise = <div> <label>Day</label>
        <Field
          type="text"
          id="title"
          name="title"
          component={Select}
          options={{
            "Shoulder Day": "Shoulder Day",
            "Back Day": "Back Day",
            "Legs Day": "Legs Day",
            "Abs Day": "Abs Day",
            "Arms Day": "Arms Day"
          }}
          valueField="value"
          validate={[required, nonEmpty]}
        />
        </div>;
        let count = this.state.counter;

        for (let i = 1; i < count; i++) {
          duplicatedFields.push(
            <div className="duplicated-fields" key={i}>
              <label htmlFor="strengthExercisetitle">
                Strength Exercise Name #{i}
              </label>
              <Field
                component={Input}
                type="text"
                name={"strengthExercisetitle" + i}
                id={"strengthExercisetitle" + i}
                validate={[required, nonEmpty]}
              />
              <label>Reps</label>
              <Field
                type="text"
                id={"reps" + i}
                name={"reps" + i}
                validate={[required, nonEmpty]}
                component={Select}
                options={{
                  "5 reps": "5 reps",
                  "10 reps": "10 reps",
                  "15 reps": "15 reps",
                  "20 reps": "20 reps",
                  "max reps": "max reps"
                }}
                valueField="value"
              />
              <label>Sets</label>
              <Field
                type="text"
                id={"sets" + i}
                name={"sets" + i}
                validate={[required, nonEmpty]}
                component={Select}
                options={{
                  "1 set": "1 set",
                  "2 sets": "2 sets",
                  "3 sets": "3 sets",
                  "4 set": "4 set",
                  "5 set": "5 set",
                  "6 set": "6 set",
                  "7 set": "7 set",
                  "8 set": "8 set",
                  "9 set": "9 set",
                  "10 set": "10 set"
                }}
                valueField="value"
              />
            </div>
          );
        }
      } else {
        addMore = null;
        titleOfExercise = <div>
      <label htmlFor="title">Title</label>
            <Field
              component={Input}
              type="text"
              name="title"
              id="title"
              validate={[required, nonEmpty]}
            />
          
        </div>


        timespent = (
          <div>
            <label>Time Spent</label>
            <Field
              type="text"
              id="time"
              name="time"
              component={Select}
              options={{
                "10-minutes": "10 minutes",
                "20-minutes": "20 minutes",
                "30-minutes": "30 minutes",
                "40-minutes": "40 minutes",
                "50-minutes": "50 minutes",
                "60-minutes": "60 minutes"
              }}
              valueField="value"
            />
          </div>
        );
      }

      return (
        <div className="exercise-form-container">
          <h1>Edit Your Exercise Event:</h1>
          <div className="exercise-details-from-state">
            Exercise You Saved:
            <br />
            Name: {this.state.data.title}
            <br />
            Time: {this.state.data.time}
            <br />
            Date: {FormattedDatInfo}
          </div>
          <form
            className="exercise-form"
            onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
          >
            {addMore}

            <br />
            {error}
            {titleOfExercise}
            {timespent}

            <label htmlFor="start">start</label>
            <Field
              component={Input}
              type="Date"
              name="start"
              id="start"
              validate={[required, nonEmpty]}
            />
            {duplicatedFields}
            <button className="edit-form-submit" disabled={this.props.pristine || this.props.submitting}>
              Enter
            </button>
          </form>
        </div>
      );
    }
    return (
      <div className="spinner-container">
        {" "}
        <HashLoader color={"#CF7553"} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { currentUser } = state.auth;
  return {
    id: `${currentUser.id}`,
    singleEvent: state.eventsData.singleEvent["0"]
  };
};

export default requiresLogin()(
  connect(mapStateToProps)(
    reduxForm({
      form: "editexercise",
      enableReinitialize: true,
      onSubmitFail: (errors, dispatch) =>
        dispatch(focus("editexercise", "title"))
    })(withRouter(EditForm))
  )
);
