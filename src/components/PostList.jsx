import React from "react";
import "./PostList.css";
import { connect } from "react-redux";

class PostList extends React.Component {
  render() {
    return (
      <div id="postlist">
        <p id="query-results">
          There are {this.props.posts.length} result(s) within{" "}
          {this.props.query.radius} miles of {this.props.query.zipcode} zip
          code.
        </p>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    query: state.query
  };
};

export default connect(mapStateToProps)(PostList);
