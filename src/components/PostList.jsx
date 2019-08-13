import React from "react";
import Post from "./Post";
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
        <div id="posts">
          {this.props.posts.map(post => (
            <Post
              username={post.user_name}
              email={post.user_email}
              distance={post.distance}
              foodScraps={post.food_scraps}
              waste={post.human_or_animal_waste}
              bokashi={post.bokashi}
            />
          ))}
        </div>
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
