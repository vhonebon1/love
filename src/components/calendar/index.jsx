import React from 'react';
import Events from '../../events';
import Event from './event';

const Calendar = () =>
  <div className="calendar__wrapper">
    { Events.map((item) => {
      return(
        <Event
          name={item.name}
          dress={item.dress}
          date={item.date}
        />)
      })
    }
  </div>

export default Calendar;
