import React from "react";
import requiresLogin from "../requires-login";
import { connect } from "react-redux";
import StrengthTrainingForm from "../strengthTrainingForm/strengthTrainingForm";
import CustomExerciseForm from "../custom-exercise-form/custom-exercise-form";
import "./exercise-form.css";
import StrengthImage from "../../images/strength.png";
import CardioImage from "../../images/cardio.png";
export class ExerciseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      customExerciseClicked: false,
      strengthTrainingClicked: false
    };
  }
  showcustom() {
    this.setState({
      customExerciseClicked: true
    });
  }
  showRepSetsForm() {
    this.setState({
      strengthTrainingClicked: true
    });
  }
  resetState() {
    this.setState({
      customExerciseClicked: false,
      strengthTrainingClicked: false
    });
  }
  render() {
    if (this.state.customExerciseClicked === true) {
      return (
        <div className="custom-exercise-form-container">
         <button
            className="exercise-form-cancel"
            onClick={() => this.resetState()}
          > Cancel </button>
          <CustomExerciseForm />
        </div>
      );
    } else if (this.state.strengthTrainingClicked === true) {
      return (
        <div className="strength-exercise-form-container">
        <button
            className="exercise-form-cancel"
            onClick={() => this.resetState()}
          > Cancel </button>
          <StrengthTrainingForm />
        </div>
      );
    }
    return (
      <div className="exercise-form-container">
        <h1 className="exercise-form-title">
          What kind of Exercise do you want to log?
        </h1>
        <div className="exercise-form-btn-container">
          <div className="exercise-form-btn-custom-container">
            <img src={CardioImage} alt="cardio logo" />
            <br />
            <button
              className="exercise-form-btn-custom"
              onClick={() => this.showcustom()}
            >
              Cardio/Custom Exercise
            </button>
          </div>
         
          <div className="exercise-form-btn-strength-container">
            <img src={StrengthImage} alt="strength logo" />
            <br />
            <button
              className="exercise-form-btn-strength"
              onClick={() => this.showRepSetsForm()}
            >
              Strength Exercise{" "}
            </button>
          </div>
          <br />
        </div>
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

export default requiresLogin()(connect(mapStateToProps)(ExerciseForm));
