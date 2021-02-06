const meses = ['Enero', 'Febrero', "Marzo", 'Abril', 'Mayo', 'Junio', 'Julio'];
const meses2 = ['Agosto', 'Septiembre', 'Octubre'];
const meses3 = ['Noviembre', 'Diciembre'];

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

let annio = meses.concat(meses2, meses3);

console.log(annio);

//Si pones ... significa que es un arreglo

let annio2 = [...meses, ...meses2, ...meses3];

console.log(annio2);