import React, { useEffect, useState } from "react";
import { escritos } from "../pages/Pensamientos"; // ajusta la ruta si es necesario
import { useTheme } from '../context/ThemeContext';

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
  const [isVisible, setIsVisible] = useState(true);
    const { theme } = useTheme();
  

  useEffect(() => {
    const interval = setInterval(() => {
        setIsVisible(false);
        setTimeout(() => {
            const nuevo = shuffleArray(escritos)[0];
            setRandomEscrito(nuevo);
            setIsVisible(true);
        }, 1000); // Espera .5 segundo antes de mostrar el nuevo pensamiento
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`${theme === 'dark' ? "bg-dark text-white" : "bg-light text-dark"}  card d-flex flex-column justify-content-center align-items-center`}
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '40vh',
      }}>
      <div className={`card-body d-flex flex-column justify-content-between w-100 transition-opacity ${isVisible ? "opacity-100" : "opacity-0"}`}
        style={{
            opacity: isVisible ? 1 : 0,
            
            transition: 'opacity 1s ease-in-out',
        }}>
        {/* Título alineado a la izquierda en la parte superior */}
        <h5 className="card-title text-start">{randomEscrito.title}</h5>
  
        {/* Contenido centrado */}
        <p className="card-text text-start">{randomEscrito.content}</p>
      </div>
    </div>
  );
  
}

export default PensamientoAleatorio;