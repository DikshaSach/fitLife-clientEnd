import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import Calendar from './calendar';
import ExerciseForm from './exercise-form';
import 'react-big-calendar/lib/css/react-big-calendar.css';

export class Dashboard extends React.Component {

    render() {
        return (
            <div className="dashboard">
                <div className="dashboard-username">
                    Username: {this.props.username}
                </div>
                <div className="dashboard-name">Name: {this.props.name}</div>
                
              <Calendar />
              <ExerciseForm />
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
        protectedData: state.protectedData.data,
        eventsData: state.eventsData.data
    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
