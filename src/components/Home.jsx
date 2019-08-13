import React from "react";
import "./Home.css";
import Prompt from "./Prompt";
import Receive from "./Receive";
import Share from "./Share";
import { connect } from "react-redux";

class Home extends React.Component {
  render() {
    return (
      <div id="home">
        {!this.props.userType && <Prompt />}
        {this.props.userType === "receive" && <Receive />}
        {this.props.userType === "share" && <Share />}
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
