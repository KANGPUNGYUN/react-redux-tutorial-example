import React, { Component } from "react";
import "./App.css";
import AddNumberRoot from "./components/AddNumberRoot";
import DisplayNumberRoot from "./components/DisplayNumberRoot";

class App extends Component {
  state = { number: 0 };
  render() {
    return (
      <div className="App">
        <h1>Root</h1>
        <AddNumberRoot
        // store를 통해 값이 전달되기 때문에 props를 할 필요가 없다.
        // onClick={function (size) {
        //   this.setState({ number: this.state.number + size });
        // }.bind(this)}
        ></AddNumberRoot>
        <DisplayNumberRoot
        // store를 통해 값이 전달되기 때문에 props를 할 필요가 없다.
        // number={this.state.number}
        ></DisplayNumberRoot>
      </div>
    );
  }
}

export default App;
