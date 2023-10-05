var number=0;//sea el valor inicial del número 0.
var dom=document.querySelector("h2");
//la función que comprobar este número si es mayor que 0, menor que 0, o igual que 0. Y se va un tipos de colores en cada caso.
function comprobar(number) {
    if (number==0) {
      //si este número es igual que 0, va a mostrar el color de negro.
        dom.style.color="black";
     }else if (number>0) {
      //si este número es mayor que 0, va a mostrar el color de verde.
        dom.style.color="green";
     }else if (number<0){
      //si este número es menor que 0, va a mostrar el color de rojo.
        dom.style.color="red";
     }
}
//la función f1 es para agregar 1 al número cuando clica bóton "aumentar" cada vez.
function f1() { 
    number++;
    dom.innerHTML=number;
    comprobar(number);
 }
 //la función f2 es para que el número menos 1 cuando clica bóton "disminuir" cada vez
 function f2() { 
    number--;
    dom.innerHTML=number;
    comprobar(number);
 }
 //la función f3 es para que resetear este número cuando clica bóton "resetear" cada vez
 function f3() { 
    number=0;
    dom.innerHTML=number;
    comprobar(number);
 }
 
