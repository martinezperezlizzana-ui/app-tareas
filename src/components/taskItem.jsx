import { useState, useEffect } from "react";

const TaskItem = ({tarea}) => {
 
  return (
  
            <li
              key={tarea.id}
              className={`tarea ${tarea.completada ? "completada" : ""}`}
            >
              <div className="contenido-tarea">
                <span>{tarea.titulo}</span>

                <span className="estado">
                  {tarea.completada ? "✔ Completada" : "⏳ Pendiente"}
                </span>
              </div>
            </li>
        
  );
};

export default TaskItem;