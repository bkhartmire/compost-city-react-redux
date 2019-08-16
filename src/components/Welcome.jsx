import React from "react";
import "../styles/Welcome.css";
import logo from "../images/clipart.png";
import { connect } from "react-redux";

class Welcome extends React.Component {
  handleClick() {
    if (this.props.loggedIn) {
      this.props.viewSelection();
    } else {
      this.props.viewSignupForm();
    }
  }

  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p className="white">
          Help your community develop a closed-loop waste cycle.
        </p>
        <h5 className="enter" onClick={this.handleClick.bind(this)}>
          Join the movement.
        </h5>
      </header>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: !!state.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    viewSignupForm: () => {
      dispatch({ type: "VIEW_SIGNUP_FORM" });
    },
    viewSelection: () => {
      dispatch({ type: "VIEW_SELECTION" });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Welcome);
