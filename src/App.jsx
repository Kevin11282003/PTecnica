import React from "react";
import CambioColor from "./CambioColor";
import ModifiTexto from "./ModifiTexto";
import ValidarNum from "./ValidarNum";
import MostrarObjeto from "./MostrarObjeto";
import Lista from "./Lista";
import "./App.css";


function App() {
  return (
    <div className="app-container">
      <h1>Prueba Técnica</h1>

      <div className="component-container">
        <h2>Cambiar el color de fondo</h2>
        <CambioColor />
      </div>

      <div className="component-container">
        <h2>Modificar tres textos</h2>
        <ModifiTexto />
      </div>

      <div className="component-container">
        <h2>Validar si un número es mayor a 10</h2>
        <ValidarNum />
      </div>

      <div className="component-container">
        <h2>Mostrar los datos de un objeto</h2>
        <MostrarObjeto />
      </div>

      <div className="component-container">
        <h2>Llamar y mostrar los datos de una lista</h2>
        <Lista />
      </div>
    </div>
  );
}

export default App;
