const ADD_FAV = 'ADD_FAV'
const REMOVE_FAV = 'REMOVE_FAV'
const FILTER = 'FILTER'
const ORDER = 'ORDER'
const addFav = (personaje) => {
    return {
        type: ADD_FAV,
        payload: personaje
    }
}
const removeFav = (id) => {
    return {
        type: REMOVE_FAV,
        payload: id
    }
}
const filterCards = (gender) =>{
return {
    type: FILTER,
    payload: gender
}
}
const orderCards = (orden) =>{
return {
    type: ORDER,
    payload: orden
}
}
export {addFav, removeFav, ADD_FAV, REMOVE_FAV, FILTER, ORDER, filterCards, orderCards}

