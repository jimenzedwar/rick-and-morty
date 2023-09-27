import axios from "axios"

const ADD_FAV = 'ADD_FAV'
const REMOVE_FAV = 'REMOVE_FAV'
const FILTER = 'FILTER'
const ORDER = 'ORDER'


const addFav = (character) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    return async (dispatch) => {
    const { data } = await axios.post(endpoint, character)
        return dispatch({
            type: ADD_FAV,
            payload: data,
        });
    };
    };
const removeFav = (id) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
   return async (dispatch) => {
    const { data } = await axios.delete(endpoint)
         return dispatch({
            type: REMOVE_FAV,
            payload: data,
      });
      }
   };
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

