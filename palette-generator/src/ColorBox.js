import React,{Component} from "react"
import "./ColorBox.css"

class ColorBox extends Component {
    render() {
        return (
            <div className="color-box" style={{background: this.props.color}}>
                <span>{this.props.name}</span>
                <span>MORE</span>
            </div>
        )
    }
}

export default ColorBox