import React from "react";
import requiresLogin from "../requires-login";
import { connect } from "react-redux";
import "./display-event.css";
import { withRouter } from "react-router-dom";
import { fetchEventById } from "../../actions/events";
import { deleteSingleEvent } from "../../actions/events";
import { HashLoader } from "react-spinners";
import MuscleIcon from "../../images/muscleicon.png";
import MuscleIconRight from "../../images/muscleiconright.png";
import Typist from "react-typist";
export class DisplayEvent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }

  clickedEdit() {
    this.props.history.push("/edit-exercise/" + this.props.match.params.id);
  }
  clickedDelete() {
    this.props
      .dispatch(deleteSingleEvent(this.props.match.params.id))
      .then(() => {
        return this.props.history.push("/dashboard");
      });
  }
  componentWillMount() {
    this.props.dispatch(fetchEventById(this.props.match.params.id)).then(() =>
      this.setState({
        data: this.props.singleEvent
      })
    );
  }

  render() {
    if (this.state.data !== null) {
      const title = this.props.eventsData.singleEvent["0"].title;
      const start = this.props.eventsData.singleEvent["0"].start;
      const startdate = new Date(start);
      const startdateDate = startdate.getUTCDate();
      const startdateMonth = startdate.getUTCMonth() + 1;
      const startdateYear = startdate.getUTCFullYear();
      const time = this.props.eventsData.singleEvent["0"].time;
      const strengthExercise = this.props.eventsData.singleEvent["0"]
        .strengthExercise;
      const listView = strengthExercise.map((itm, index) => (
        <li className="exercise-event-list-item" key={index}>
          <div className="muscle-icon-container">
            <img
              className="muscle-icon"
              src={MuscleIcon}
              alt="muscle icon left"
              height="50"
              width="auto"
            />
            <img
              className="muscle-icon-right"
              src={MuscleIconRight}
              alt="muscle icon right"
              height="50"
              width="auto"
            />
          </div>
          <div className="strength-exercise-list-item-div">
            <span className="strength-exercise-name">{itm.name} </span>
            <br />
            <span className="strength-exercise-reps"> Reps: {itm.reps}</span>
            <br />
            <span className="strenght-exercise-sets">Sets: {itm.sets} </span>
          </div>
        </li>
      ));
      return (
        <div className="display-event-container">
          <div className="display-event-bttn-container">
            <button
              className="exercise-edit-bttn"
              onClick={() => this.clickedEdit()}
            >
              Edit
            </button>
            <button
              className="exercise-delete-bttn"
              onClick={() => this.clickedDelete()}
            >
              Delete
            </button>
          </div>
          <h1 className="exercise-title">{title}</h1>
          <h1 className="exercise-date">
            Date: {startdateMonth}/{startdateDate}/{startdateYear}
          </h1>
          {this.props.eventsData.singleEvent["0"].time ? (
            <h1 className="exercise-time-spent">Time Spent: {time} </h1>
          ) : null}

          <ul className="strength-exercise-list">{listView}</ul>
          <div className="motivation-text">
            <Typist cursor={{ hideWhenDone: true }}>
              <span> Way to Go! </span>
              <Typist.Backspace count={12} delay={500} />
              <span> You're Amazing! </span>
            </Typist>
          </div>
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
  return {
    singleEvent: state.eventsData.singleEvent,
    eventsData: state.eventsData,
    isFetching: state.eventsData.isFetching,
    isDeleting: state.eventsData.isDelete
  };
};

export default requiresLogin()(
  connect(mapStateToProps)(withRouter(DisplayEvent))
);
