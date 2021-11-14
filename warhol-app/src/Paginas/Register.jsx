import React from "react";
import "../css/Loginstyle.css";

const Register = () => {
  return (
    <div>
      <div className="loginbox">
        <img className="iconousuario" src="/imagenes/iconos/user.svg" alt="" />
        <h2>Registro</h2>
        <form action="/register" method="POST">
          <p>Usuario</p>
          <input type="text" name="usuario" placeholder="Ingresar Usuario" />
          <p>Nombre</p>
          <input type="text" name="nombre" placeholder="Ingresar Nombre" />
          <p>Contraseña</p>
          <input
            type="password"
            name="clave"
            placeholder="Ingresar Contraseña"
          />
          <input type="submit" name="" value="Registrarse" />
        </form>
      </div>
    </div>
  );
};

export default Register;
