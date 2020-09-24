import React from 'react';
import './style.scss'

const GifContainer = props => (
  <div className="gifcontainer">
    {props.children}
  </div>
)

export default GifContainer;