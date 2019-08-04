//SEARCH FIELD
import {SEARCH_FIELD} from "./constant";

//REQUESTING DATA
//import {REQUESTING_POKEDEX, RECIEVED_POKEDEX, ERROR_RECIEVING_POKEDEX} from "./constant"

//SEARCH INITIAL STATE
const initialSearch = {
    searchBox: ""
}

//SEARCH REDUCER
export const setSearchField = (state = initialSearch, action ={}) => {
    switch(action.type) {
        case SEARCH_FIELD:
            return state = Object.assign({}, state, {searchBox: action.payload})
        default:
            return state;
    }
}

