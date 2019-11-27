import React from "react"
import Task from "./Task"
import TodoForm from "./TodoForm"

class TodoList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            list: []
        }
        this.create = this.create.bind(this)
        this.remove = this.remove.bind(this)
        this.update = this.update.bind(this)
    }

    create(newTodo) {
        this.setState({
            list: [...this.state.list, newTodo]
        })
    }

    remove(id) {
        this.setState({
            list: this.state.list.filter(t => id !== t.id)
        })
    }

    update(id, updatedTask) {
        const newTodo = this.state.list.map(todo => {
            if (todo.id === id) {
                return {...todo, task: updatedTask}
            }
            return todo
        })
        this.setState({
            list: newTodo
        })
    }

    render() {
        const {list} = this.state
        const todos = list.map((todo) => {
            return (
                <Task 
                    task={todo.task} 
                    removeTask={this.remove}
                    updateTask={this.update}
                    key={todo.id} 
                    id={todo.id}
                />
            )
        })
        return (
            <div>
                <h1>Todo List</h1>
                <TodoForm newTodo={this.create}/>
                <ul>
                    {todos}
                </ul>
            </div>
        )
    }
}

export default TodoList