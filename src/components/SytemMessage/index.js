import React from "react";
import Button from '../Button'

const SystemMessage = (props) => {
  return (
    <div className="sysmsg">
      <div className="sysmsg__container">
        <h3 className="sysmsg__title">
          {props.title} <span>{props.emoji}</span>
        </h3>
        <p className="sysmsg__description">{props.description}</p>
        <Button
          cta="Do Something"
        />
      </div>
    </div>
  );
};

export default SystemMessage;
