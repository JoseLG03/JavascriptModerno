let tareas = ["estudiar", "bañarse", "cantar", "dormir"];

let carrito = [
    {nombre:"Monitor", precio:500},
    {nombre:"TV", precio: 600},
    {nombre:"Blu-Ray", precio: 300},
    {nombre:"DVD", precio: 700},
    {nombre:"Estufa", precio: 1500},
    {nombre:"Microndas", precio: 800},
    {nombre:"Plancha", precio: 700}
];

for( let tarea of tareas){
    console.log(tarea);
}

for (let producto of carrito){
    console.log(producto.nombre);
}
//for of itera sobre arreglos

//for in itera sobre objetos

for (let producto in carrito){
    console.log(producto);
}

let auto = {
    modelo:"Camaro",
    año:1978,
    motor:6.5
}

for( let [i, propiedad] of Object.entries(auto) ){
    console.log(`El ${i} es: ${propiedad}.`);
}