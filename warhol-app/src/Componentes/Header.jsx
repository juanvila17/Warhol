import React from 'react'
import '../css/Warholstyle.css'

const Header = () => {
    return (
        <div>
            <div className="logo">
        <img src="/Imagenes/iconos/logo-warhol2.svg" alt="warhol" />
      </div>

      <nav>
        <ul>
          <li className="buzos">
            <a href="#catalogo-buzos">Buzos</a>
          </li>
          <li className="remeras">
            <a href="#catalogo-remeras">Remeras</a>
          </li>
          <li className="gorros">
            <a href="#catalogo-gorros">Gorros</a>
          </li>
          <li className="gorras">
            <a href="#catalogo-gorras">Gorras</a>
          </li>
        </ul>
      </nav>
        </div>
    )
}

export default Header;
