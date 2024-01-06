import React, { Component } from "react";
import AddNumber from "../components/AddNumber";
import store from "../store";

// 기존 컴포넌트를 외부로 감싸서 redux와 관련된 처리를 하는 외부 컴포넌트(컨테이너 컴포넌트)
export default class extends Component {
  render() {
    return (
      <AddNumber
        onClick={function (size) {
          store.dispatch({ type: "INCREMENT", size: size });
        }}
      ></AddNumber>
    );
  }
}
