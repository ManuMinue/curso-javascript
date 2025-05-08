const productos = [
  { nombre: "Laptop Lenovo", precio: 1200, categoria: "laptop" },
  { nombre: "Monitor LG", precio: 800, categoria: "monitor" },
  { nombre: "Laptop Dell", precio: 14200, categoria: "laptop" },
  { nombre: "Monitor Samsung", precio: 600, categoria: "monitor" },
];

const filtrarProductos = (minPrecio = 0, categoria = "") => {
  return productos.filter(
    (producto) =>
      producto.precio >= minPrecio &&
      (categoria.length === 0 || producto.categoria === categoria)
  );
};

const mostrarProductos = (productos) => {
  const contenedor = document.querySelector("#productlist");

  contenedor.innerHTML = "";
  productos.forEach((producto) => {
    const div = document.createElement("div");
    div.classList.add("producto");
    div.innerHTML = `
            <h3>${producto.nombre}</h3>
            <p>Precio: $${producto.precio}</p>
            <p>Categoria: ${producto.categoria}</p>
        `;
    contenedor.appendChild(div);
  });
};

document.getElementById("applyFilters").addEventListener("click", () => {
  const minPrecio = parseInt(document.getElementById("minPrice").value) || 0;
  const categoria = document.getElementById("categoria").value;

  console.log(minPrecio, categoria);
  mostrarProductos(filtrarProductos(minPrecio, categoria));
});

mostrarProductos(productos);
