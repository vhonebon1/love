import React from 'react';
import Chart from '../images/chart.svg';

const Header = ({ clearChoice }) =>
  <div className="header">
    <div className="dashboard__header" onClick={() => clearChoice()}>
      <img src={Chart} alt=""/>
      <h4>Conference 2019</h4>
    </div>
  </div>

export default Header;
