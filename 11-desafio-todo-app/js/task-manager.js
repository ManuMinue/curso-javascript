const tareas = [];

export const Tarea = (texto) => ({
  id: Date.now(),
  texto: texto.trim(),
  completada: false,
});

export const agregarTarea = (texto) => {
  const tarea = Tarea(texto);
  tareas.push(tarea);
  return tarea;
};

export const eliminarTarea = (id) => {
  const index = tareas.findIndex((tarea) => tarea.id === id);
  if (index !== -1) {
    tareas.splice(index, 1);
    return true;
  }
  return false;
};

export const alternarEstado = (id) => {
  const tarea = tareas.find((tarea) => tarea.id === id);
  if (tarea) {
    tarea.completada = !tarea.completada;
    return true;
  }
  return false;
};

export const obtenerTareas = () => [...tareas];

export const cargarTareas = (tareasCargadas) => {
  tareas.length = 0;
  tareas.push(...tareasCargadas);
};
