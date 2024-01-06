import React, { Component } from "react";
import DisplayNumber from "../components/DisplayNumber";
import store from "../store";

// 기존 컴포넌트를 외부로 감싸서 redux와 관련된 처리를 하는 외부 컴포넌트(컨테이너 컴포넌트)
export default class extends Component {
  state = { number: store.getState().number };
  constructor(props) {
    super(props);
    store.subscribe(
      function () {
        this.setState({ number: store.getState().number });
      }.bind(this)
    );
  }
  render() {
    return <DisplayNumber number={this.state.number}></DisplayNumber>;
  }
}
