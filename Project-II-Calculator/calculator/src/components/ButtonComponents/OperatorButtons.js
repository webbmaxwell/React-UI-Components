import React from 'react';
import './Button.css';

const OperatorButton = (props) => {
  return (
    <div className="operator-button">
      <p>{props.text}</p>
    </div>
  )
};

export default OperatorButton
