import React, { Component } from 'react';
import moment from 'moment';
// import _ from 'lodash';
import Types from 'prop-types';

import Event from './Event';
import HoursBox from './HoursBox';

export default class App extends Component {
  static propTypes = {
    selected: Types.string,
    events: Types.arrayOf(Types.object).isRequired
  }


  render() {
    const { events, selected } = this.props;

    const filteredEvents = events.filter(event => moment(event.startTime).format('YYYY-MM-DD') === selected);

    return (
      <div className="calendar" style={{ position: 'relative', border: 'solid 1px hotpink', height: 1000, width: 800, overflow: 'hidden' }}>
        <HoursBox />
        {
          filteredEvents.map(
            (event, idx) =>
              <Event key={idx} startTime={event.startTime} endTime={event.endTime}>
                {event.title}
              </Event>
          )
        }
      </div>
    );
  }
}
