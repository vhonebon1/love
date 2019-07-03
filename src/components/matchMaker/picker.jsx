import React from 'react';
import HeadBlock from './headBlock';

const Picker = ({ firstPick, secondPick, handleMatch, clearMatch, hasBothPicks, matching }) =>
  <React.Fragment>
    <div className="picker__wrapper">
      <HeadBlock
        person={firstPick}
        matching={matching}
      />
      <HeadBlock
        person={secondPick}
        matching={matching}
      />
    </div>
    { hasBothPicks ?
      <div className="button picker__button" onClick={() => clearMatch()}>
        Play again
      </div>
      : <div className="button picker__button" onClick={() => handleMatch()}>
        { matching ? 'Matching ...' : 'Match'}
        </div>
    }
  </React.Fragment>

export default Picker;
