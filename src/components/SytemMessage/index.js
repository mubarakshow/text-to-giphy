import React from "react";
import Button from '../Button'
import './style.scss'

const SystemMessage = (props) => {
  return (
    <div className="sysmsg">
      <div className="sysmsg__container" style={{background: `linear-gradient(49deg, ${props.theme})`}}>
        <p className="sysmsg__title">
          {props.title} <span>{props.emoji}</span>
        </p>
        <p className="sysmsg__description">{props.description}</p>
        <Button
          cta={props.cta}
          theme={props.theme.split(', ')[1].split(' ')[0]}
        />
      </div>
    </div>
  );
};

export default SystemMessage;
