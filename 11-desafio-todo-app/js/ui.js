import {
  obtenerTareas,
  eliminarTarea,
  alternarEstado,
} from "./task-manager.js";
import { guardarEnStorage } from "./storage.js";

export const renderizarTareas = () => {
  const tareas = obtenerTareas();
  const lista = document.getElementById("listaTareas");
  lista.innerHTML = "";

  tareas.forEach(({ id, texto, completada }) => {
    const li = document.createElement("li");
    li.dataset.id = id;

    const textoTarea = document.createElement("span");
    textoTarea.textContent = texto;
    textoTarea.className = completada ? "done" : "";
    textoTarea.onclick = () => manejarCambioEstado(id);

    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "❌";
    btnEliminar.onclick = () => manejarEliminacion(id);

    li.append(textoTarea, btnEliminar);
    lista.appendChild(li);
  });
};

const manejarCambioEstado = (id) => {
  alternarEstado(id);
  guardarEnStorage();
  renderizarTareas();
};

const manejarEliminacion = (id) => {
  eliminarTarea(id);
  guardarEnStorage();
  renderizarTareas();
};
