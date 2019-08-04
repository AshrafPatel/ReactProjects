//SEARCH FIELD
import {SEARCH_FIELD} from "./constant";

//REQUESTING DATA
import {REQUESTING_POKEDEX, RECIEVED_POKEDEX, ERROR_RECIEVING_POKEDEX} from "./constant"

//SEARCH INITIAL STATE
const initialSearch = {
    searchBox: ""
}

//SEARCH REDUCER
export const searchPokemon = (state = initialSearch, action ={}) => {
    switch(action.type) {
        case SEARCH_FIELD:
            state = {...state, searchBox: action.payload}
            break;
        default:
            break
    }
    return state;
}

