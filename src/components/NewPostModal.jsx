import React from "react";
import Modal from "react-bootstrap/Modal";
import { connect } from "react-redux";
import "./Receive.css";

class NewPostModal extends React.Component {
  render() {
    return (
      <Modal show={true} animation={true} centered={true}>
        <Modal.Header closeButton>
          <Modal.Title>Post Submitted</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Thank you for submitting a new post!</p>
          <p> Now please wait for another user to contact you.</p>
        </Modal.Body>

        <Modal.Footer>
          <button onClick={this.props.goHome} className="green-btn-modal">
            Exit
          </button>
        </Modal.Footer>
      </Modal>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    goHome: () => dispatch({ type: "LOGOUT_USER" })
  };
};

export default connect(
  null,
  mapDispatchToProps
)(NewPostModal);
