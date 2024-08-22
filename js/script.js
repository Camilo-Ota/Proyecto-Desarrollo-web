const comidas = [
    {
        id: 1,
        nombre: "Rollitos de primavera",
        descripcion: "Rollo elaborado de una pasta relleno de diferentes verduras picadas",
        precio: 5000,
    },
    {
        id: 2,
        nombre: "Palitos de mozzarella",
        descripcion: "Trozos alargados de queso mozzarella empanados y fritos",
        precio: 10000,
    },
    {
        id: 3,
        nombre: "Nachos",
        descripcion: "Trozos de tortilla de maíz fritos, cubiertos de queso, chiles, tomates, cebollas y carne molida",
        precio: 14000,
    },
    {
        id: 4,
        nombre: "Jalapeño Poppers",
        descripcion: "Chiles jalapeños ahuecados fritos, rellenos de queso, especias y carne molida",
        precio: 11000,
    },
    {
        id: 5,
        nombre: "Dumplings",
        descripcion: "Trozos de masa rellenos de carne o pescado, cocidos o horneados",
        precio: 12000,
    },
];

const contenedorEntradas = document.getElementById("comida-container");

function crearTarjetasProductosInicio(productos) {
    if (!contenedorEntradas) {
        console.error('El contenedor de entradas no se encuentra.');
        return;
    }
    productos.forEach(producto => {
        const nuevaComida = document.createElement("div");
        nuevaComida.classList.add("tarjeta-producto");
        nuevaComida.innerHTML = `
            <img src="./imagenesentradas/${producto.id}.jpg" alt="${producto.nombre}">
            <h3>${producto.nombre}</h3>
            <p class="precio">$${producto.precio}</p>
            <button>Agregar al carrito</button>`;
        contenedorEntradas.appendChild(nuevaComida);
        nuevaComida.querySelector("button").addEventListener("click", () => agregarAlCarrito(producto));
    });
}

function agregarAlCarrito(producto) {
    // Aquí deberías implementar la lógica para agregar el producto al carrito
    console.log(`Producto agregado al carrito: ${producto.nombre}`);
}

// Llama a la función para mostrar las tarjetas de productos
document.addEventListener("DOMContentLoaded", () => {
    crearTarjetasProductosInicio(comidas);
});
