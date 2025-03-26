import React, { useState } from "react";

function MostrarObjeto() {
  const [showData, setShowData] = useState(false);

  const user = {
    name: "Kevin Castro",
    age: 21,
    profession: "Estudiante",
  };

  return (
    <div>
      <button onClick={() => setShowData(!showData)}>
        Mostrar datos del objeto
      </button>
      {showData && (
        <div>
          <p>Nombre: {user.name}</p>
          <p>Edad: {user.age}</p>
          <p>Profesión: {user.profession}</p>
        </div>
      )}
    </div>
  );
}

export default MostrarObjeto;
