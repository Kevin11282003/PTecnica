import React, { useState } from "react";

function ValidarNum() {
  const [number, setNumber] = useState(0);
  const [isGreaterThanTen, setIsGreaterThanTen] = useState(null);

  const validateNumber = () => {
    setIsGreaterThanTen(number > 10);
  };

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
      />
      <button onClick={validateNumber}>Validar si es mayor a 10</button>
      {isGreaterThanTen !== null && (
        <p>{isGreaterThanTen ? "Es mayor a 10" : "No es mayor a 10"}</p>
      )}
    </div>
  );
}

export default ValidarNum;
