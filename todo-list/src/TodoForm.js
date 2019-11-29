import React,{Component} from "react";
import uuid from "uuid/v4";
import "./TodoForm.css"

class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.state.task !== "") {
            this.props.newTodo({...this.state, id: uuid()});
            this.setState({
                task: ""
            });
        } else {
            alert("Please enter a task before submitting")
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="task"/>
                <input 
                    type="text"
                    id="task"
                    placeholder="Please enter your task"
                    value={this.state.task}
                    onChange={this.handleChange}
                    name="task"
                />
                <button className="btn btn-add">+</button>
            </form>
        )
    }
}

export default TodoForm