import React from "react";
import '../css/Warholstyle.css'
import {listaDeBuzos, listaDeGorras, listaDeRemeras, listaDeGorros} from '../js/Lista-de-ropa'

const Main = () => {
  return (
    <main>
      <h1>Buzos</h1>
      <div className="catalogo-buzos">
        {listaDeBuzos.map(buzo => (<div className="wrhl-tarjeta" key={"buzo-" + buzo.id}>
          <img className="img-tarjeta" src={buzo.imagen} alt={buzo.nombre}/>
          <h4>{buzo.nombre}</h4>
          <h5> $ {buzo.precio}</h5>
        </div>) )}
      </div>

      <h1>Remeras</h1>
      <div className="catalogo-remeras">
        {listaDeRemeras.map(remera => (<div className="wrhl-tarjeta" key={"remera-" + remera.id}>
          <img className="img-tarjeta" src={remera.imagen} alt={remera.nombre}/>
          <h4>{remera.nombre}</h4>
          <h5> $ {remera.precio}</h5>
        </div>) )}
      </div>

      <h1>Gorros</h1>
      <div className="catalogo-gorros">
        {listaDeGorros.map(gorro => (<div className="wrhl-tarjeta" key={"gorro-" + gorro.id}>
          <img className="img-tarjeta" src={gorro.imagen} alt={gorro.nombre}/>
          <h4>{gorro.nombre}</h4>
          <h5> $ {gorro.precio}</h5>
        </div>) )}
      </div>

      <h1>Gorras</h1>
      <div className="catalogo-gorras">
        {listaDeGorras.map(gorra => (<div className="wrhl-tarjeta" key={"gorra-" + gorra.id}>
          <img className="img-tarjeta" src={gorra.imagen} alt={gorra.nombre}/>
          <h4>{gorra.nombre}</h4>
          <h5> $ {gorra.precio}</h5>
        </div>) )}
      </div>
    </main>
  );
};

export default Main;
