import React from "react";
import "./App.css";
import Welcome from "./components/Welcome";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import { connect } from "react-redux";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        {this.props.view === "welcome" && <Welcome />}
        {this.props.view === "loginForm" && <Login />}
        {this.props.view === "signupForm" && <Signup />}
        {this.props.currentUser && <Home />}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
    view: state.view
  };
};

export default connect(mapStateToProps)(App);
