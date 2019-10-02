//Ejercicio 1
/* alert("Bienvenido al mundo de Javascript"); */

//Ejercicio 2
/* document.write("Hola Mundo"); */

//Ejercicio 3
/* document.write(25+13); */

//Ejercicio 4
/* var nombreUsuario = prompt("Ingrese su nombre");
document.write("Hola " + nombreUsuario); */

//Ejercicio 5
/* var numero1 = prompt("Ingrese primer número");
var numero2 = prompt("Ingrese segundo número");

(numero1 > numero2)? document.write("El mayor es :"+numero1):document.write("El mayor es :"+numero2); */

//Ejercicio 6
var numero1 = prompt("Ingrese primer número");
var numero2 = prompt("Ingrese segundo número");
var numero3 = prompt("Ingrese tercer número");

console.log(numero1);
console.log(numero2);
console.log(numero3);

if(numero1>numero2){
    if(numero1>numero3){
        document.write("El mayor es: " + numero1);
    }else{
        document.write("El mayor es: " + numero3);
    }
}else if(numero2>numero3){
    document.write("El mayor es: " + numero2);
}else{
    document.write("El mayor es: " + numero3);
}
