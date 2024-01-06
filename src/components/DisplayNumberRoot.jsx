import React, { Component } from "react";
import DisplayNumber from "../containers/DisplayNumber";

export default class DisplayNumberRoot extends Component {
  render() {
    return (
      <div>
        <h1>Display Number Root</h1>
        <DisplayNumber
        // store를 통해 값이 전달되기 때문에 props를 할 필요가 없다.
        // number={this.props.number}
        ></DisplayNumber>
      </div>
    );
  }
}
