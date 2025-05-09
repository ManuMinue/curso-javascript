import { obtenerTareas } from "./task-manager.js";

export const guardarEnStorage = () => {
  const tareas = obtenerTareas();
  const tareasJSON = JSON.stringify(tareas);

  localStorage.setItem("misTareas", tareasJSON);
};

export const cargarDesdeStorage = () => {
  try {
    const tareas = JSON.parse(localStorage.getItem("misTareas"));
    return Array.isArray(tareas) ? tareas : [];
  } catch {
    return [];
  }
};
