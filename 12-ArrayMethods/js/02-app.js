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

//encontrar el valor del indice
let indice = meses.findIndex( mes => mes == 'Mayo');

console.log(indice);

//encontar el valor del indice en un arreglo de objetos
let i = carrito.findIndex( producto =>  producto.precio == 1500);

console.log(i);