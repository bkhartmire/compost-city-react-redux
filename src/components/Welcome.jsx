import React from "react";
import "./Welcome.css";
import logo from "../images/clipart.png";

export default class Welcome extends React.Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Help your community develop a closed-loop waste cycle.</p>
        <h5 className="enter" onClick={this.props.changeView}>
          Join the movement
        </h5>
      </header>
    );
  }
}
