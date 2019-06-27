import React from 'react';
import Spinner from './spinner';
import QuestionMark from '../images/question_mark.svg';

const HeadBlock = ({ person, matching, colour }) =>
  <div className="headBlock">
    <div className="headBlock__inner" style={{backgroundColor: colour}}>
      { person ?
        <div>{person}</div>
        : matching ? <Spinner />
        : <img className="headBlock__questionMark" src={QuestionMark} />
      }
    </div>
    { person &&
      <img className="headBlock__nameImage" src={require(`../images/names/${person.replace(' ', '_')}.png`)} />
    }
  </div>

export default HeadBlock;
