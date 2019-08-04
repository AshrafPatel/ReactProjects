//SEARCH FIELD
import {SEARCH_FIELD} from "./constant";

//REQUESTING DATA
//import {REQUESTING_POKEDEX, RECIEVED_POKEDEX, ERROR_RECIEVING_POKEDEX} from "./constant"

//SEARCH FIELD ACTION
export const getSearchRequest = (query) => ({
    type: SEARCH_FIELD,
    payload: query
})