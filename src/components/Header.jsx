import React, { useEffect, useState } from "react";
import "./Header.css";

const Header = () => {
  const [tarea, setTarea] = useState("");
  const [tareas, setTareas] = useState([]);

  // Cargar tareas desde localStorage
  useEffect(() => {
    const tareasGuardadas = JSON.parse(localStorage.getItem("tareas")) || [];
    setTareas(tareasGuardadas);
  }, []);

  // Guardar tareas en localStorage
  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(tareas));
  }, [tareas]);

  const agregarTarea = (e) => {
    e.preventDefault();

    // Validar que la tarea no esté vacía
    if (tarea.trim() === "") {
      alert("Debe ingresar una tarea.");
      return;
    }

    const nuevaTarea = {
      id: Date.now(),
      texto: tarea,
      completada: false,
    };

    setTareas([...tareas, nuevaTarea]);

    // Limpiar el campo de texto
    setTarea("");
  };

  return (
    <div className="contenedor">
      <header className="encabezado">
        <h1>📋 Aplicación de Tareas</h1>
        <p>Organiza tus actividades diarias</p>
      </header>

      <form className="formulario" onSubmit={agregarTarea}>
        <input
          type="text"
          placeholder="Escribe una nueva tarea..."
          value={tarea}
          onChange={(e) => setTarea(e.target.value)}
        />

        <button type="submit">Agregar</button>
      </form>

      <div className="lista">
        {tareas.length === 0 ? (
          <p className="mensaje">No hay tareas registradas.</p>
        ) : (
          <ul>
            {tareas.map((item) => (
              <li key={item.id}>{item.texto}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Header;