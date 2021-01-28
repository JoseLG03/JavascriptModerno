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