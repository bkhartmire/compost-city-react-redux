import React from "react";
import "./FormContainer.css";

export default class SignUp extends React.Component {
  render() {
    return (
      <div id="signup">
        <form id="signup-form">
          <div className="form-group">
            <label class="title">Sign Up</label>
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
              {" "}
              Sign Up{" "}
            </button>
          </div>
        </form>
        <p className="form" onClick={this.props.changeForm}>
          Already have an account?
        </p>
      </div>
    );
  }
}
