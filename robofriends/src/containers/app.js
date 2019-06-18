import React from "react"
import Cardlist from "../components/cardlist"
import SearchBox from "../components/searchbox.js"
import Scroll from "../components/scroll.js"
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

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => {
                return response.json()                //convert data to JSON return
            })
            .then(users => {
                this.setState({robots: users})      //set state
            });
    }

    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchQuery.toLowerCase())
        })
        return (
            <div className="tc">
                <h1>Robot Friends</h1>
                <SearchBox searchChange={this.onSearchHandler}/>
                <Scroll>
                    <Cardlist robots = {filteredRobots}/>
                </Scroll>
            </div>
        )
    }
}

export default App