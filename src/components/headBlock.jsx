import React from 'react';
import Spinner from './spinner';
import QuestionMark from '../images/question_mark.svg';

const colours = ["#3cd070", "#e0115f", "#ff9933", "#ccccff", "#002444", "#eac8d8", "#afbfba", "#ff0000", "#7fff00"];

const HeadBlock = ({ person, matching }) =>
  <div className="headBlock">
    <div className="headBlock__inner" style={{backgroundColor: colours[Math.floor((Math.random() * colours.length))]}}>
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

export default HeadBlock
