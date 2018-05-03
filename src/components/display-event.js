import React from 'react';
import requiresLogin from './requires-login';
import {connect} from 'react-redux';

//import {fetchEventsData} from '../reducers/events';
import {fetchEventById} from '../reducers/events';
export class DisplayEvent extends React.Component {
    componentDidMount() {
        //this.props.dispatch(fetchEventById('5aea747e13768b22a4b1a1b4'));
    }
render(){

    return(
       
        <div>
             <button onClick={() => this.props.history.push('/dashboard')}> Go back to Dashboard </button>
            <h1>Single Event Id</h1>
            <div>{JSON.stringify(this.props.eventsData.singleEvent)} </div>
            
        </div>
    );
}

}

const mapStateToProps = state => {
    console.log(state.eventsData)
    //const {currentUser} = state.auth;
    return {
        eventsData: state.eventsData
        
    }
  };
  
export default requiresLogin()(connect(mapStateToProps)(DisplayEvent));