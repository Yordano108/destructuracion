const producto = {
    id: "PROD-10",
    precio: 29.99,
    nombre: "Teclado Mecánico",
    marca: "Logitech",
    stock: 15,
};

const { id, precio, ...detalles } = producto;

console.log(id, precio);
console.log(detalles);
