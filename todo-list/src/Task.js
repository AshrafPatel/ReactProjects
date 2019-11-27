import React,{Component} from 'react'

class Task extends Component {
    constructor(props) {
        super(props)
        this.state = {
            editable: false,
            task: this.props.task
        }
        this.handleUpdate = this.handleUpdate.bind(this)
        this.toggleEdit = this.toggleEdit.bind(this)
        this.toggleRemove = this.toggleRemove.bind(this)
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

    handleUpdate(e) {
        e.preventDefault()
        this.props.updateTask(this.props.id, this.state.task)
        this.setState({
            editable: false
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
            <div>
                <li>{this.props.task}</li>
                <button onClick={this.toggleEdit}>Edit</button>
                <button onClick={this.toggleRemove}>X</button>
            </div>
            :
            <div>
                <form onSubmit={this.handleUpdate}>
                    <input 
                        onChange={this.handleChange} 
                        type="text" 
                        name="task" 
                        value={this.state.task}
                    />
                    <button>Update</button>
                </form>
            </div>
        )
    }
}

export default Task