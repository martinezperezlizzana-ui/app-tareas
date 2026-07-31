import React, { useEffect, useState } from "react";
import "./AppTareas.css";

const AppTareas = () => {
  const [tareas, setTareas] = useState([]);

  useEffect(() => {
    cargarTareas();
  }, []);

  const cargarTareas = () => {
    const tareasGuardadas = JSON.parse(localStorage.getItem("tareas")) || [];
    setTareas(tareasGuardadas);
  };

  return (
    <div className="contenedor-tareas">
      <h2>Lista de Tareas</h2>

      {tareas.length === 0 ? (
        <div className="mensaje-vacio">
          <p>No existen tareas registradas.</p>
        </div>
      ) : (
        <ul className="lista-tareas">
          {tareas.map((tarea) => (
            <li
              key={tarea.id}
              className={`item-tarea ${
                tarea.completada ? "completada" : ""
              }`}
            >
              <div className="contenido-tarea">
                <h3>{tarea.titulo}</h3>

                {tarea.descripcion && (
                  <p>{tarea.descripcion}</p>
                )}

                <span className="estado">
                  {tarea.completada
                    ? "✔ Completada"
                    : "⏳ Pendiente"}
                </span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AppTareas;