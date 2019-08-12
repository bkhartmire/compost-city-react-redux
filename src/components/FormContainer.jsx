import React from "react";
import "./FormContainer.css";
import Login from "./Login";
import SignUp from "./SignUp";
import { useTransition, animated } from "react-spring";

export default class FormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true
    };
  }
  render() {
    return (
      <div id="form-container">
        <Login />
        <SignUp />
      </div>
    );
  }
}
