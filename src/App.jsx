import './App.css';
import Cards from './components/cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import React, { useState } from "react"
import axios from 'axios'
import About from "./components/about/About.jsx"
import Detail from "./components/Detail/Detail.jsx"
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Error from "./components/Error/Error.jsx"
import Form from './components/Form/Form';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Favorites from "./components/favorites/Favorites"
function App() {

   const [characters, setCharacters] = React.useState([]);

   function onSearch (id) {
      axios.get(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.id) {
         if(!characters.some((character) => character.id === data.id)) {
         setCharacters((prevCharacters)=> [...prevCharacters, data]) 
      } else {
            window.alert('Este personaje ya esta en la lista') } }
            else {
               window.alert('No hay personajes con este ID!')
            }
            })
            .catch(()=> alert("Hubo un error al cargar los datos de la API."))
         }



         function randomChar () {
           const numeroRandom = Math.floor(Math.random() * 826) + 1
            axios.get(`https://rickandmortyapi.com/api/character/${numeroRandom}`).then(({ data }) => {
               if (data.id) {
               if(!characters.some((character) => character.id === data.id)) {
               setCharacters((prevCharacters)=> [...prevCharacters, data]) 
            } }
                  })
               }
               
const onClose = (id) => {
setCharacters(characters.filter((character) => {
      return character.id != id
   }
   ))
}

const navigate = useNavigate();

const [access, setAccess] = React.useState(() => {
   const cachedAccess = localStorage.getItem('access');
   return cachedAccess === 'true';
});
const EMAIL = "jimenzeddi@gmail.com"
const PASSWORD = "contra22"

const login = (userData) => {
   if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      localStorage.setItem('access', 'true');
      navigate('/home');
   }
}
const location = useLocation()

useEffect(() => {
   const cachedCharacters = localStorage.getItem('characters');
   const cachedAccess = localStorage.getItem('access');

   if (cachedCharacters) {
      setCharacters(JSON.parse(cachedCharacters));
   }

   if (cachedAccess) {
      setAccess(true);
   }
}, []);

useEffect(() => {
   localStorage.setItem('characters', JSON.stringify(characters));
}, [characters]);

useEffect(() => {
   if (!access && location.pathname !== "/") {
      navigate('/');
   }
}, [access, navigate, location.pathname]);

   return (
      <div className='App'>
         {location.pathname !== "/" && <Nav onSearch={onSearch} randomChar={randomChar} setAccess={setAccess}/>}
         <Routes>
            <Route path='/' element={<Form login={login}/>}/>
            <Route path='/home'
         element={<Cards characters={characters} onClose={onClose}/>}/>
         <Route path='/about' element={<About />}/>
         <Route path='detail/:id' element={<Detail />}/>
         <Route path='/favorites' element= {<Favorites onClose={onClose}/>}/>
         <Route path='*' element={<Error />}/>
         </Routes>
      </div>
   );
}

export default App; 
