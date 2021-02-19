window.addEventListener("scroll", ()=>{
    let hospedaje = document.querySelector(".hospedaje");

    let ubicacion = hospedaje.getBoundingClientRect();

    if(ubicacion.top < 800){
        console.log("Ya puedes ver el elemento");   
    }else{
         console.log("El elemento aun es invisible");
    }
});