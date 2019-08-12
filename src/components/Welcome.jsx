import React from "react";
import "./Welcome.css";
import logo from "../images/clipart.png";
import { connect } from "react-redux";

class Welcome extends React.Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Help your community develop a closed-loop waste cycle.</p>
        <h5 className="enter" onClick={this.props.viewSignupForm}>
          Join the movement.
        </h5>
      </header>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    viewSignupForm: () => {
      dispatch({ type: "VIEW_SIGNUP_FORM" });
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Welcome);
