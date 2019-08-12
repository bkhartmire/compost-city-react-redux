import React from "react";
import "./FormContainer.css";

export default class Login extends React.Component {
  render() {
    return (
      <div id="login">
        <form id="login-form">
          <div className="form-group">
            <label class="title">Log In</label>
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
            <button type="submit" className="green-btn">
              {" "}
              Login{" "}
            </button>
          </div>
        </form>
        <p className="form" onClick={this.props.changeForm}>
          Don't have an account yet?
        </p>
      </div>
    );
  }
}
