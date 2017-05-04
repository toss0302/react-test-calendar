import React from 'react';
import _ from 'lodash';

const get12Hours = hours => {
  const suffix = (hours >= 12) ? 'pm' : 'am';

  // only -12 from hours if it is greater than 12 (if not back at mid night)
  let nHours = (hours > 12) ? hours - 12 : hours;

  nHours = !nHours ? 12 : nHours;

  return [nHours, suffix].join(' ');
};

const HoursBox = () => (
  <div className="hoursBox">
    {
      _.range(24).map((hours, idx) =>
        <div key={idx} style={{ position: 'absolute', top: `${((hours * 100) / 24)}%` }}>{get12Hours(hours)}</div>
      )
    }
  </div>
);

export default HoursBox;
