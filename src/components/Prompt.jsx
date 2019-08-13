import React from "react";
import { connect } from "react-redux";

class Prompt extends React.Component {
  render() {
    return (
      <div id="prompt">
        <h5>Would you like to receive or share compost?</h5>
        <div className="form-group">
          <button
            type="submit"
            value="receive"
            className="button"
            onClick={e => this.props.selectType(e.target.value)}
          >
            Receive
          </button>
          <button
            type="submit"
            value="share"
            className="button"
            onClick={e => this.props.selectType(e.target.value)}
          >
            Share
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    selectType: type => {
      dispatch({ type: "SET_USER_TYPE", payload: type });
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Prompt);
