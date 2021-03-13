import React from 'react';
import Total from './Total';

const content = (props) => {
    

  return (
    <div>
      <p>
        {props.part1} {props.exercises1}
      </p>
      <p>
        {props.part2} {props.exercises2}
      </p>
      <p>
        {props.part3} {props.exercises3}
      </p>
       <Total exercises1={props.exercises1}
       exercises2={props.exercises2}  exercises3={props.exercises3}  />
    </div>
  )
}

export default content;
