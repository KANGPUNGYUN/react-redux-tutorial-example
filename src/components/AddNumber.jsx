import React, { Component } from "react";
// import store from "../store";

export default class AddNumber extends Component {
  state = { size: 1 };
  render() {
    return (
      <div>
        <h1>Add Number</h1>
        <input
          type="button"
          value="+"
          onClick={function () {
            // store를 통해 값이 전달되기 때문에 props를 할 필요가 없다.
            // this.props.onClick(this.state.size);

            // 리덕스와 관련된 처리는 모두 컨테이너 컴포넌트에서 처리하기 때문에 아래 store.dispatch 함수를 제거하고 this.props.onClick 함수를 이용
            // store.dispatch({ type: "INCREMENT", size: this.state.size });

            this.props.onClick(this.state.size);
          }.bind(this)}
        ></input>
        <input
          type="text"
          value={this.state.size}
          onChange={function (e) {
            this.setState({ size: Number(e.target.value) });
          }.bind(this)}
        ></input>
      </div>
    );
  }
}
