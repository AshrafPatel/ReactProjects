import React, {Component} from "react";
import NewBoxForm from "./NewBoxForm";
import Box from "./Box"

class BoxList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            boxArr: []
        }
        this.createBox = this.createBox.bind(this);
        this.removeBox = this.removeBox.bind(this);
    }

    createBox(newBox) {
        this.setState({
            boxArr: [...this.state.boxArr, newBox]
        })
    }

    removeBox(id) {
        const filtered = this.state.boxArr.filter(box => box.id !== id)
        this.setState({
            boxArr: filtered
        })
    }


    render() {
        let boxArr = this.state.boxArr.map(e => {
            return <Box key={e.id} boxObj={e} removeBox={this.removeBox}/>
        })
        return (
            <div>
                <h1>Create Box Application</h1>
                <NewBoxForm createBox={this.createBox}/>
                {boxArr}
            </div>
        )
    }
}

export default BoxList;