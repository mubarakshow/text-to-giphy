import React from "react";
import Button from '../Button'
import './style.scss'

const SystemMessage = (props) => {
  return (
    <div className="sysmsg">
      <div className="sysmsg__container">
        <p className="sysmsg__title">
          {props.title} <span>{props.emoji}</span>
        </p>
        <p className="sysmsg__description">{props.description}</p>
        <Button
          cta={props.cta}
        />
      </div>
    </div>
  );
};

export default SystemMessage;
