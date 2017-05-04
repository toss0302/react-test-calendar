import React from 'react';
import Types from 'prop-types';
import moment from 'moment';
import randomColor from 'randomcolor';

const getMin = datetime => {
  const m = moment(datetime);

  return (m.hour() * 60) + m.minute();
};

const calcCoordinate = props => {
  const startMinutes = getMin(props.startTime);
  const duration = 120; // moment(props.endDate).diff(moment(props.startTime)).asMinutes();

  return {
    top: `${(startMinutes * 100 / 1440)}%`,
    height: (duration / 1440) * 1000
  };
};

const Event = props => {
  const mainColor = randomColor();
  const style = Object.assign({}, {
    background: mainColor,
    position: 'absolute',
    left: 40,
    width: 'calc(100% - 40px)',
    height: 50,
    color: '#fff'
  }, calcCoordinate(props), props.style);

  return (
    <div style={style}>{props.children}</div>
  );
};

Event.propTypes = {
  style: Types.object,
  startTime: Types.string,
  endTime: Types.string,
  children: Types.string
};

export default Event;
