import React from "react";
import "./UserForms.css";
import { connect } from "react-redux";

class Signup extends React.Component {
  render() {
    return (
      <div id="signup">
        <form className="user-form" id="signup-form">
          <div className="form-group">
            <label className="title">Sign Up</label>
            <input name="" className="form-control" placeholder="Username" />
          </div>
          <div className="form-group">
            <input
              name=""
              className="form-control"
              placeholder="Email"
              type="email"
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              placeholder="Password"
              type="password"
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              placeholder="Confirm Password"
              type="password"
            />
          </div>
          <div className="form-group">
            <button type="submit" className="green-btn">
              Sign Up
            </button>
          </div>
        </form>

        <p className="form">Already have an account?</p>
        <p className="link" onClick={this.props.viewLoginForm}>
          Click here.
        </p>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    viewLoginForm: () => {
      dispatch({ type: "VIEW_LOGIN_FORM" });
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Signup);
