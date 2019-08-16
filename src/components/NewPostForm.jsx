import React from "react";
import "../styles/Receive.css";
import Switch from "react-switch";
import { connect } from "react-redux";
import { submitPost } from "../actions";

class NewPostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        zipcode: "",
        bokashi: false,
        waste: false,
        foodScraps: false
      }
    };
  }
  handleChange(e) {
    const field = e.target.name;
    const data = this.state.data;
    data[field] = e.target.value;
    this.setState({ data });
  }
  handleSwitch(category) {
    const before = this.state.data[category];
    this.setState({ data: { ...this.state.data, [category]: !before } });
  }
  handleSubmit(e) {
    e.preventDefault();
    e.target.reset();
    this.props.submitPost({
      ...this.state.data,
      username: this.props.currentUser.username,
      email: this.props.currentUser.email
    });
  }
  render() {
    return (
      <div id="receive">
        <form
          className="compost-form"
          id="signup-form"
          onSubmit={this.handleSubmit.bind(this)}
        >
          <div className="form-group">
            <label className="title">Create Post</label>
            <input
              name="zipcode"
              className="form-control"
              placeholder="Zip Code"
              onChange={this.handleChange.bind(this)}
            />
          </div>
          <div className="form-group">
            {" "}
            <h4 className="specifications">Can you accept the following?</h4>
          </div>

          <div className="form-group">
            <label className="specifications border-bottom ">
              <span className="specifications">Bokashi:</span>
              <div className="switch">
                <Switch
                  onChange={() => this.handleSwitch("bokashi")}
                  checked={this.state.data.bokashi}
                  onColor="#6eb43e"
                />
              </div>
            </label>
          </div>

          <div className="form-group">
            <label className="specifications border-bottom">
              <span className="specifications">Composted animal waste:</span>
              <div className="switch">
                <Switch
                  onChange={() => this.handleSwitch("waste")}
                  checked={this.state.data.waste}
                  onColor="#6eb43e"
                />
              </div>
            </label>
          </div>

          <div className="form-group">
            <label className="specifications">
              <span className="specifications">Food scraps:</span>
              <div className="switch">
                <Switch
                  onChange={() => this.handleSwitch("foodScraps")}
                  checked={this.state.data.foodScraps}
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

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  };
};
const mapDispatchToProps = dispatch => {
  return {
    submitPost: data => dispatch(submitPost(data))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewPostForm);
