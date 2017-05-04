import React, { Component } from 'react';
import moment from 'moment';
import _ from 'lodash';

import Calendar from './Calendar';
import Events from './events.json';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.events = Events;
    this.state = {
      selected: null
    };
  }

  getDates() {
    const startDates = this.events.map(one => moment(one.startTime).format('YYYY-MM-DD'));

    return _.sortedUniq(startDates);
  }

  render() {
    const dates = this.getDates();
    const selected = this.state.selected;

    return (
      <div>
        {selected && <h1>Events on {moment(selected).format('Do MMM')}</h1>}
        {!selected && <h1>Please select date</h1>}
        {
          dates.map(
            (date, idx) => <button key={idx} onClick={() => this.setState({ selected: date })}>{moment(date).format('Do MMM')}</button>
          )
        }
        <br /><br /><br />
        <Calendar events={this.events} selected={selected} />
      </div>
    );
  }
}
