import React from "react"
import Cardlist from "../components/cardlist"
import SearchBox from "../components/searchbox.js"
import Scroll from "../components/scroll.js"

//Redux imports
import {setSearchField, requestRobots} from "../actions"
import {connect} from "react-redux"

import "./app.css"



//Redux Variables helps turn state into props
const mapStateToProps = state => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.getRobots.robots,
        error: state.getRobots.error
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onSearchHandler: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => requestRobots(dispatch)
    }
}




class App extends React.Component {
    componentDidMount() {
        this.props.onRequestRobots();
    }

    render() {
        const {onSearchHandler, searchField, robots} = this.props
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