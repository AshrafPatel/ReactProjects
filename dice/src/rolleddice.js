import React, {Component} from "react";
import Die from "./die";
import "./rolleddice.css"

class RolledDice extends Component {
    static defaultProps = {
        sides: ["one", "two", "three", "four", "five", "six"]
    }
    constructor() {
        super()
        this.state = {
            die1: "one",
            die2: "one",
            rolling: false
        }
        this.randomRoll = this.randomRoll.bind(this)
    }

    randomRoll() {
        this.setState({
            die1: this.props.sides[Math.floor(Math.random() * 6)],
            die2: this.props.sides[Math.floor(Math.random() * 6)],
            rolling: true
        })

        setTimeout(() => {
            this.setState({rolling: false})
        }, 1000)
    }

    render() {
        const {die1, die2} = this.state;
        return (
            <div>
                <Die face={die1} rolling={this.state.rolling}/>
                <Die face={die2} rolling={this.state.rolling}/>
                <br/>
                <button className="rollButton" onClick={this.randomRoll} disabled={this.state.rolling}>
                    {this.state.rolling ? "Rolling..." : "Roll Dice!"}
                </button>
            </div>
        )
    }
}

export default RolledDice;
