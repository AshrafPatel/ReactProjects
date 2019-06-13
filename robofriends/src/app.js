import React from "react"
import Cardlist from "./cardlist"
import SearchBox from "./searchbox.js"
import "./app.css"

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchQuery: ""
        }
    }

    onSearchHandler = (event) => {
        this.setState({searchQuery: event.target.value});
    }

    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchQuery.toLowerCase())
        })

        return (
            <div className = "tc" >
                <h1>Robot Friends</h1>
                <SearchBox searchChange={this.onSearchHandler}/>
                <Cardlist robots = {filteredRobots}/> 
            </div>
        )
    }
}

export default App