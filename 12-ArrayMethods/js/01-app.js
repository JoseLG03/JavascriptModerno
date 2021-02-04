const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

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

meses.forEach( (mes) =>{console.log(mes)});

let resultado = meses.includes("Febrero");

console.log(resultado);
//En un arreglo de objetos se usa el .some

let res = carrito.some( (producto) => {
    return producto.nombre == "Celular";
} );

console.log(res);