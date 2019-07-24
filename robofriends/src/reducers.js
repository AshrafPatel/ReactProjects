//SEARCH FIELD
import {CHANGE_SEARCH_FIELD} from "./constants"

//ROBOTS
import {REQUESTING_ROBOTS, RECEIVED_ROBOTS, ERROR_RECEIVING_ROBOTS } from "./constants"


//SEARCH STATE
const initialStateSearch = {
    searchField: ""
}

//SEARCH FIELD REDUCER
export const searchRobots = (state=initialStateSearch, action={}) => {
    switch(action.type) {
        case CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, {searchField: action.payload})
        default:
            return state
    }
}


//ROBOTS STATE
const initialStateRobots = {
    robots: [],
    error: ""
}

//GET ROBOTS REDUCER
export const getRobots = (state=initialStateRobots, action={}) => {
    switch(action.type) {
        case REQUESTING_ROBOTS:
            return state
        case RECEIVED_ROBOTS:
            return Object.assign({}, state, {robots: action.payload})
        case ERROR_RECEIVING_ROBOTS:
            return Object.assign({}, state, {error: action.payload})
        default:
            return state
    }
}