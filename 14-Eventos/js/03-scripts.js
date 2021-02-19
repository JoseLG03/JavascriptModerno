let cardDiv = document.querySelector(".card");

let infoDiv = document.querySelector(".info");

let titulo = document.querySelector(".titulo");

cardDiv.addEventListener( "click", (e)=>{ 
    e.stopPropagation();
    console.log("Click en la card");
});

infoDiv.addEventListener( "click", (e)=>{
    e.stopPropagation();
    console.log("Click en la Div");
});

titulo.addEventListener("click", (e)=>{
    e.stopPropagation();
    console.log("Click en titulo");
});