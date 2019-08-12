import React from "react";
import "./App.css";
import Welcome from "./components/Welcome";
import FormContainer from "./components/FormContainer";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    //welcome, form, home
    this.state = {
      view: "welcome"
    };
  }

  changeView(newView) {
    this.setState({ view: newView });
  }

  render() {
    return (
      <div className="App">
        {this.state.view === "welcome" && (
          <Welcome changeView={() => this.changeView("form")} />
        )}
        {this.state.view === "form" && (
          <FormContainer changeView={() => this.changeView("home")} />
        )}
      </div>
    );
  }
}
