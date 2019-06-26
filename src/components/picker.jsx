import React from 'react';
import HeadBlock from './headBlock';

const Picker = ({ firstPick, secondPick, handleMatch, clearMatch }) =>
  <React.Fragment>
    <HeadBlock
      person={firstPick}
    />
    <HeadBlock
      person={secondPick}
    />
    <button onClick={() => handleMatch()}>Match</button>
    <button onClick={() => clearMatch()}>Play again</button>
  </React.Fragment>

export default Picker;
