import React, {Component} from 'react';
//change this to a form ?
import AnswerButton from './answerButton';
const Calculator = ({click}) => {
  return (
      <div className="col-md-6">
        <h2>BUTTONS</h2>
        {[1,2,3,4].map(value=>{
          return <AnswerButton click={click} val={value}/>
        })
        }
      </div>
  )
}

export default Calculator;
