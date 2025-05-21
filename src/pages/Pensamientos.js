
import React, { useState } from "react";
import { useTheme } from './context/ThemeContext';

export const escritos = [
  {
    id : 1,
    title : "Quarks",
    summary : [`Sabias que los porcentajes son reversibles?`],
    content : [
    "Sabias que los porcentajes son reversibles?", 
    "La verdad una de las mejores cosas q he escuchado.", 
    "Usando la reversibilidad para hablar de equivalencia,", 
    "o proporcionalidad y sabiendo que esta misma es la relación",
    "de igualdad que existe entre dos razones, empecemos diciendo ",
    "que la razón x la q estamos hoy aquí es bastante proporcional",
    "a los sentimientos; Xq somos eso, un cúmulo de ganas de querernos",
    "bien y bonito, somos en forma cualitativa y cuantitativa, somos",
    "en todas las lenguas, en todas las historias, en este universo",
    "y en el otro, somos quarks con nombres divertidos y puestos ",
    `a querer ser alguno de los 6 tipos descritos en nuestra física
    cuántica me encanta el quark encanto, puestos a q estos son
    clasificados por cantidad de masa creciente me encanta pensar 
    q llegaremos a ser quark primero, que como los porcentajes es 
    reversible pues el primero es el último. Me gusta pensar que
    somos igual de reversibles que los porcentajes, igual de fijos,
    de lógicos, de números, de cantidades, como cuando piensas que
    me amas y aun así ese valor puede ser totalmente reversible e
    igual a que yo te ame. Alguien dijo q los sentimientos no son
    cuantificables, yo si creo q lo son, si creo q exista la posibilidad
    de cuánto queramos ser, aunque yo últimamente encuentre similitud en 
    todo, incluso en un simple cálculo, en una partícula, con el conocimiento
    de q somos tan simples como eso pero podemos llegar a ser gigantes, ahora 
    cada vez q recuerdes un porcentaje recordarás que muchas cosas pueden ser 
    reversibles y que`,
     <b key='b'>tú y yo somos una de ellas.</b>],
  },
  {
    id : 2,
    title : "La Chica de la Ventana",
    summary : [`Los lunes por las mañanas, a veces, se asoma, un poco de sol por la ventana,
    de manera ocasional, casi tan ocasional como las veces que recuerdo que eres fugaz:`],
    content : [ 
      `Los lunes por las mañanas, a veces, se asoma, un poco de sol por la ventana, 
      de manera ocasional, casi tan ocasional como las veces que recuerdo que eres fugaz: 
      una estrella fugaz, de esas que ves pasar una vez en la vida, 
      cierras los ojos pides un deseo y rezas porque se te cumpla.
      Quizás en este caso, me conformo con abrir los ojos y saber que aún estás ahí,
      q aun no te has ido, aunque quiera perdidamente que se cumpla el deseo,
      aunque quiera perdidamente que no seas fugaz. Te imagino, a veces,  
      cuando no pasas fugazmente, te imagino tantas veces, dejando de ser fugaz, 
      dejando de estar en la atmósfera, dejando de ser un fenómeno luminoso; 
      te imagino a mi lado, tocándote, ya no eres una roca q viajaba por el espacio a altas velocidades 
      formando un fenómeno luminoso al entrar en la atmósfera, así de inalcanzable, 
      te imagino humano, equivocándote, sonriendo, te imagino fuerte y frágil, 
      te imagino cercano, cogido de mi mano, sin miedo, con ganas, te imagino siendo tu! 
      Supongo q aún así, entiendo q nada pase, q nada interfiera
      en la ilusión óptica de que eres una estrella fugaz y al verte, 
      cierro los ojos para pedir un deseo, y pido que cuando los vuelva a abrir 
      estés aun ahí, aunque sea por unos segundos.`,
      <br key="br"/>,
      <b key="bold">Tuya,</b>,
      <br key="br"/>,
      <b key="b">La chica de la ventana,</b>
    ],
  },
  
]

function Pensamientos() {

  const { theme } = useTheme();
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };


  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Pensamientos</h1>
      <div className="row g-3 justify-content-center">
        {escritos.map((pensamientos) => (
          <div className="col-12 col-md-6 d-flex" key={pensamientos.id}>
            <div className=`card pensamiento-card text-white bg-dark flex-fill d-flex flex-column` style={{ maxHeight: expanded[pensamientos.id] ? "none" : "200px", overflow: "hidden" }}>
            <div className="card-body d-flex flex-column" >
                <h5 className="card-title ">{pensamientos.title}</h5>
                <p className="card-text">
                  {expanded[pensamientos.id] ? pensamientos.content : pensamientos.summary}
                </p>
                <button
                  className="btn btn-primary mt-auto align-self-start"
                  onClick={() => toggleExpand(pensamientos.id)}
                >
                  {expanded[pensamientos.id] ? "Leer menos" : "Leer más"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Pensamientos;