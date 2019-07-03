import React from 'react';
import Events from '../events';

const Calendar = () =>
  <div className="calendar__wrapper">
    { Events.map((item) => {
      return(
        <div className="button">
          <div>{item.name}</div>
          <div>dress code: {item.dress}, date: TBC</div>
        </div>
        )
      })
    }
  </div>

export default Calendar;
