
import PensamientoAleatorio from "./ComponenteAleatorio";
import React from "react";

function Home() {

    return (
        <div className="container mt-5 home-bg">
          {/* Sección de bienvenida */}
          <div className="row mb-5">
            <div className="col text-center">
              <h1 className="mb-3">Bienvenida</h1>
              <p className="lead">Mi blog personal con las cosas que escribe Gabriela.</p>
            </div>
          </div>
      
          {/* Sección de pensamiento aleatorio */}
          <div className="row mb-4">
            <div className="col text-center">
              <h2>No se me ocurre que poner aqui</h2>
            </div>
          </div>
          
          <PensamientoAleatorio />
        </div>
      );
      
};
export default Home;