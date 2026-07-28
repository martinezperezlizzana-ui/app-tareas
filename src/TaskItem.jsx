import React, { useEffect, useState } from "react";
import "./TaskItem.css";

const STORAGE_KEY = "tareas_app";

const TaskItem = () => {
  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState("");

  // Cargar tareas desde localStorage
  useEffect(() => {
    const datos = localStorage.getItem(STORAGE_KEY);

    if (datos) {
      setTareas(JSON.parse(datos));
    }
  }, []);

  // Guardar tareas en localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tareas));
  }, [tareas]);

  const agregarTarea = () => {
    if (nuevaTarea.trim() === "") return;

    const tarea = {
      id: Date.now(),
      texto: nuevaTarea,
      completada: false,
    };

    setTareas([...tareas, tarea]);
    setNuevaTarea("");
  };

  const completarTarea = (id) => {
    setTareas(
      tareas.map((tarea) =>
        tarea.id === id
          ? { ...tarea, completada: !tarea.completada }
          : tarea
      )
    );
  };

  const eliminarTarea = (id) => {
    setTareas(tareas.filter((tarea) => tarea.id !== id));
  };

  return (
    <div className="contenedor-tareas">
      <h2>Lista de Tareas</h2>

      <div className="agregar">
        <input
          type="text"
          placeholder="Nueva tarea..."
          value={nuevaTarea}
          onChange={(e) => setNuevaTarea(e.target.value)}
        />

        <button onClick={agregarTarea}>
          Agregar
        </button>
      </div>

      <ul>
        {tareas.map((tarea) => (
          <li key={tarea.id}>
            <span
              className={tarea.completada ? "completada" : ""}
              onClick={() => completarTarea(tarea.id)}
            >
              {tarea.texto}
            </span>

            <button
              className="eliminar"
              onClick={() => eliminarTarea(tarea.id)}
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskItem;