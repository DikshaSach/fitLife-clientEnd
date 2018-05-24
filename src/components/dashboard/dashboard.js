import React from "react";
import { connect } from "react-redux";
import requiresLogin from "../requires-login";
import Calendar from "../calendar/calendar";
import Popup from "reactjs-popup";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./dashboard.css";
import WaterIntakeForm from "../water-intake-form/water-intake-form";
import DisplayWater from "../display-water/display-water";
import WaterIntakeFormEdit from "../water-intake-form-edit/water-intake-form-edit";
import { fetchWeightBmi } from "../../actions/weightbmi";
import AddWater from "../../images/addwater.png";
import { fetchAllWaterDates } from "../../actions/water";
export class Dashboard extends React.Component {

  componentWillMount() {
    this.props.dispatch(fetchWeightBmi(this.props.id));
    this.props.dispatch(fetchAllWaterDates(this.props.id))
  }

  render() {
    let waterExists = null;
    console.log(this.props.WaterDataForDayExists);
    if(this.props.WaterDataForDayExists === false){
     waterExists =   <Popup
            trigger={
              <button className="addwater-button">
                {" "}
                <img
                  src={AddWater}
                  alt="add water"
                  height="35px"
                  width="auto"
                />{" "}
              </button>
            }
            modal
          >
            {close => (
              <div className="modal">
                <button
                    className="close-button-water-intake-form"
                    onClick={() => {
                      console.log("modal closed ");
                      close();
                    }}
                  >
                  Close
                  </button>
                <div className="content">
                    <WaterIntakeForm />
                </div>
                <div className="actions">
                 
                </div>
              </div>
            )}
          </Popup>;
    } else{
    waterExists  =    <Popup
            trigger={
              <button className="addwater-button">
                {" "}
                <img
                  src={AddWater}
                  alt="add water"
                  height="35px"
                  width="auto"
                />{" "}
              </button>
            }
            modal
          >
            {close => (
              <div className="modal">
                <button
                    className="close-button-water-intake-form"
                    onClick={() => {
                      console.log("modal closed ");
                      close();
                    }}
                  >
                  Close
                  </button>
                <div className="content">
                    <WaterIntakeFormEdit />
                </div>
                <div className="actions">
                 
                </div>
              </div>
            )}
          </Popup>
    }
    return (
      <div className="dashboard">
        <div className="today-text">Today</div>
        <div className="waterintakeformedit-bttn-div">
        {waterExists}
          <DisplayWater />
        </div>
        <br />
        <Calendar />
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
    WaterDataForDayExists: state.water.WaterDataForDayExists
  };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
