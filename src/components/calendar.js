import BigCalendar from 'react-big-calendar';
import React from 'react';
import moment from 'moment';
import requiresLogin from './requires-login';
import {connect} from 'react-redux';
import {fetchEventsData} from '../actions/events';
import DisplayEvent from './display-event'

export class Calendar extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchEventsData(this.props.id));
}

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
        onSelectEvent={event => console.log(event) }
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
  return {
      eventsData: state.eventsData.data,
      id: `${currentUser.id}`
  };
};


export default requiresLogin()(connect(mapStateToProps)(Calendar));
