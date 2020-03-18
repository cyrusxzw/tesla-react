import React from "react";
import "../css/car.css";

const Car = props => {
  const { wheels_21 } = props;

  return (
    <div className="tesla-car">
      <div className="tesla-wheels">
        <div
          className={`tesla-wheel tesla-wheel--front ${
            wheels_21 ? "tesla-wheel--21" : "tesla-wheel--19"
          }`}></div>
        <div
          className={`tesla-wheel tesla-wheel--rear ${
            wheels_21 ? "tesla-wheel--21" : "tesla-wheel--19"
          }`}></div>
      </div>
    </div>
  );
};

export default Car;
