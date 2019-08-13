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
        <div className="nav-link-container">
          <p
            type="submit"
            value="share"
            className="nav-link"
            onClick={this.props.logout}
          >
            Log Out
          </p>
          {this.props.view !== "home" && (
            <p
              type="submit"
              value="share"
              className="nav-link"
              onClick={this.props.goHome}
            >
              Home
            </p>
          )}
        </div>
        {this.props.view === "home" && <Prompt />}
        {this.props.view === "receive" && <Receive />}
        {this.props.view === "share" && <Share />}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userType: state.userType,
    view: state.view
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch({ type: "LOGOUT_USER" }),
    goHome: () => dispatch({ type: "GO_HOME" })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
