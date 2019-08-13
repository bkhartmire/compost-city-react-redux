import React from "react";
import "./App.css";
import Welcome from "./components/Welcome";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Selection from "./components/Selection";
import { connect } from "react-redux";
import { fetchPosts } from "./actions";

class App extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }
  render() {
    return (
      <div className="App">
        {this.props.view === "welcome" && <Welcome />}
        {this.props.view === "loginForm" && <Login />}
        {this.props.view === "signupForm" && <Signup />}
        {this.props.currentUser && <Selection />}
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

const mapDispatchToProps = dispatch => {
  return {
    fetchPosts: () => dispatch(fetchPosts())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
