import DisplayNumber from "../components/DisplayNumber";
import { connect } from "react-redux";
function mapReduxStateToReactProps(state) {
  return {
    number: state.number,
  };
  /*
  쌩 리덕스의 다음 코드를 작성한 것과 동일하게 동작하게 된다.
  state = { number: store.getState().number };

  store.subscribe(
    function () {
      this.setState({ number: store.getState().number });
    }.bind(this)
  );

  number={this.state.number}
  */
}

export default connect(mapReduxStateToReactProps)(DisplayNumber);
// connect()()인 이유는 connect()를 통해 함수를 리턴하고 프레젠테이셔널 컴포넌트를 contain하고 있기 때문입니다.

/* 쌩 redux를 사용했을 경우
import React, { Component } from "react";
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
    return <DisplayNumber number={this.state.number} unit={this.props.unit}></DisplayNumber>;
  }
}
*/
