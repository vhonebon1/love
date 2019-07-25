import React from 'react';

const Event = ({ name, dress, date }) =>
  <div className="button">
    <div className="buttonInner">
      <div>{name}</div>
    </div>
    <div className="date">{date}</div>
    { dress && <div className="buttonInner">{dress}</div> }
  </div>

export default Event;
