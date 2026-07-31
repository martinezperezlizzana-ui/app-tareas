import React, { useEffect, useState } from "react";
import "./Emptystate.css";

const Emptystate = ({
  storageKey = "tasks",
  title = "No hay tareas",
  description = "Aún no has agregado ninguna tarea.",
  buttonText = "Crear primera tarea",
  onCreate,
}) => {
  const [isEmpty, setIsEmpty] = useState(true);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(storageKey)) || [];
    setIsEmpty(data.length === 0);
  }, [storageKey]);

  if (!isEmpty) return null;

  return (
    <div className="empty-state">
      <div className="empty-state__icon">
        📝
      </div>

      <h2 className="empty-state__title">
        {title}
      </h2>

      <p className="empty-state__description">
        {description}
      </p>

      {onCreate && (
        <button
          className="empty-state__button"
          onClick={onCreate}
        >
          {buttonText}
        </button>
      )}
    </div>
  );
};

export default Emptystate;