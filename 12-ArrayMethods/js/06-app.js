const meses = ['Enero', 'Febrero', "Marzo", 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
    { nombre: "Laptop", precio:1500},
    { nombre: "Pantalla", precio:4550}
]

//todos los elementos deben cumplir la condicion 
let resultado = carrito.every( (producto) => producto.precio <400);

console.log(resultado);

//algunos los elementos deben cumplir la condicion 
let resultado2 = carrito.some( (producto) => producto.precio <400);

console.log(resultado);

console.log(resultado2);