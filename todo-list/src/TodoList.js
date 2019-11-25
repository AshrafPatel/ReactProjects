import React,{Component} from "react"
import Task from "./Task"

class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [
                {task: "Finish Todo App"},
                {task: "Complete React courses (2)"},
                {task: "Complete React-Native courses (3)"},
                {task: "Complete Advanced Web Developer course"},
                {task: "Complete junior to senior web developer course"},
                {task: "Complete C and C++ course"},
                {task: "Complete Computer Science degree"}]
        }
    }
    render() {
        const {list} = this.state
        const todos = list.map((todo) => {
            return <Task task={todo.task}/>
        })
        return (
            <div>
                <h1>Todo List</h1>
                <ul>
                    {todos}
                </ul>
            </div>
        )
    }
}

export default TodoList