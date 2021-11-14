import React from "react";
import { Link } from "react-router-dom";
import "../css/Loginstyle.css";

const Login = () => {
  return (
    <div>
      <div className="loginbox">
        <img className="iconousuario" src="/imagenes/iconos/user.svg" alt="" />
        <h2>Login</h2>
        <form action="/login" method="POST">
          <p>Usuario</p>
          <input type="text" name="usuario" placeholder="Ingresar Usuario" />
          <p>Contraseña</p>
          <input
            type="password"
            name="clave"
            placeholder="Ingresar Contraseña"
          />
          <input type="submit" name="" value="Iniciar Sesion" />
          <Link to="/register">Registrarse</Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
