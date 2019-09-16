import React, {Component} from "react"
import Color from "../Color/Color"

class ColorApp extends Component {
    static defaultProps = {
        numBoxes: 18
    }

    constructor(props) {
        super(props);
    }

    render() {
        const boxes = Array.from({length: this.props.numBoxes}).map(
            () => <Color />
        )
        return (
            <div className="colorsApp">{boxes}</div>
        )
    }
}

export default ColorApp