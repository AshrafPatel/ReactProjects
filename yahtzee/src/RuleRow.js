import React, { Component } from 'react';
import './RuleRow.css'

class RuleRow extends Component {
  render() {
    const {score, name, doScore, description} = this.props;
    return (
      <tr className={`RuleRow RuleRow-${score === undefined ? "active" : "disabled"}`} 
        onClick={score === undefined ? doScore : null}>
        <td className="RuleRow-name">{name}</td>
        <td className="RuleRow-score">{score === undefined ? description : score}</td>
      </tr>
    )
  }
}

export default RuleRow;