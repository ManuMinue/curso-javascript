import { agregarTarea } from "./task-manager.js";
import { renderizarTareas } from "./ui.js";
import { guardarEnStorage, cargarDesdeStorage } from "./storage.js";

document.getElementById("agregarBtn").addEventListener("click", () => {
  const input = document.getElementById("nuevaTarea");
  const tarea = input.value.trim();
  if (tarea) {
    agregarTarea(tarea);
    guardarEnStorage();
    renderizarTareas();
    input.value = "";
  }
});

window.addEventListener("DOMContentLoaded", () => {
  cargarDesdeStorage();
  renderizarTareas();
});
