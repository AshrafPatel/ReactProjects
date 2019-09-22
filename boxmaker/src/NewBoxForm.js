import React from "react";
import uuid from "uuid/v4";

class NewBoxForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width: "",
            height: "",
            color: "#000000"
        }
        this.updateForm = this.updateForm.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    updateForm(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    onSubmit(evt) {
        evt.preventDefault();
        const newBox = {...this.state, id: uuid()}
        this.props.createBox(newBox)
        this.setState({
            width: "",
            height: "",
            color: "#000000"
        })
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <div>
                    <label htmlFor="width">Width</label>
                    <input 
                        type="number"
                        min = "30"
                        max = "1000"
                        id="width"
                        name="width"
                        onChange={this.updateForm}
                        value={this.state.width}
                        required={true}
                    />
                </div>
                <div>
                    <label htmlFor="height">Height</label>
                    <input 
                        type="number"
                        min = "30"
                        max = "1000"
                        id="height"
                        name="height"
                        onChange={this.updateForm}
                        value={this.state.height}
                        required={true}
                    />
                </div>
                <div>
                    <label htmlFor="color">Color</label>
                    <input 
                        type="color"
                        id="color"
                        name="color"
                        onChange={this.updateForm}
                        value={this.state.color}
                        required={true}
                    />
                </div>
                <button>Add Box</button>
            </form>
        )
    }
}

export default NewBoxForm;