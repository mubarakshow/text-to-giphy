import React from 'react'

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