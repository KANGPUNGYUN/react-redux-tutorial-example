import React, { Component } from "react";
import AddNumber from "../containers/AddNumber";

export default class AddNumberRoot extends Component {
  render() {
    return (
      <div>
        <h1>Add Number Root</h1>
        <AddNumber
        // store를 통해 값이 전달되기 때문에 props를 할 필요가 없다.
        // onClick={function (size) {
        //   this.props.onClick(size);
        // }.bind(this)}
        ></AddNumber>
      </div>
    );
  }
}
