import React from "react";
import "./Receive.css";
import NewPostForm from "./NewPostForm";
import NewPostModal from "./NewPostModal";
import { connect } from "react-redux";
import { submitPost } from "../actions";

class NewPost extends React.Component {
  render() {
    return (
      <div id="receive">
        {this.props.showModal ? <NewPostModal /> : <NewPostForm />}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    showModal: state.showModal
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
)(NewPost);
