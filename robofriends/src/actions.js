import {CHANGE_SEARCH_FIELD} from "./constants"

export const setSearchField = (searchQuery) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: searchQuery
})