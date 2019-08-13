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
        <button
          type="submit"
          value="share"
          className="logout-btn"
          onClick={this.props.logout}
        >
          Log Out
        </button>
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

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch({ type: "LOGOUT_USER" })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
