import React from "react";
import "./Selection.css";
import Prompt from "./Prompt";
import Receive from "./Receive";
import Share from "./Share";
import { connect } from "react-redux";

class Selection extends React.Component {
  render() {
    return (
      <div id="selection">
        {this.props.view === "selection" && <Prompt />}
        {this.props.view === "receive" && <Receive />}
        {this.props.view === "share" && <Share />}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    view: state.view
  };
};

export default connect(mapStateToProps)(Selection);
