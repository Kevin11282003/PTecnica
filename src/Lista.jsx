import React, { useState } from "react";

function Lista() {
  const [showList, setShowList] = useState(false);

  const dataList = ["Elemento 1", "Elemento 2", "Elemento 3", "Elemento 4"];

  return (
    <div>
      <button onClick={() => setShowList(!showList)}>Mostrar lista</button>
      {showList && (
        <ul>
          {dataList.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Lista;
