import React,{Component} from "react"
import ColorBox from "./ColorBox"
import "./Palette.css"

class Palette extends Component {
    render() {
        const colorBox = this.props.colors.map(c => {
            return <ColorBox color={c.color} name={c.name}/>
        })
        return (
            <div className="palette">
                <div className="palette-colors">
                    {colorBox}
                </div>
            </div>
        )
    }
}

export default Palette