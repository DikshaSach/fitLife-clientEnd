import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import Calendar from './calendar';

//import ExerciseForm from './exercise-form';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './dashboard.css';
import WaterIntakeForm from './water-intake-form';
import DisplayWater from './display-water';
import WaterIntakeFormEdit from './water-intake-form-edit';
export class Dashboard extends React.Component {

    componentWillMount(){

    }

    render() {
        
        return (
            <div className="dashboard">
              <Calendar />
              < WaterIntakeForm />
              <DisplayWater/>
              <WaterIntakeFormEdit />
             
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


    };
    
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));