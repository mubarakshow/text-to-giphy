import React from "react";
import Button from "../Button";
import "./style.scss";

const SystemMessage = (props) => {
  
  const getTheme = (gradient) => {
    let fullGradient = gradient.split(", ");
    let darkerShade = fullGradient[1]
    let darkerColor = darkerShade.split(" ")[0];
    console.log('darkerColor', darkerColor)
    return darkerColor;
  }

  return (
    <div className="sysmsg">
      <div
        className="sysmsg__container"
        style={{ background: `linear-gradient(49deg, ${props.theme})` }}
      >
        <div className="sysmsg__header">
          <p className="sysmsg__header__title">{props.title}</p>
          <span className="sysmsg__header__emoji">{props.emoji}</span>
        </div>
        <p className="sysmsg__description">{props.description}</p>
        <Button
          cta={props.cta}
          theme={getTheme(props.theme)}
        />
      </div>
    </div>
  );
};

export default SystemMessage;
