import BigCalendar from 'react-big-calendar';
import React from 'react';
import moment from 'moment';
//import { Link, browserHistory } from 'react-router-dom';
//import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import {connect} from 'react-redux';
import {fetchEventsData} from '../reducers/events';
//import {fetchEventById} from '../reducers/events';
//import DisplayEvent from './display-event';

export class Calendar extends React.Component {
  componentDidMount() {
    // this.props.dispatch(fetchEventsData(this.props.id));
}

clickedevent(event){
  console.log(event.id);
  this.props.history.push(`/display-single-exercise/`);
 
};
render(){
let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k])
BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment));

  return(

    
      <div style={{ height: 700 }}>
      <BigCalendar
      selectable
      events={this.props.eventsData}
        views={allViews}
        step={60}
        showMultiDayTimes
        defaultDate={new Date(2018, 4, 29)}
        onSelectEvent={this.clickedevent}
        onSelectSlot={slotInfo =>
          console.log(
            `selected slot: \n\nstart ${slotInfo.start.toLocaleString()} ` +
              `\nend: ${slotInfo.end.toLocaleString()}` +
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
        let id = null;  
        if(currentUser != null){
            id =currentUser.id;
        }
  return {
      eventsData: state.eventsData.data,
      id: id
  };
};


export default connect(mapStateToProps)(Calendar);
