import React from "react";
import "./FormContainer.css";

export default class SignUp extends React.Component {
  render() {
    return (
      <form id="login">
        <div className="form-group">
          <label>Log In</label>
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
          <div className="checkbox">
            <label>
              {" "}
              <input type="checkbox" /> Save password{" "}
            </label>
          </div>
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary btn-block">
            {" "}
            Login{" "}
          </button>
        </div>
      </form>
    );
  }
}
