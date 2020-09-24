import React from 'react';
import './index.scss'

const Button = props => (
  <div className="btn">
    <button 
      className="btn__element" 
      onClick={props.onClick}
    >
      {/* cta = call to action */}
      {props.cta}
    </button>
  </div>
)

export default Button;