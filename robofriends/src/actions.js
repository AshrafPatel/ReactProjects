//SEARCH FIELD
import {CHANGE_SEARCH_FIELD} from "./constants"

//ROBOTS
import {REQUESTING_ROBOTS, RECEIVED_ROBOTS, ERROR_RECEIVING_ROBOTS } from "./constants"


//SEARCH FIELD
export const setSearchField = (searchQuery) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: searchQuery
})


//ROBOTS
export const requestRobots = (dispatch)=> {
    dispatch({type: REQUESTING_ROBOTS})
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => {
        return response.json()                //convert data to JSON return
    })
    .then(data => {
        if (Object.keys(data).length === 0 || data.length === 0)
            throw new Error();
        return data;
    })
    .then(data => {
        dispatch({type: RECEIVED_ROBOTS, payload: data})
    })
    .catch(error => dispatch({type: ERROR_RECEIVING_ROBOTS, payload: error}))
}