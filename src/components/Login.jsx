import React from "react";
import "./UserForms.css";
import { connect } from "react-redux";
import { loginUser } from "../actions";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      credentials: {
        email: "",
        password: ""
      }
    };
  }
  handleSubmit(e) {
    e.preventDefault();
    e.target.reset();
    this.props.loginUser(this.state.credentials);
  }
  handleChange(e) {
    const field = e.target.name;
    const credentials = this.state.credentials;
    credentials[field] = e.target.value;
    this.setState({ credentials });
  }
  render() {
    return (
      <div id="login">
        <form
          className="user-form"
          onSubmit={this.handleSubmit.bind(this)}
          id="login-form"
        >
          <div className="form-group">
            <label className="title">Log In</label>
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
              className="form-control"
              placeholder="Password"
              type="password"
              name="password"
              onChange={this.handleChange.bind(this)}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="green-btn">
              Login
            </button>
          </div>
        </form>
        <p className="form white">Don't have an account yet?</p>
        <p className="link white" onClick={this.props.viewSignupForm}>
          Click here.
        </p>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loginUser: data => {
      dispatch(loginUser(data));
    },
    viewSignupForm: () => {
      dispatch({ type: "VIEW_SIGNUP_FORM" });
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Login);
