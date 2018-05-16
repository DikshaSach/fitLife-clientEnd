import React from "react";
import { connect } from "react-redux";
import requiresLogin from "../requires-login";
import { fetchWeightBmi } from "../../actions/weightbmi";
import { deleteWeightBmi } from "../../actions/weightbmi";
import "./display-weight-bmi.css";
export class DisplayWeightBmi extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchWeightBmi(this.props.id));
  }
  handleClick(id) {
    this.props.dispatch(deleteWeightBmi(id)).then(() => {
      return this.props.history.push("/display-weight-bmi");
    });
  }

  render() {
    const userWeightBmiData = this.props.weightBmi;
    return (
      <div className="displayweightbmi-container">
        <h1>Your weight/bmi Details:</h1>
        <ul>
          {" "}
          {userWeightBmiData.map((eachItem, index) => {
            return (
              <li key={`item-${index}`}>
                <div className="month-item">{eachItem.month}</div>
                <div className="weight-item">Weight: {eachItem.weight} </div>
                <div className="bmi-item">Bmi: {eachItem.bmi} </div>
                <button
                  className="delete-bttn-weightbmi"
                  onClick={() => this.handleClick(eachItem._id)}
                >
                  {" "}
                  Delete{" "}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
const mapStateToProps = state => {
  const { currentUser } = state.auth;
  return {
    username: state.auth.currentUser.username,
    name: `${currentUser.firstName} ${currentUser.lastName}`,
    id: `${currentUser.id}`,
    weightBmi: state.weightBmi.data,
    isDeleting: state.weightBmi.isDeleting,
    isFetching: state.weightBmi.isFetching
  };
};
export default requiresLogin()(connect(mapStateToProps)(DisplayWeightBmi));
