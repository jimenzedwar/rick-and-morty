import { useSelector } from "react-redux/es/hooks/useSelector";
import Card from "../card/Card";
import { filterCards, orderCards } from "../../redux/actions";
import { useDispatch } from "react-redux";
import React from "react";
import "./Favorites.css"

export default function Favorites () {

const dispatch = useDispatch()

const myFavorites = useSelector(state => state.myFavorites);

const handleOrder = (e) => {
   dispatch(orderCards(e.target.value))
   setAux(true)
}
const handleFilter = (e) => {
   dispatch(filterCards(e.target.value))
}

const [aux, setAux] = React.useState(false)
   return (
      <div className="favC">
         <div className="select">
         <select name="" onChange={handleOrder}>
         <option value="A">Ascendente</option>
         <option value="D">Descendente</option>
         </select>
         </div>
         <div className="select2">
         <select name="" onChange={handleFilter}>
         <option value="Male">Male</option>
         <option value="Female">Female</option>
         <option value="Genderless">Genderless</option>
         <option value="unknown">Unknown</option>
         </select>
         </div>
         <div className='Favorites'>
         {myFavorites?.map(ele => (
            <Card
               id={ele.id}
               key={ele.id}
               name={ele.name}
               status={ele.status}
               species={ele.species}
               gender={ele.gender}
               origin={ele.origin.name}
               image={ele.image}
            />
         ))}
      </div>
      </div>
   );
}