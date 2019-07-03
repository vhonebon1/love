import React from 'react';
import Chart from '../images/chart.svg';

const Header = ({ toggleTeamPicker }) =>
  <div className="header">
    <div className="dashboard__header">
      <img src={Chart} alt=""/>
      <h4>Conference</h4>
    </div>
    <div className="header__teamPicker" onClick={() => toggleTeamPicker()}>Team picker</div>
  </div>

export default Header;
