const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
//
const btn=document.querySelector("button");
//agrega un EventListener del botón que contiene un envento de clic y la función que cambia el color del fondo.
btn.addEventListener("click",function cambiaBackground() {
    //crear un variable del número entero aleatorio
    let aleatorio=Math.floor((Math.random() * (colors.length)));
    //se cambia el color del fondo por el cambio de elementos del array colores.
    document.body.style.backgroundColor =  colors[aleatorio];
    //muestra el nombre del color en la página
    document.querySelector("span").textContent= colors[aleatorio];
})

    