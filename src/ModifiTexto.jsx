import React, { useState } from "react";

function ModifiTexto() {
  const [texts, setTexts] = useState(["Texto 1", "Texto 2", "Texto 3"]);

  const modifyText = () => {
    setTexts(["Nuevo texto 1", "Nuevo texto 2", "Nuevo texto 3"]);
  };

  return (
    <div>
      <p>{texts[0]}</p>
      <p>{texts[1]}</p>
      <p>{texts[2]}</p>
      <button onClick={modifyText}>Modificar textos</button>
    </div>
  );
}

export default ModifiTexto;
