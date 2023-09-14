import { NavLink } from "react-router-dom"
import "./card.css"
import {addFav, removeFav} from "/src/redux/actions.js"
import { connect } from "react-redux"
import { useState, useEffect } from "react"


function Card(props) {
   const {name, status, species, gender, origin,
      image, onClose, id, addFav, removeFav, myFavorites} = props
      const [isFav, setIsFav] = useState(false)

      const handleFavorite =() => {
         if (isFav) {
            setIsFav(false)
            removeFav(id)
         }else {
            setIsFav(true)
            addFav(props)
         }
      }

      useEffect(() => {
         myFavorites.forEach((fav) => {
            if (fav.id === props.id) {
               setIsFav(true)
            }
         });
      }, [myFavorites]);

   return (
      <div className="Card">
         <NavLink to={`/detail/${id}`} className="NavLink">More info...</NavLink>
         <button className="closeC"
         onClick={() => onClose(id)}
         ></button>
         {isFav ? ( <button className="heartBon" onClick={handleFavorite}></button>) : (<button className="heartBoff"onClick={handleFavorite}></button>)}
         <h2>{name}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <img src={image} alt='' className="imagenderef" />
      </div>
   );
}
const mapStateToProps = (state) =>{
return {
   myFavorites: state.myFavorites
}
}
const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (props) => {dispatch(addFav(props))},
      removeFav: (id) => {dispatch(removeFav(id))}
   }
}
export default connect(mapStateToProps, mapDispatchToProps)(Card)