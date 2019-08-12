import React from "react";
import "./FormContainer.css";
import Login from "./Login";
import SignUp from "./SignUp";
import { useTransition, animated } from "react-spring";

export default class FormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: "login"
    };
  }

  changeForm(changeTo) {
    this.setState({ form: changeTo });
  }

  render() {
    return (
      <div id="form-container">
        {this.state.form === "login" && (
          <Login changeForm={() => this.changeForm("signup")} />
        )}
        {this.state.form === "signup" && (
          <SignUp changeForm={() => this.changeForm("login")} />
        )}
      </div>
    );
  }
}
