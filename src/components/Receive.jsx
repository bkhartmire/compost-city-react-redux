import React from "react";
import "./Receive.css";

export default class Receive extends React.Component {
  render() {
    return (
      <div id="receive">
        <form className="user-form" id="signup-form">
          <div className="form-group">
            <label className="title">Create Post</label>
            <input
              name="email"
              className="form-control"
              placeholder="E-mail"
              type="email"
            />
          </div>
          <div className="form-group">
            <input
              name="zipcode"
              className="form-control"
              placeholder="Zip Code"
            />
          </div>
          <div className="form-group">{/* bokashi */}</div>
          <div className="form-group">{/* waste */}</div>
          <div className="form-group">{/* food scraps */}</div>
          <div className="form-group">
            <button type="submit" className="green-btn">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}
