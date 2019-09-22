import React from "react";

class Box extends React.Component {
    constructor(props) {
        super(props);
        this.handleRemove = this.handleRemove.bind(this);
    }

    handleRemove() {
        this.props.removeBox(this.props.boxObj.id)
    }

    render() {
        const {boxObj} = this.props;
        return (
            <div 
                style={{
                    backgroundColor: boxObj.color, 
                    width: Number(boxObj.width), 
                    height: Number(boxObj.height)}}
                onClick={this.handleRemove}>
            </div>
        )
    }
}

export default Box