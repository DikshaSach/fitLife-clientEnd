import BigCalendar from 'react-big-calendar';
import React from 'react';
import moment from 'moment';

import {withRouter} from 'react-router-dom';
//import { Link, browserHistory } from 'react-router-dom';
//import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import {connect} from 'react-redux';
import {fetchEventsData} from '../reducers/events';
import {fetchEventById} from '../reducers/events';
//import DisplayEvent from './display-event';
import './calendar.css';


export class Calendar extends React.Component {
  constructor(props){
    super(props);
    this.onDashboardClicked = this.onDashboardClicked.bind(this);
  }

  onDashboardClicked(event){
    this.props.dispatch(fetchEventById(event._id)); 
    this.props.history.push(`/display-single-exercise/${event._id}`);
  }

    componentWillMount() {
     this.props.dispatch(fetchEventsData(this.props.id));
   }
 

  render(){
  BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment));
    return(

      
        <div style={{ height: 700 }}>
        <BigCalendar
        selectable
        events={this.props.eventsData}
          views={["month"]}
          step={60}
          culture='en-US'
          showMultiDayTimes
          defaultDate={new Date()}
          onSelectEvent={this.onDashboardClicked}
          eventPropGetter={event => ({className: event.title.toLowerCase()})}
          onSelectSlot={slotInfo =>
            console.log(
              `selected slot: \n\nstart ${slotInfo.start} ` +
                `\nend: ${slotInfo.end}` +
                `\naction: ${slotInfo.action}`
            )
          }
        />
        </div>
      
    );
  }

  }

const mapStateToProps = state => {

  const {currentUser} = state.auth;
  return {
      eventsData: state.eventsData.data,
      id: `${currentUser.id}`
  };
};


export default (connect(mapStateToProps)(withRouter(Calendar)));