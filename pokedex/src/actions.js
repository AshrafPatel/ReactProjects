//SEARCH FIELD
import {SEARCH_FIELD} from "./constant";

//REQUESTING DATA
import {REQUESTING_POKEDEX, RECIEVED_POKEDEX, COMPLETING_POKEDEX} from "./constant"

//SEARCH FIELD ACTION
export const getSearchRequest = (query) => ({
    type: SEARCH_FIELD,
    payload: query
})

//POKEMON
export const requestPokemon = (dispatch) => {
    let arr = [];
    dispatch({type: REQUESTING_POKEDEX})
    for (let i = 1; i < 808; i++) {
        fetch("https://pokeapi.co/api/v2/pokemon/" + i)//+ char + ".png")
        .then(result => result.json())
        .then(data => {
        let char = i;
        if (i < 10) {
            char = "00" + i;
        } else if (i > 9 && i < 100) {
            char = "0" + i;
        }
        let obj = {
            name: data.name,
            image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/" + char + ".png",
            exp: data.base_experience,
            types: data.types
        }
        arr.push(obj)
        dispatch({type: COMPLETING_POKEDEX, payload: [...arr]})
        })
    }
    dispatch({type: RECIEVED_POKEDEX, payload: [...arr]})
}