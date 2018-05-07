import React from 'react';
import requiresLogin from './requires-login';
import {connect} from 'react-redux';

//import {fetchEventsData} from '../reducers/events';
import {fetchEventById} from '../reducers/events';
export class DisplayEvent extends React.Component {
constructor(props){
    super(props);
    console.log(this.props.match.params.id);
   
    } 



    componentWillMount() {
   this.props.dispatch( fetchEventById(this.props.match.params.id))
    }
  
    render(){
        if(this.props.eventsData.isFetching === false){
        const title = this.props.eventsData.singleEvent["0"].title;
        const start = this.props.eventsData.singleEvent["0"].start;
        const startdate = new Date(start);
        const enddate = new Date(start);
       const startdateDate = (startdate.getUTCDate());
       const startdateMonth = (startdate.getUTCMonth() +1);
       const startdateYear = (startdate.getUTCFullYear());
       const enddateDate = (enddate.getUTCDate());
       const enddateMonth = (enddate.getUTCMonth() +1);
       const enddateYear = (enddate.getUTCFullYear());
        const end = this.props.eventsData.singleEvent["0"].end.toLocaleString();
        return <div>
             <button onClick={() => this.props.history.push('/dashboard')}> Go back to Dashboard </button>
            <h1>Exercise: {title}</h1>
            <h1>Start Date: {startdateMonth}/{startdateDate}/{startdateYear}</h1>
            <h1>End Date: {enddateMonth}/{enddateDate}/{enddateYear}</h1>
            <button>Edit</button>
            </div>;
        }
        return<h1>Loading..</h1>; 
     
     
    }
}; 

const mapStateToProps = state => {
    //const {currentUser} = state.auth;
    return {
        singleEvent: state.eventsData.singleEvent,
        eventsData: state.eventsData,
        isFetching: state.eventsData.isFetching
    }
  };
  
export default requiresLogin()(connect(mapStateToProps)(DisplayEvent));