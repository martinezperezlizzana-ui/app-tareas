import React, { useEffect, useState } from "react";
import "./TaskList.css";
import Emptystate from "./Emptystate";

const AppTareas = () => {
  const [tareas, setTareas] = useState([]);


   useEffect(() => {
    cargarTareas();

    // Actualiza la lista si otro componente modifica localStorage
    window.addEventListener("storage", cargarTareas);

    return () => {
      window.removeEventListener("storage", cargarTareas);
    };
  }, []);

  const cargarTareas = () => {
    const tareasGuardadas = JSON.parse(localStorage.getItem("tareas")) || [];
    setTareas(tareasGuardadas);
  };

  return (
    <div className="contenedor-tareas">
      <h2>Lista de Tareas</h2>

      {tareas.length === 0 ? (
        <Emptystate/>
      ) : (
        <ul className="lista-tareas">
          {tareas.map((tarea) => (
            <TaskItem tarea={tarea}/>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AppTareas;