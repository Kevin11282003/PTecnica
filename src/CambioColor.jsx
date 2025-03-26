import React, { useState } from "react";

function CambioColor() {
  const [color, setColor] = useState("white");

  const changeColor = () => {
    // Cambiar el color de fondo del body global
    setColor(color === "white" ? "lightblue" : "white");
    document.body.style.backgroundColor = color === "white" ? "lightblue" : "white";
  };

  return (
    <div>
      <button onClick={changeColor}>Cambiar color de fondo</button>
    </div>
  );
}

export default CambioColor;
