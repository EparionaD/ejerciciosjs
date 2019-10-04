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
/*var numero1 = prompt("Ingrese primer número");
var numero2 = prompt("Ingrese segundo número");
var numero3 = prompt("Ingrese tercer número");
var mayor;

console.log(numero1);
console.log(numero2);
console.log(numero3);

if( numero1 == numero2 && numero1 == numero3){
    document.write("Número ingresados iguales");
}else{
    if(numero1>numero2){
        if(numero1>numero3){
            mayor = numero1;
            document.write("El mayor es:"+mayor);
        }else{
            mayor = numero3;
            document.write("El mayor es:"+mayor);
        }
    }else if(numero2>numero3){
        mayor = numero2;
        document.write("El mayor es:"+mayor);
    }else{
        mayor = numero3;
        document.write("El mayor es:"+mayor);
    }
}*/

//Ejercicio7
/*var numero = prompt("Ingrese un número");

if (numero === ""){
    document.write("El número ingresa es incorrector");
}else{
    if(numero % 2 === 0){
        document.write("El número es divisible por 2");
    }else{
        document.write("El número no es divisible por 2");
    }
}*/

//Ejercicio 8

/*var mesesCalendario = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","setiembre","octubre","noviembre","diciembre"];
console.log(mesesCalendario);*/

//Ejercicio 9

/*var valores = [true,5, false,"hola", "adios",2];


if(valores.indexOf('hola')> valores.indexOf('adios')){
    console.log(valores[3]+" Es mayor");
}else{
    console.log(valores[4]+" Es mayor");
}

var dato = valores[1];
var dato1 = valores[5];

console.log(dato += dato1);
console.log(dato -= dato1);
console.log(dato *= dato1);
console.log(dato /= dato1);
console.log(dato %= dato1);*/

//Ejercicio 10

/*var tipoBomba = prompt("Ingrese el tipo de bomba");

switch(tipoBomba){
    case '0':
        document.write("No hay establecido un valor definido para el tipo de bomba");
        break;
    case '1':
        document.write("La bomba es una bomba de agua");
        break;
    case '2':
        document.write("La bomba es una bomba de gasolina");
        break;
    case '3':
        document.write("La bomba es una bomba de hormigón");
        break;
    case '4':
        document.write("La bomba es una bomba de pasta alimenticia");
        break;
    default:
        document.write("No existe un valor valido para tipo de bomba");
        break;
}*/

//Ejercicio 11
/*var edad = 21

edad >= 18?console.log("Tienes permiso de tomar"):console.log("Ustes es menor de edad. No puedes tomar");*/