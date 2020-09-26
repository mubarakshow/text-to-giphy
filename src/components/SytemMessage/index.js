import React from "react";
import Button from "../Button";
import "./style.scss";

const getTheme = (gradient) => {
  let fullGradient = gradient.split(",");
  let darkerShade = fullGradient[1].trim();
  let darkerColor = darkerShade.split(" ")[0];
  return darkerColor;
};

const SystemMessage = (props) => {
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
        <Button cta={props.cta} theme={getTheme(props.theme)} />
        {/* <Button cta={props.cta} theme={props.theme} /> */}
      </div>
    </div>
  );
};

export default SystemMessage;
