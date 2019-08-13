import React from "react";
import "./Selection.css";
import Prompt from "./Prompt";
import Receive from "./Receive";
import Share from "./Share";
import { connect } from "react-redux";

class Selection extends React.Component {
  render() {
    return (
      <div id="selection">
        <div className="nav-link-container">
          <p
            type="submit"
            value="share"
            className="nav-link"
            onClick={this.props.logout}
          >
            Log Out
          </p>
          <p
            type="submit"
            value="share"
            className="nav-link"
            onClick={this.props.goHome}
          >
            Home
          </p>
          {this.props.view !== "selection" && (
            <p
              type="submit"
              value="share"
              className="nav-link"
              onClick={this.props.goBack}
            >
              Back
            </p>
          )}
        </div>
        {this.props.view === "selection" && <Prompt />}
        {this.props.view === "receive" && <Receive />}
        {this.props.view === "share" && <Share />}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    view: state.view
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch({ type: "LOGOUT_USER" }),
    goBack: () => dispatch({ type: "GO_BACK" }),
    goHome: () => dispatch({ type: "GO_HOME" })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Selection);
