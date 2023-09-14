import React from "react"
import "../searchBar/SearchBar.css"

export default function SearchBar({onSearch}) {

   const [id, setId] = React.useState("");

   const handleChange = (event) => {
      setId(event.target.value)
   }
   const handleAdd = () => {
      setId('')
      onSearch(id)
    }
   return (

      <div>
         <input
         className="inputB"
         type='search' 
         value={id} 
         onChange={handleChange} />
         <button 
         className="btnAdd" 
         onClick={handleAdd}>ADD</button> 
         </div>
   );
}
