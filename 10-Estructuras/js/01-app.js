for(let i = 0; i <= 20; i++){
    if( i%2 === 0){
        console.log(`El número ${i} es Par.`);
    }else{
        console.log(`El número ${i} es Impar.`);
    }
}

let carrito = [
    {nombre:"Monitor de 45 pulgadas", precio:120},
    {nombre:"Smart TV", precio:200},
    {nombre:"Switch", precio:700, descuento: true},
    {nombre:"Camara", precio:1050},
    {nombre:"Laptop", precio:160}
];

for( i = 0; i < carrito.length; i++ ){
    if(carrito[i].descuento){
        console.log(`El producto ${carrito[i].nombre} tiene descuento.`);
        continue;
    }
    console.log(carrito[i].nombre);
};