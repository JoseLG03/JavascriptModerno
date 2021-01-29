let auto = {
    modelo: "Mustang",
    año: 1980,
    motor: "v8"
}

for( let propiedad in auto){
    console.log(`${auto[propiedad]}`);
}

let tareas = ["estudiar", "bañarse", "cantar", "dormir"];

tareas.forEach( (pendientes) => { console.log(pendientes) });

tareas.forEach((pendientes, i) =>{ console.log(`La pendiente ${pendientes} tiene el index: ${i}.`) });

let carrito = [
    {nombre:"Monitor", precio:500},
    {nombre:"TV", precio: 600},
    {nombre:"Blu-Ray", precio: 300},
    {nombre:"DVD", precio: 700},
    {nombre:"Estufa", precio: 1500},
    {nombre:"Microndas", precio: 800},
    {nombre:"Plancha", precio: 700}
];

carrito.forEach( (productos) => { console.log(productos.nombre) });
carrito.forEach( productos =>  console.log(productos) );
carrito.map( productos =>  console.log(productos) );