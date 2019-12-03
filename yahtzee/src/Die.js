import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  static defaultProps = {
    diceAwesome: ["one", "two", "three", "four", "five", "six"]
  }
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.handleClick(this.props.idx)
  }

  render() {
    let dieClass = `fas fa-dice-${this.props.diceAwesome[this.props.val-1]} fa-5x `;
    if (this.props.locked) dieClass += "Die-locked";
    return (
      <i
        className={dieClass}
        onClick={this.handleClick}
      />
    );
  }
}

export default Die;
