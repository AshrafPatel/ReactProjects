import React,{Component} from "react";
import uuid from "uuid/v4"

class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.newTodo({...this.state, id: uuid()})
        this.setState({
            task: ""
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="task"></label>
                <input 
                    type="text"
                    id="task"
                    placeholder={this.state.task}
                    value={this.state.task}
                    onChange={this.handleChange}
                    name="task"/>
                <button>Add</button>
            </form>
        )
    }
}

export default TodoForm