import React from 'react';
import Spinner from './spinner';

const HeadBlock = ({ person }) =>
  <React.Fragment>
    <div>{person}</div>
    <Spinner />
  </React.Fragment>

export default HeadBlock
