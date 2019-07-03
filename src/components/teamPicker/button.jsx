import React from 'react';

const Button = ({ option, setTeamNumber, active }) =>
  <div className={`button ${active ? 'active' : 'inactive'}`} onClick={() => setTeamNumber(option)}>
    {option} teams
  </div>

export default Button;
