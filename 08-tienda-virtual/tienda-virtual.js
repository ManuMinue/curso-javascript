// ✅ Lista de productos disponibles
const productos = ["Laptop", "Mouse", "Teclado", "Pantalla", "Audífonos"];

// ✅ Clientes registrados con sus carritos (sin repeticiones)
const cliente1 = {
  nombre: "Ana",
  carrito: new Set(["Laptop", "Mouse", "Laptop"]), // Repite 'Laptop'
};

const cliente2 = {
  nombre: "Luis",
  carrito: new Set(["Teclado", "Pantalla", "Mouse"]),
};

// ✅ Mapa que relaciona cliente → carrito
const compras = new Map();
compras.set(cliente1.nombre, cliente1.carrito);
compras.set(cliente2.nombre, cliente2.carrito);

// ✅ Función para mostrar resumen con destructuring y template literals
function mostrarResumen(compras) {
  for (const [cliente, carrito] of compras) {
    // Destructuring del Set a array para mostrar productos
    const productosComprados = [...carrito];

    // Template literal para presentar el resumen
    const resumen = `
🧾 Resumen de compra
Cliente: ${cliente}
Productos (${productosComprados.length}): ${productosComprados.join(", ")}
---------------------------------------------
`;
    console.log(resumen);
  }
}

// ✅ Mostrar resumen de todas las compras
mostrarResumen(compras);
