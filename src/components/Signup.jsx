import React from "react";
import "../styles/UserForms.css";
import { connect } from "react-redux";

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        username: "",
        email: "",
        password: "",
        passwordConfirmation: ""
      }
    };
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.signupUser(this.state.userInfo);
  }
  handleChange(e) {
    const field = e.target.name;
    const userInfo = this.state.userInfo;
    userInfo[field] = e.target.value;
    this.setState({ userInfo });
  }
  render() {
    return (
      <div id="signup">
        <form
          className="user-form"
          id="signup-form"
          onSubmit={this.handleSubmit.bind(this)}
        >
          <div className="form-group">
            <label className="title">Sign Up</label>
            <input
              name="username"
              className="form-control"
              placeholder="Username"
              onChange={this.handleChange.bind(this)}
            />
          </div>
          <div className="form-group">
            <input
              name="email"
              className="form-control"
              placeholder="Email"
              type="email"
              onChange={this.handleChange.bind(this)}
            />
          </div>
          <div className="form-group">
            <input
              name="password"
              className="form-control"
              placeholder="Password"
              type="password"
              onChange={this.handleChange.bind(this)}
            />
          </div>
          <div className="form-group">
            <input
              name="passwordConfirmation"
              className="form-control"
              placeholder="Confirm Password"
              type="password"
              onChange={this.handleChange.bind(this)}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="green-btn">
              Sign Up
            </button>
          </div>
        </form>

        <p className="form white">Already have an account?</p>
        <p className="link white" onClick={this.props.viewLoginForm}>
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
