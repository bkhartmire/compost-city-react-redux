import React from "react";
import "./Share.css";
import { connect } from "react-redux";
import { submitZipcode } from "../actions";
import PostList from "./PostList";

class Share extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zipcode: "",
      radius: "2"
    };
  }
  handleChange(e) {
    this.setState({ zipcode: e.target.value });
  }

  handleSelect(e) {
    this.setState({ radius: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    e.target.reset();
    this.props.submitZipcode({
      zipcode: this.state.zipcode,
      radius: this.state.radius,
      allPosts: this.props.allPosts
    });
  }
  render() {
    return (
      <div id="share">
        <h5 className="zip-code-prompt">
          How far would you like to search for people to share with?
        </h5>
        <form id="zipcode-form" onSubmit={this.handleSubmit.bind(this)}>
          <div className="form-group">
            <input
              onChange={this.handleChange.bind(this)}
              name=""
              className="radius"
              placeholder="Please enter your zip code:"
            />
            <select onChange={this.handleSelect.bind(this)} class="radius">
              <option value="2">2 miles</option>
              <option value="5">5 miles</option>
              <option value="10">10 miles</option>
              <option value="15">15 miles</option>
              <option value="20">20 miles</option>
            </select>
            <button
              type="submit"
              value="share"
              className="button"
              onChange={e => this.props.handleType(e.target.value)}
            >
              {" "}
              Search{" "}
            </button>
          </div>
        </form>
        {this.props.result.length > 0 && <PostList posts={this.props.result} />}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    result: state.postResults,
    allPosts: state.posts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    submitZipcode: data => dispatch(submitZipcode(data))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Share);
