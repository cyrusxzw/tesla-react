import React from "react";
import Car from "./car";
import "../css/home.css";
import WheelsController from "../Component/wheelsController";
import Header from '../Component/header';
import Footer from '../Component/footer';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wheels_19: true,
      wheels_21: false
    };
    this.chooseWheelSize = this.chooseWheelSize.bind(this);
  }

  chooseWheelSize(value) {
    if (parseInt(value) === 21) {
      this.setState({
        wheels_19: false,
        wheels_21: true
      });
    } else {
      this.setState({
        wheels_19: true,
        wheels_21: false
      });
    }
  }
  render() {
    return (
      <div>
         <Header></Header>
        <div className="container">
          <h1>Range Per Charge</h1>
          <Car wheels_21={this.state.wheels_21}></Car>
          <div className="tesla-controls">
            <WheelsController
              chooseWheelSize={this.chooseWheelSize}
              wheels_19={this.state.wheels_19}
              wheels_21={this.state.wheels_21}></WheelsController>
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}
