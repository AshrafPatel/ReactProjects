import React,{Component} from "react";
import "./Color.css"
import {choice} from "../choice"

class Color extends Component {
    static defaultProps = {
        allColors: ["blue", "green", "orange", "pink", "red", "black", "brown", "magenta", "yellow"]
    }
    constructor(props) {
        super(props);
        this.state = {
            color: choice(this.props.allColors)
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        let newColors;
        do {
            newColors = choice(this.props.allColors)
        } while (newColors === this.state.color)
        this.setState({
            color: newColors
        })
    }

    render() {
        return (
            <div 
                className="colors" 
                style={{backgroundColor: this.state.color}} 
                onClick={this.handleClick}>
            </div>
        )
    }
}

export default Color