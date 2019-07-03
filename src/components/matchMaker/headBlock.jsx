import React from 'react';
import Spinner from '../spinner';
import QuestionMark from '../../images/question_mark.svg';

const HeadBlock = ({ person, matching, colour }) =>
  <div className="headBlock">
    <div className="headBlock__inner" style={{backgroundColor: colour}}>
      { person ?
        <img className="headBlock__image" src={require(`../../images/faces/${person.name}.png`)}  alt="" />
        : matching ? <Spinner />
        : <img className="headBlock__questionMark" src={QuestionMark} alt="" />
      }
    </div>
    { person && <h4>{person.name}</h4>}
  </div>

export default HeadBlock;
