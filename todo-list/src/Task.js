import React,{Component} from "react"

class Task extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        const {task} = this.props
        return (
            <div>
                <li>{task}</li>
                <button>Edit</button>
                <button>X</button>
            </div>
        )
    }
}

export default Task