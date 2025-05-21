import React, { useEffect, useState } from "react";
import { escritos } from "../pages/Pensamientos"; // ajusta la ruta si es necesario

const shuffleArray = (array) => {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

function PensamientoAleatorio() {
  const [randomEscrito, setRandomEscrito] = useState(shuffleArray(escritos)[0]);
  

  useEffect(() => {
    const interval = setInterval(() => {
        const nuevo = shuffleArray(escritos)[0];
        setRandomEscrito(nuevo);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`card d-flex flex-column justify-content-center align-items-center`}
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '40vh'
      }}>
      <div className="card-body d-flex flex-column justify-content-between w-100">
        {/* Título alineado a la izquierda en la parte superior */}
        <h5 className="card-title text-start">{randomEscrito.title}</h5>
  
        {/* Contenido centrado */}
        <p className="card-text text-center">{randomEscrito.content}</p>
      </div>
    </div>
  );
  
}

export default PensamientoAleatorio;