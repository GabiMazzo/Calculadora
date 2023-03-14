import React from "react";
import "../hojas-de-estilo/Boton.css";

function Boton(props) {
  const esOperador = (valor) => {
    return isNaN(valor) && (valor != ".") && (valor != "="); //si no es un num o punto.
    // ""   " "  signo igual.
  };

  return (
    <div
      className={`boton-contenedor ${
        esOperador(props.children) ? "operador" : "" }`.trimEnd()}
        onClick ={() => props.manejarClic(props.children)}>

     

      {props.children}
    </div>
  );
}

export default Boton;
