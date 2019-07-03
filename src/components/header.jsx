import React from 'react';
import Chart from '../images/chart.svg';

const Header = () =>
  <div className="header">
    <div className="dashboard__header">
      <img src={Chart} />
      <h4>Conference</h4>
    </div>
  </div>

export default Header;
