import SearchBar from "../searchBar/SearchBar"
import {NavLink, useNavigate} from "react-router-dom"
import "../Nav/Nav.css"

export default function Nav({onSearch, randomChar, setAccess}) {
    const navigate = useNavigate()
    const handleLogout = () => {
        setAccess(false)
        localStorage.removeItem('access');
        navigate('/')
    }
    return (

    <div className="nav"> 
    <SearchBar 
    onSearch={onSearch}/> 
    <NavLink to='/favorites'><button className="favorites">FAVORITES</button></NavLink>
    <button className="buttonRandomC"
    onClick={() => randomChar()}>RANDOM</button>

    <NavLink to='/about'> <button 
    className="buttonAbout">ABOUT</button></NavLink>

    <NavLink to='/home'><button
    className="buttonHome">HOME</button></NavLink>

    <button className="btnlo" onClick={handleLogout}>LOGOUT</button>
    </div>
    
    )}