import React from "react";
import { connect } from "react-redux";
import requiresLogin from "../requires-login";
import Calendar from "../calendar/calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./dashboard.css";
import WaterIntakeForm from "../water-intake-form/water-intake-form";
import DisplayWater from "../display-water/display-water";
import WaterIntakeFormEdit from "../water-intake-form-edit/water-intake-form-edit";
import { fetchWeightBmi } from "../../actions/weightbmi";
import AddWater from "../../images/addwater.png";
import { fetchAllWaterDates } from "../../actions/water";
import {clickedOnWaterForm} from '../../actions/water';
import Footer from '../footer/footer';
export class Dashboard extends React.Component {
  constructor(props){
    super(props);
    this.onWaterFormClicked = this.onWaterFormClicked.bind(this);
  }

  componentWillMount() {
    this.props.dispatch(fetchWeightBmi(this.props.id));
    this.props.dispatch(fetchAllWaterDates(this.props.id))
  }
  onWaterFormClicked(){
    this.props.dispatch(clickedOnWaterForm());
  }
  render() {
    let waterExists = null;
    if(this.props.WaterDataForDayExists === false){
     waterExists = 
          <div>
                <div className="content">
                    <WaterIntakeForm />
                </div>
            </div>

    } else{
    waterExists  =    
            <div>
                <div className="content">
                    <WaterIntakeFormEdit />
                </div>
            </div>

    }
    return (
      <div className="dashboard">
        <div className="today-text">Today</div>
        <div className="waterintakeformedit-bttn-div">
        <button className="addwater-button"
              onClick={() => this.onWaterFormClicked()}>
                {" "}
                <img
                  src={AddWater}
                  onClick={() => this.onWaterFormClicked()}
                  alt="add water"
                  height="35px"
                  width="auto"
                />{" "}
                </button>
        {this.props.waterFormSubmitting === true ? waterExists : null}
       
          <DisplayWater />
        </div>
        <br />
        <Calendar />
        <Footer/>
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
    WaterDataForDayExists: state.water.WaterDataForDayExists,
    waterFormSubmitting: state.water.waterFormSubmitting
  };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
