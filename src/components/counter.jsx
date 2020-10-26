import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.selectRef = React.createRef();
  }

  componentDidMount() {
    console.log(this.props);
  }

  increment = () => {
    let { value } = this.selectRef.current;
    this.props.increment(value * 1);
  };
  decrement = () => {
    let { value } = this.selectRef.current;
    this.props.decrement(value * 1);
  };
  incrementIfOdd = () => {
    let count = this.props.count;
    let { value } = this.selectRef.current;
    if (count % 2 !== 0) {
      this.props.increment(value * 1);
    }
  };
  incrementAsync = () => {
    let { value } = this.selectRef.current;
    this.props.incrementAsync(value*1, 2000);
  };

  render() {
    let count = this.props.count;
    return (
      <div>
        <h3>当前计数为{count}</h3>
        <select ref={this.selectRef}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        &nbsp;
        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.incrementIfOdd}>increment if odd</button>&nbsp;
        <button onClick={this.incrementAsync}>increment if async</button>
      </div>
    );
  }
}

export default Counter;
