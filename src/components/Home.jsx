import React from "react";
import "./Home.css";
import Prompt from "./Prompt";
import { connect } from "react-redux";

class Home extends React.Component {
  render() {
    return (
      <div id="home">
        <Prompt />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userType: state.userType
  };
};

export default connect(mapStateToProps)(Home);
