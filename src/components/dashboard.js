import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import Calendar from './calendar';
//import ExerciseForm from './exercise-form';
import 'react-big-calendar/lib/css/react-big-calendar.css';

export class Dashboard extends React.Component {
    
    render() {
        return (
            <div className="dashboard">
                <div className="dashboard-username">
                    Username: {this.props.username}
                </div>
                <div className="dashboard-name">Name: {this.props.name}</div>
                <button className="add-exercise-event"
                    onClick={() => {this.props.history.push('/exerciseForm')}}> Add Exercise 
                </button>
                <button className="display-weight-bmi"
                    onClick={() => {this.props.history.push('/display-weight-bmi')}}> Display your weight bmi logs
                </button>
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
        id: `${currentUser.id}`
    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
