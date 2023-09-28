import {ADD_FAV, REMOVE_FAV, FILTER, ORDER} from "../redux/actions"
import axios from "axios"

const initialState = {
    myFavorites: [],
    allCharacters: [],
  };

const reducer = (state = initialState, action) => {
switch (action.type) {
    case ADD_FAV:
    return { ...state, myFavorites: action.payload, allCharacters: action.payload };
    case REMOVE_FAV:
    return { ...state, myFavorites: action.payload, allCharacters: action.payload};
    case FILTER:
    const copyFilter = [...state.allCharacters];
    return {
        ...state,
        myFavorites: copyFilter.filter((ele) => ele.gender === action.payload)
    };
    case ORDER:
    const orderCopy = [...state.allCharacters];
    if (action.payload === "A") {
        orderCopy.sort((a, b) => a.id - b.id);
    } else if (action.payload === "D") {
        orderCopy.sort((a, b) => b.id - a.id);
    }
    return {
        ...state,
        myFavorites: orderCopy
    };
    default:
    return state;
}
};

export default reducer;