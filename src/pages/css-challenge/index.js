import React from "react";
import SystemMessage from "../../components/SytemMessage";
import "./style.scss";
import { goodAlert, warningAlert, dangerAlert } from "./_variables.scss";
import { Alerts } from "./mock-alerts";

let themes = {
  good: goodAlert,
  warning: warningAlert,
  danger: dangerAlert,
};

const CSS_PAGE = (props) => {
  return (
    <div className="Csspage">
      <h1>CSS Challenge</h1>
      <div className="Csspage__container">
        {Alerts.map((alert) => (
          <SystemMessage
            key={alert.id}
            title={alert.title}
            emoji={alert.emoji}
            description={alert.description}
            cta={alert.cta}
            theme={themes[alert.theme]}
          />
        ))}
      </div>
    </div>
  );
};

export default CSS_PAGE;
