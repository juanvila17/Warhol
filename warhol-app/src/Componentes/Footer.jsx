import React from 'react'
import '../css/Warholstyle.css'

const Footer = () => {
    return (
        <footer>
      <div className="logo-footer">
        <img src="/Imagenes/iconos/logo-warhol2.svg" alt="" />
      </div>
      <div className="items-info">
        <div>
          <h6>Contacto</h6>
          <p>warholcontacto@gmail.com</p>
        </div>
        <div>
          <h6>Ubicacion</h6>
          <p>San carlos-Uruguay</p>
        </div>
      </div>
      <div className="redes">
        <ul>
          <li>
            <a href="https://www.instagram.com/warhol.uy/"
              ><img src="/Imagenes/iconos/instagram-logo.png" alt=""
            /></a>
          </li>
          <li>
            <a href=""
              ><img
                src="/Imagenes/iconos/768px-Facebook_f_logo_(2019).svg.png"
                alt=""
            /></a>
          </li>
        </ul>
      </div>
    </footer>
    )
}

export default Footer;
