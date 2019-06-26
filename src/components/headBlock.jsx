import React from 'react';
import Spinner from './spinner';

const colours = ["#3cd070", "#e0115f", "#ff9933", "#ccccff", "#002444"];

const HeadBlock = ({ person }) =>
  <React.Fragment>
    <div style={{backgroundColor: colours[Math.floor((Math.random() * colours.length) + 1)]}}>{person}</div>
    <Spinner />
  </React.Fragment>

export default HeadBlock
