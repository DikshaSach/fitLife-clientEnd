import React from 'react';
import requiresLogin from './requires-login';
import {connect} from 'react-redux';

import {withRouter} from 'react-router-dom';
import {fetchEventById} from '../reducers/events';
import {deleteSingleEvent} from '../reducers/events';
export class DisplayEvent extends React.Component {


    clickedEdit(){
        this.props.history.push('/edit-exercise/' + this.props.match.params.id); 

    }
    clickedDelete(){
        console.log('clicked on delete button');
        this.props.dispatch(deleteSingleEvent(this.props.match.params.id))
        .then(()=> {
            return this.props.history.push('/dashboard')
        })     
    }
    componentWillMount() {
        this.props.dispatch(fetchEventById(this.props.match.params.id)); 
    }
  
    render(){
        if(this.props.eventsData.isFetching === false){
        const title = this.props.eventsData.singleEvent["0"].title;
        const start = this.props.eventsData.singleEvent["0"].start;
        const startdate = new Date(start);
       const startdateDate = (startdate.getUTCDate());
       const startdateMonth = (startdate.getUTCMonth() +1);
       const startdateYear = (startdate.getUTCFullYear());
       const time = this.props.eventsData.singleEvent["0"].time;
       const strengthExercise = this.props.eventsData.singleEvent["0"].strengthExercise;
       const listView = strengthExercise.map((itm,index)=>
        <li key={itm.index}>
        Exercise Name: {itm.name} 
        Reps: {itm.reps} 
        Sets: {itm.sets}
        </li>); 
        return <div>
           
            <h1>{title}</h1>
            <h1>Date: {startdateMonth}/{startdateDate}/{startdateYear}</h1>
            {this.props.eventsData.singleEvent["0"].time ? <h1>Time Spent: {time} </h1> : null}
            <button onClick={() => this.clickedEdit()}>Edit</button>
            <button onClick={()=> this.clickedDelete()}>Delete</button>
            <ul>{listView}</ul>
            </div>;
        }
        return<h1>Loading..</h1>; 
     
     
    }
}; 

const mapStateToProps = state => {
    return {
        singleEvent: state.eventsData.singleEvent,
        eventsData: state.eventsData,
        isFetching: state.eventsData.isFetching,
        isDeleting: state.eventsData.isDelete
    }
  };
  
export default requiresLogin()(connect(mapStateToProps)(withRouter(DisplayEvent)));