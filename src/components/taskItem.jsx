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
    const datos = JSON.parse(localStorage.getItem("tareas")) || [];
    setTareas(datos);
  };

  return (
    <div className="contenedor-tareas">
      <h2>Listado de Tareas</h2>

      {tareas.length === 0 ? (
        <div className="sin-tareas">
          No existen tareas registradas.
        </div>
      ) : (
        <ul className="lista-tareas">
          {tareas.map((tarea) => (
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
          ))}
        </ul>
      )}
    </div>
  );
};

export default AppTareas;