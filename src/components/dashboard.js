import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import Calendar from './calendar';
import Popup from "reactjs-popup";
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './dashboard.css';
import WaterIntakeForm from './water-intake-form';
import DisplayWater from './display-water';
import WaterIntakeFormEdit from './water-intake-form-edit';
import {fetchWeightBmi} from '../reducers/weightbmi';
export class Dashboard extends React.Component {
  componentWillMount(){
    this.props.dispatch(fetchWeightBmi(this.props.id));
}
  
    render() {

        return (
            <div className="dashboard">
            <div className="waterintakeformedit-bttn-div">
            <Popup trigger={<button className="button"> Add </button>} modal>
    {close => (
      <div className="modal">
        <a className="close" onClick={close}>
          &times;
        </a>
        <div className="content">
          {this.props.WaterDataForDayExists === true ? < WaterIntakeFormEdit /> : <WaterIntakeForm />}
        </div>
        <div className="actions">
          
          <button
            className="button"
            onClick={() => {
              console.log('modal closed ')
              close()
            }}>
            close modal
          </button>
      </div>
      </div>
    )}
  </Popup>
  <DisplayWater />
             </div>
             <br />
              <Calendar />
            
             
            </div>
        );
    }
}

const mapStateToProps = state => {
   
    const {currentUser} = state.auth;
    return {
        username: state.auth.currentUser.username,
        name: `${currentUser.firstName} ${currentUser.lastName}`,
        id: `${currentUser.id}`,
        WaterDataForDayExists: state.water.WaterDataForDayExists
    };
    
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));