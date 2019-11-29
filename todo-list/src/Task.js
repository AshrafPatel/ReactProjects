import React,{Component} from 'react'
import "./Task.css"

class Task extends Component {
    constructor(props) {
        super(props)
        this.state = {
            editable: false,
            task: this.props.task,
            completed: false
        }
        this.toggleUpdate = this.toggleUpdate.bind(this)
        this.toggleEdit = this.toggleEdit.bind(this)
        this.toggleRemove = this.toggleRemove.bind(this)
        this.toggleCompleted = this.toggleCompleted.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    toggleEdit() {
        this.setState({
            editable: !this.state.editable
        })
    }

    toggleRemove() {
        this.props.removeTask(this.props.id)
    }

    toggleUpdate(e) {
        e.preventDefault()
        if (this.state.task !== "") {
            this.props.updateTask(this.props.id, this.state.task)
            this.setState({
                editable: false
            })
        } else {
            alert("Please enter a task")
        }
    }

    toggleCompleted() {
        this.props.completeTask(this.props.id)
        this.setState({
            completed: !this.state.completed
        })
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            !this.state.editable ?
            <div className="showTodo">
                <li onClick={this.toggleCompleted} className={this.state.completed && "completed"}>{this.props.task}</li>
                <button className="btn btn-edit" onClick={this.toggleEdit}>🖊</button>
                <button className="btn btn-delete" onClick={this.toggleRemove}>🗑</button>
            </div>
            :
            <div>
                <form onSubmit={this.toggleUpdate}>
                    <input 
                        onChange={this.handleChange} 
                        type="text" 
                        name="task" 
                        value={this.state.task}
                    />
                    <button className="btn btn-update">✔</button>
                </form>
            </div>
        )
    }
}

export default Task