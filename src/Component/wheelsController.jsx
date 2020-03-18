import React from "react";
import "../css/controller.css";

const WheelsController = props => {
  const { wheels_19, wheels_21, chooseWheelSize } = props;
  return (
    <div className="tesla-wheels__controller">
      <p className="tesla-wheels__title">Wheels</p>
      <div className="tesla-wheels__container">
        <label
          className={
            wheels_19
              ? "tesla-wheels__item tesla-wheels__item--19 tesla-wheels__item--active"
              : "tesla-wheels__item tesla-wheels__item--19"
          }>
          <p className="tesla-wheels__title">19"</p>
          <input
            name="wheelsize"
            type="radio"
            value="19"
            onClick={event => {
              chooseWheelSize(event.target.value);
            }}></input>
        </label>
        <label
          className={
            wheels_21
              ? "tesla-wheels__item tesla-wheels__item--21 tesla-wheels__item--active"
              : "tesla-wheels__item tesla-wheels__item--21"
          }>
          <p className="tesla-wheels__title">21"</p>
          <input
            name="wheelsize"
            type="radio"
            value="21"
            onClick={event => {
              chooseWheelSize(event.target.value);
            }}></input>
        </label>
      </div>
    </div>
  );
};

export default WheelsController;
