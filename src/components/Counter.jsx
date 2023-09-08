import React from "react";
import * as counterStyles from "./Counter.module.scss";
import { Button } from "antd";

export default class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: +this.props.children,
    };
  }

  increment = () => {
    const { value } = this.state;
    this.setState({ value: value + 1 });
  };

  decrement = () => {
    const { value } = this.state;
    this.setState({ value: value - 1 });
  };

  reset = () => {
    this.setState({ value: +this.props.children });
  };

  render() {
    const { value } = this.state;

    return (
      <>
        <div className={counterStyles.controls}>
          <Button onClick={this.increment}>+</Button>
          <p className={counterStyles.result}>{value}</p>
          <Button onClick={this.decrement}>-</Button>
        </div>
        <Button className={counterStyles.resetBtn} onClick={this.reset}>
          Reset
        </Button>
      </>
    );
  }
}
