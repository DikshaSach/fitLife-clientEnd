import React from "react";
import requiresLogin from "../requires-login";
import { connect } from "react-redux";
import { fetchWater } from "../../actions/water";
import EmptyBottle from "../../images/empty-bottle.png";
import Glass1 from "../../images/glass1.png";
import Glass2 from "../../images//glass2.png";
import Glass3 from "../../images/glass3.png";
import Glass4 from "../../images/glass4.png";
import Glass5 from "../../images/glass5.png";
import Glass6 from "../../images/glass6.png";
import Glass7 from "../../images/glass7.png";
import Glass8 from "../../images/glass8.png";
import "./display-water.css";

export class DisplayWater extends React.Component {
  componentWillMount() {
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
    let todaysDate = mm + "" + dd + "" + yyyy;
    this.props.dispatch(fetchWater(this.props.id + todaysDate));
  }
  render() {
    if (this.props.singleDayIntake === "1") {
      return (
        <div className="bottle">
          <img alt="Glass 1" src={Glass1} />
        </div>
      );
    } else if (this.props.singleDayIntake === "2") {
      return (
        <div className="bottle">
          <img alt="Glass 2" src={Glass2} />
        </div>
      );
    } else if (this.props.singleDayIntake === "3") {
      return (
        <div className="bottle">
          <img alt="Glass 3" src={Glass3} />
        </div>
      );
    } else if (this.props.singleDayIntake === "4") {
      return (
        <div className="bottle">
          <img alt="Glass 4" src={Glass4} />
        </div>
      );
    } else if (this.props.singleDayIntake === "5") {
      return (
        <div className="bottle">
          <img alt="Glass 5" src={Glass5} />
        </div>
      );
    } else if (this.props.singleDayIntake === "6") {
      return (
        <div className="bottle">
          <img alt="Glass 6" src={Glass6} />
        </div>
      );
    } else if (this.props.singleDayIntake === "7") {
      return (
        <div className="bottle">
          <img alt="Glass 7" src={Glass7} />
        </div>
      );
    } else if (this.props.singleDayIntake === "8") {
      return (
        <div className="bottle">
          <img alt="Glass " src={Glass8} />
        </div>
      );
    } else {
      return (
        <div className="bottle">
          <img alt="empty glass" src={EmptyBottle} />
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  const { currentUser } = state.auth;
  if (state.water.singleDayIntake !== null) {
    return {
      singleDayIntake: state.water.singleDayIntake,
      username: state.auth.currentUser.username,
      name: `${currentUser.firstName} ${currentUser.lastName}`,
      id: `${currentUser.id}`
    };
  } else {
    return {
      singleDayIntake: "0 cups",
      username: state.auth.currentUser.username,
      name: `${currentUser.firstName} ${currentUser.lastName}`,
      id: `${currentUser.id}`
    };
  }
};
export default requiresLogin()(connect(mapStateToProps)(DisplayWater));
