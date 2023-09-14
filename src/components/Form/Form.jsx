import React from "react"
import Validation from './validations.js'
import './Form.css'

export default function Form (props) {
const {login} = props

    const [userData, setUserdata] = React.useState({
        email: "",
        password: ""
      })

      const [errors, setErrors] = React.useState({
        email: "",
        password: ""
         })
     const [enviado, setEnviado] = React.useState(false)

     const handleChange = event => {
        setUserdata({
            ...userData,
            [event.target.name]: event.target.value
        })
        setEnviado(false);
    }
    const handleSubmit = evento => {
        evento.preventDefault();
        setErrors(Validation(userData));
        setEnviado(true);
        login(userData);
      };
      
      return (
        <div className='Login-box'> 
          <div className="RAMA"></div>
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
          <p style={{ color: "orange" }}>{enviado && errors.email ? errors.email : null}</p>
            <div className="user-box">
              <input
                type="text"
                name="email"
                value={userData.email}
                onChange={handleChange}
                autoComplete="off"
              />
              <label>Email:</label>
            </div>
            <p style={{ color: "orange" }}>{enviado && errors.password ? errors.password : null}</p>
            <div className="user-box">
              <input
                type="password"
                name="password"
                value={userData.password}
                onChange={handleChange}
              />
              <label>Password:</label>
            </div>
            <button>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Submit
            </button>
          </form>
        </div>
      )
    }