import React from 'react'
import '../css/Warholstyle.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


const Navbar = () => {
    return (
        <div className="barra-de-usuario">
        <div className="personalizar">
          <Link to="/">INICIO</Link>
        </div>

        <div className="user">
          <ul>
            <li>
              <img src="/Imagenes/iconos/Carrito.svg" alt="carrito" />
            </li>
            <li>
              <Link to="/Login">Login</Link>
            </li>
          </ul>
        </div>
      </div>
    )
}

export default Navbar
