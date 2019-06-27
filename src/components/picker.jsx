import React from 'react';
import HeadBlock from './headBlock';

const Picker = ({ firstPick, secondPick, handleMatch, clearMatch, hasBothPicks, matching, firstColour, secondColour }) =>
  <React.Fragment>
    <div className="picker__wrapper">
      <HeadBlock
        person={firstPick}
        matching={matching}
        colour={firstColour}
      />
      <HeadBlock
        person={secondPick}
        matching={matching}
        colour={secondColour}
      />
    </div>
    { hasBothPicks ?
      <div className="picker__actionButton" onClick={() => clearMatch()}>
        Play again
      </div>
      : <div className="picker__actionButton" onClick={() => handleMatch()}>
        { matching ? 'Matching ...' : 'Match'}
        </div>
    }
  </React.Fragment>

export default Picker;
