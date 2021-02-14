let enlace = document.createElement("a");

enlace.textContent ="NuevoEnlace";

enlace.href = "./nuevo";

console.log(enlace);

let nav = document.querySelector(".navegacion");

//Lo agrega al final del div.
//nav.appendChild(enlace);

nav.insertBefore(enlace, nav.children[0]);