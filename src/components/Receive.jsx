import React from "react";
import "./Receive.css";
import Switch from "react-switch";

export default class Receive extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        email: "",
        zipcode: "",
        bokashi: false,
        waste: false,
        foodScraps: false
      }
    };
  }
  handleChange() {}
  handleSwitch() {}
  handleSubmit() {}
  render() {
    return (
      <div id="receive">
        <form className="compost-form" id="signup-form">
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
          <div className="form-group">
            {" "}
            <h4 className="specifications">Can you accept the following?</h4>
          </div>

          <div className="form-group">
            <label className="specifications border-bottom ">
              <span className="specifications">Bokashi:</span>
              <div class="switch">
                <Switch
                  onChange={this.handleSwitch.bind(this)}
                  checked={false}
                  onColor="#6eb43e"
                />
              </div>
            </label>
          </div>

          <div className="form-group">
            <label className="specifications border-bottom">
              <span className="specifications">Composted animal waste:</span>
              <div class="switch">
                <Switch
                  onChange={this.handleSwitch.bind(this)}
                  checked={false}
                  onColor="#6eb43e"
                />
              </div>
            </label>
          </div>

          <div className="form-group">
            <label className="specifications">
              <span className="specifications">Food scraps:</span>
              <div class="switch">
                <Switch
                  onChange={this.handleSwitch.bind(this)}
                  checked={false}
                  onColor="#6eb43e"
                />
              </div>
            </label>
          </div>

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
