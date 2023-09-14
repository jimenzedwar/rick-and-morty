import {ADD_FAV, REMOVE_FAV, FILTER, ORDER} from "../redux/actions"

const getLocalStorageFavorites = () => {
    const favorites = localStorage.getItem("myFavorites");
    return favorites ? JSON.parse(favorites) : [];  };

    const initialState = {
        myFavorites: getLocalStorageFavorites(),
        allCharacters: []
    };

const reducer = (state = initialState, action) => {
switch (action.type) {
    case ADD_FAV:
    const updatedFavorites = [...state.myFavorites, action.payload];
    localStorage.setItem("myFavorites", JSON.stringify(updatedFavorites));
    return {
        ...state,
        myFavorites: updatedFavorites,
        allCharacters: [...state.allCharacters, action.payload]
    };
    case REMOVE_FAV:
    const filteredFavorites = state.myFavorites.filter(
        (ele) => ele.id !== action.payload
        );
    localStorage.setItem("myFavorites", JSON.stringify(filteredFavorites));
    return {
        ...state,
        myFavorites: filteredFavorites
    };
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