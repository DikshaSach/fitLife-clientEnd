import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import Calendar from './calendar';

//import ExerciseForm from './exercise-form';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './dashboard.css';
export class Dashboard extends React.Component {
    
    render() {
        return (
            <div className="dashboard">
                <div className="dashboard-username">
                    Hello {this.props.name}
                </div>
              <Calendar />
             
            </div>
        );
    }
}

const mapStateToProps = state => {
    const {currentUser} = state.auth;
    return {
        loggedIn: state.auth.currentUser !== null,
        username: state.auth.currentUser.username,
        name: `${currentUser.firstName} ${currentUser.lastName}`,
        id: `${currentUser.id}`
    };
   
};
export default requiresLogin()(connect(mapStateToProps)(Dashboard));
