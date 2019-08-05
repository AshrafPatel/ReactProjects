//SEARCH FIELD
import {SEARCH_FIELD} from "./constant";

//REQUESTING DATA
import {REQUESTING_POKEDEX, RECIEVED_POKEDEX, COMPLETING_POKEDEX} from "./constant"

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

//POKEMON DATA STATE
const initialPokemonState = {
    pokemon: [],
    loaded: false
}

//GET POKEMON REDUCER
export const getPokemon = (state = initialPokemonState, action={}) => {
    switch(action.type) {
        case RECIEVED_POKEDEX:
            return Object.assign({}, state, {pokemon: action.payload, loaded: true})
        case REQUESTING_POKEDEX:
            return state
        case COMPLETING_POKEDEX:
            return Object.assign({}, state, {pokemon: action.payload})
        default:
            return state
    }
}

