import React from 'react';
import Loader from 'react-loader-spinner';

const Spinner = () =>
  <div className="spinner">
    <Loader
      type="ThreeDots"
      color="#ff3e82"
      height="75"
      width="75"
    />
  </div>

export default Spinner;
