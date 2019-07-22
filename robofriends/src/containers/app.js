import React from "react"
import Cardlist from "../components/cardlist"
import SearchBox from "../components/searchbox.js"
import Scroll from "../components/scroll.js"
import {setSearchField} from "../actions"
import {connect} from "react-redux"
import "./app.css"

const mapStateToProps = state => {
    return {
        searchField: state.searchField
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSearchHandler: (event) => dispatch(setSearchField(event.target.value))
    }
}


class App extends React.Component {
    constructor() {
        super();
        this.state = {
            robots: []
        }
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
        const {robots} = this.state;
        const {onSearchHandler, searchField} = this.props
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        })
        return (
            <div className="tc">
                <h1>Robot Friends</h1>
                <SearchBox searchChange={onSearchHandler}/>
                <Scroll>
                    <Cardlist robots = {filteredRobots}/>
                </Scroll>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)