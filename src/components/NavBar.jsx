import React from "react";
import { connect } from "react-redux";

class Navbar extends React.Component {
  render() {
    return (
      <div className="nav-link-container">
        {this.props.view !== "learn more" && (
          <p className="nav-link" onClick={this.props.learnMore}>
            Learn More
          </p>
        )}

        {this.props.loggedIn && (
          <p className="nav-link" onClick={this.props.logout}>
            Log Out
          </p>
        )}
        {this.props.view !== "welcome" && (
          <p className="nav-link" onClick={this.props.goHome}>
            Home
          </p>
        )}

        {(this.props.view === "receive" || this.props.view === "share") && (
          <p className="nav-link" onClick={this.props.goBack}>
            Back
          </p>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    view: state.view,
    loggedIn: !!state.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch({ type: "LOGOUT_USER" }),
    goBack: () => dispatch({ type: "GO_BACK" }),
    goHome: () => dispatch({ type: "GO_HOME" }),
    learnMore: () => dispatch({ type: "LEARN_MORE" })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
